import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import { useState, useEffect, useRef } from "react";

async function openDatabases() {
  const localFolder = FileSystem.documentDirectory + "SQLite";
  const dbName = "datas.db";
  const localURI = localFolder + "/" + dbName;

  if (!(await FileSystem.getInfoAsync(localFolder)).exists) {
    await FileSystem.makeDirectoryAsync(localFolder, {
      intermediates: true,
    });
  }

  let asset = Asset.fromModule(require("../assets/datas.db"));

  if (!asset.downloaded) {
    await asset.downloadAsync().then((value) => {
      asset = value;
    });

    let remoteURI = asset.localUri;

    await FileSystem.copyAsync({
      from: remoteURI,
      to: localURI,
    }).catch((error) => {
      console.log("asset copyDatabase - finished with error: " + error);
    });
  } else {
    // for iOS - Asset is downloaded on call Asset.fromModule(), just copy from cache to local file
    if (
      asset.localUri ||
      asset.uri.startsWith("asset") ||
      asset.uri.startsWith("file")
    ) {
      let remoteURI = asset.localUri || asset.uri;

      await FileSystem.copyAsync({
        from: remoteURI,
        to: localURI,
      }).catch((error) => {
        console.log("local copyDatabase - finished with error: " + error);
      });
    } else if (asset.uri.startsWith("http") || asset.uri.startsWith("https")) {
      let remoteURI = asset.uri;

      await FileSystem.downloadAsync(remoteURI, localURI).catch((error) => {
        console.log("local downloadAsync - finished with error: " + error);
      });
    }
  }
  return SQLite.openDatabase(dbName);
}

const useDatabase = () => {
  const [data, setData] = useState([]);
  const dbRef = useRef(null);

  useEffect(() => {
    const initDatabase = async () => {
      try {
        const dbObject = await openDatabases();
        dbRef.current = dbObject;
      } catch (error) {
        console.error("Error initializing database:", error);
      }
    };

    initDatabase();
  }, []);

  const request = async (tableName, conditions = "", parameters = []) => {
    try {
      const dbObject = await openDatabases();
      dbObject.transaction((tx) => {
        const query = `SELECT * FROM ${tableName} ${conditions}`;
        tx.executeSql(query, parameters, (_, { rows }) => {
          setData(rows._array);
        });
      });
    } catch (error) {
      console.error("Error initializing database:", error);
    }
  };

  return {
    data,
    request,
  };
};

export default useDatabase;
