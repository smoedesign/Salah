import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";

const db = SQLite.openDatabase("salahApp.db");

export default RegNotifications = (pushToken) => {
  const [data, setData] = useState([]);
  const reqest = async () => {
    try {
      await db.transaction(async (tx) => {
        await tx.executeSql(
          "SELECT * FROM salahToken WHERE token = ?",
          [pushToken],
          (_, { rows }) => {
            console.log(rows._array);
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    reqest,
  };
};
