import { useState } from "react";

import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("salahApp.db");

export default azkarTable = (azkar) => {
  const [data, setData] = useState([]);
  const createhisAlmuslimTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS hisAlmuslim (
              _id TEXT PRIMARY KEY,
              indexid INTEGER ,
              name TEXT
            );`,
        [],
        (_, result) => {
          console.log(`created hisAlmuslim successfully`, result);
        },
        (_, error) => {
          console.error(`Error created hisAlmuslim`, error);
        }
      );
    });
  };

  const createAlazkarTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS alazkar (
          _id TEXT PRIMARY KEY,
          indexid INTEGER,
          description TEXT,
          refrance TEXT,
          countnumber TEXT,
          count INTEGER,
          hisAlmuslimId TEXT,
          FOREIGN KEY (hisAlmuslimId) REFERENCES hisAlmuslim(_id)
        );`,
        [],
        (_, result) => {
          console.log(`created alazkar successfully`, result);
        },
        (_, error) => {
          console.error(`Error inserting data intoalazkar`, error);
        }
      );
    });
  };
  const insertData = () => {
    hisAlmuslim.map((hisn) => {
      if (hisn.alazkar !== null) alazkar.push(hisn.alazkar);
    });
    db.transaction((tx) => {
      hisAlmuslim.map((hisn) => {
        tx.executeSql(
          `INSERT INTO hisAlmuslim (_id, name, indexid) VALUES (?, ?, ?)`,
          [hisn._id, hisn.name, hisn.indexid],
          (_, result) => {
            console.log(`INSERT INTO hisAlmuslim successfully`, result);
          },
          (_, error) => {
            console.error(`Error inserting data INTO hisAlmuslim`, error);
          }
        );
      });

      db.transaction((tx) => {
        hisAlmuslim.map((hisn) => {
          alazkar.forEach((item) => {
            tx.executeSql(
              `INSERT INTO alazkar (_id, indexid, description, refrance, countnumber, count, hisAlmuslimId) VALUES (?, ?, ?, ?, ?, ?, ?)`,
              [
                item._id,
                item.indexid,
                item.description,
                item.refrance,
                item.countnumber,
                item.count,
                hisn._id,
              ],
              (_, result) => {
                console.log(`INSERT INTO alazkar successfully`, result);
              },
              (_, error) => {
                console.error(`Error inserting data INTO alazkar`, error);
              }
            );
          });
        });
      });
    });
  };

  return { createhisAlmuslimTable, createAlazkarTable, insertData };
};

// /*const createAlazkarTable = (tx) => {
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS alazkar (
//       _id TEXT PRIMARY KEY,
//       indexid INTEGER,
//       description TEXT,
//       refrance TEXT,
//       countnumber TEXT,
//       count INTEGER,
//       hisAlmuslimId TEXT,
//       FOREIGN KEY (hisAlmuslimId) REFERENCES hisAlmuslim(_id)
//     );`,
//       [],
//       (_, result) => {
//         console.log(`Data inserted intoalazkar successfully`, result);
//       },
//       (_, error) => {
//         console.error(`Error inserting data intoalazkar`, error);
//       }
//     );
//   };

//       tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS hisAlmuslim (
//       indexid INTEGER PRIMARY KEY
//       name TEXT,
//     );`,
//       [],
//       (_, result) => {
//         console.log(`created hisAlmuslim successfully`, result);
//       },
//       (_, error) => {
//         console.error(`Error created hisAlmuslim`, error);
//       }
//     );
//   const insertData = (hisAlmuslim, alazkar) => {
//     db.transaction((tx) => {
//       // Insert into main_content table
//       tx.executeSql(
//         `INSERT INTO main_content (_id, name, indexid) VALUES (?, ?, ?)`,
//         [
//           hisAlmuslim._id,
//           hisAlmuslim.name,
//           hisAlmuslim.indexid,
//           // hisAlmuslim._rev,
//           // hisAlmuslim._type,
//           // hisAlmuslim._updatedAt,
//         ]
//       );

//       // Insert into alazkar table
//       alazkar.forEach((item) => {
//         tx.executeSql(
//           `INSERT INTO alazkar (_id, indexid, description, refrance, countnumber, count, hisAlmuslimId) VALUES (?, ?, ?, ?, ?, ?, ?)`,
//           [
//             item._id,
//             item.indexid,
//             item.description,
//             item.refrance,
//             item.countnumber,
//             item.count,
//             hisAlmuslimId._id,
//           ]
//         );
//       });
//     });*/

// db.transaction((tx) => {
//   names.map((name) => {
//     tx.executeSql(
//       `INSERT INTO namesOfAllah (_id, indexid, name, description) VALUES (?, ?, ?, ?)`,
//       [name._id, name.indexid, name.name, name.description],
//       (_, result) => {
//         console.log(`inserting into named of allah successfully`, result);
//       },
//       (_, error) => {
//         console.error(`Error created inserting into named of allah`, error);
//       }
//     );
//   });
// });
// db.transaction((tx) => {
//   tx.executeSql(
//     `SELECT * FROM fortyNawawia`,
//     null,
//     (_, result) => {
//       console(result.rows._array);
//     },
//     (_, error) => {
//       console.error(`Error created inserting into named of allah`, error);
//     }
//   );
// });
/*  db.transaction((tx) => {
      forty.map((fortys) => {
        tx.executeSql(
          `INSERT INTO fortyNawawia (_id, indexid, numbersofhadith, nameofhadith,description,reference) VALUES (?, ?, ?, ?,?,?)`,
          [
            fortys._id,
            fortys.indexid,
            fortys.numbersofhadith,
            fortys.nameofhadith,
            fortys.description,
            fortys.reference,
          ],
          (_, result) => {
            console.log(
              `inserting into fortyNawawia successfully`,
              result.rows._array
            );
          },
          (_, error) => {
            console.error(`Error inserting into fortyNawawia`, error);
          }
        );
      });
    }); */

/*   tx.executeSql(
          `INSERT INTO fortyNawawia (_id, indexid, numbersofhadith, nameofhadith,description,reference) VALUES (?, ?, ?, ?,?,?)`,
          [
            fortys._id,
            fortys.indexid,
            fortys.numbersofhadith,
            fortys.nameofhadith,
            fortys.description,
            fortys.reference,
          ],
          (_, result) => {
            console.log(
              `inserting into fortyNawawia successfully`,
              result.rows._array
            );
          },
          (_, error) => {
            console.error(`Error inserting into fortyNawawia`, error);
          }
        );*/
//   azkar.map((i) => {
//     if (i.alazkar != null) {
//       i.alazkar.forEach((item) => {
//         tx.executeSql(
//           `INSERT INTO alazkar (_id, indexid, description, refrance, countnumber, count,hisAlmuslimId) VALUES (?, ?, ?, ?, ?, ?,?)`,
//           [
//             item._id,
//             item.indexid,
//             item.description,
//             item.refrance,
//             item.countnumber,
//             item.count,
//             item.category._ref,
//           ],
//           (_, result) => {
//             console.log(`INSERT INTO alazkar successfully`, result);
//           },
//           (_, error) => {
//             console.error(`Error inserting data INTO alazkar`, error);
//           }
//         );
//       });
//     }
//   });
// });
// db.transaction((tx) => {
//   tx.executeSql(
//     `SELECT * FROM alazkar `,
//     null,
//     (_, result) => {
//       console.log(
//         `INSERT INTO hisAlmuslim successfully`,
//         result.rows._array
//       );
//     },
//     (_, error) => {
//       console.error(`Error inserting data INTO hisAlmuslim`, error);
//     }
//   );
// });
// db.transaction((tx) => {
//   azkar.map((hisn) => {
//     if (hisn != null) {
//       tx.executeSql(
//         `INSERT INTO hisAlmuslim (_id, name, indexid) VALUES (?, ?, ?)`,
//         [hisn._id, hisn.name, hisn.indexid],
//         (_, result) => {
//           console.log(`INSERT INTO hisAlmuslim successfully`, result);
//         },
//         (_, error) => {
//           console.error(`Error inserting data INTO hisAlmuslim`, error);
//         }
//       );
//       if (hisn.alazkar != null) {
//         hisn.alazkar.forEach((item) => {
//           tx.executeSql(
//             `INSERT INTO alazkar (_id, indexid, description, refrance, countnumber, count,hisAlmuslimId) VALUES (?, ?, ?, ?, ?, ?,?)`,
//             [
//               item._id,
//               item.indexid,
//               item.description,
//               item.refrance,
//               item.countnumber,
//               item.count,
//               item.category._ref,
//             ],
//             (_, result) => {
//               console.log(`INSERT INTO alazkar successfully`, result);
//             },
//             (_, error) => {
//               console.error(`Error inserting data INTO alazkar`, error);
//             }
//           );
//         });
//       }
//     }
//   });
// });
// db.transaction((tx) => {
//   tx.executeSql(
//     "DROP TABLE IF EXISTS your_table_name",
//     [],
//     (_, result) => {
//       console.log("Table deleted successfully");
//     },
//     (_, error) => {
//       console.error("Error deleting table", error);
//     }
//   );
// });

// db.transaction((tx) => {
//   data.map((ziker) => {
//     if (ziker.alazkar == null) console.log(null);
//     else {
//       ziker.alazkar.forEach((item) => {
//         item._id != null
//           ? tx.executeSql(
//               `INSERT INTO alazkar (_id, indexid, description, refrance, countnumber, count,hisAlmuslimId) VALUES (?, ?, ?, ?, ?, ?,?)`,
//               [
//                 item._id,
//                 item.indexid,
//                 item.description,
//                 item.refrance,
//                 item.countnumber,
//                 item.count,
//                 item.category._ref,
//               ],
//               (_, result) => {
//                 console.log(`INSERT INTO alazkar successfully`, result);
//               },
//               (_, error) => {
//                 console.error(`Error inserting data INTO alazkar`, error);
//               }
//             )
//           : console.log("null id");
//       });
//     }
//   });
// });
