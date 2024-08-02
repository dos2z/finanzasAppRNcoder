import { Platform } from 'react-native';

let db;
if (Platform.OS !== 'web') {
  const ExpoSQLite = require('expo-sqlite');
  db = ExpoSQLite.openDatabase('sessions.db');
}

export const initSQLiteDB = () => {
  if (Platform.OS === 'web') return Promise.resolve();

  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);",
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
}

export const inserSession = ({ email, token, localId }) => {
  if (Platform.OS === 'web') return Promise.resolve();

  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO sessions (localId, email, token) VALUES (?,?,?)",
        [localId, email, token],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
}

export const getSession = () => {
  if (Platform.OS === 'web') return Promise.resolve({ rows: { _array: [] } });

  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * from sessions",
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
}

export const truncateSession = () => {
  if (Platform.OS === 'web') return Promise.resolve();

  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE from sessions",
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
}
