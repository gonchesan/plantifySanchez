import * as SQLite from "expo-sqlite";

export const initDb = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("session.db");
    const createTable = await db.execAsync(`
                     PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT PRIMARY KEY NOT NULL,email TEXT NOT NULL,idToken TEXT NOT NULL,fullname TEXT NOT NULL);
            `);
    return createTable;
  } catch (error) {
    return error;
  }
};

export const insertSession = async (localId, email, idToken, fullname) => {
  try {
    const db = await SQLite.openDatabaseAsync("session.db");
    const newSession = await db.runAsync(
      `INSERT INTO sessionUser (localId,email,idToken,fullname) VALUES (?,?,?,?)`,
      [localId, email, idToken, fullname]
    );
    return newSession;
  } catch (error) {
    return error;
  }
};

export const fetchSession = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("session.db");
    const sessionUser = await db.getFirstAsync(`SELECT * FROM sessionUser `);
    return sessionUser;
  } catch (error) {
    return error;
  }
};

export const deleteSesion = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("session.db");
    const deleteSession = await db.runAsync(`DELETE FROM sessionUser `);
    return deleteSession;
  } catch (error) {
    return error;
  }
};
