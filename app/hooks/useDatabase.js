import React, { useState } from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("salahApp.db");

const useDatabase = () => {
  const [data, setData] = useState([]);

  const request = (tableName, conditions = "", parameters = []) => {
    try {
      db.transaction((tx) => {
        const query = `SELECT * FROM ${tableName} ${conditions}`;
        tx.executeSql(query, parameters, (_, { rows }) => {
          setData(rows._array);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    data,
    request,
  };
};

export default useDatabase;
