import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("salahApp.db");

export const getAllHisalmuslim = () => {
  return new Promise((resolve, reject) => {
    
  });
};

export const getAlazkarByHisalmuslimId = (hisAlmuslimId) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM alazkar WHERE hisAlmuslimId = ?",
        [hisAlmuslimId],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};
