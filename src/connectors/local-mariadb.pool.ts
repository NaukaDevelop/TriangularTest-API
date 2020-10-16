import * as dotenv from 'dotenv';
import * as mysql from 'mysql2/promise';
import { createPool } from 'mysql2/promise';

dotenv.config();

const myport = parseInt(process.env.DATABASE_PORT);

export async function localMariaDb() {
  const configPool = {
    host: process.env.LOCAL_DB_HOST,
    user: process.env.LOCAL_DB_USER_WRITE,
    password: process.env.LOCAL_DB_PASSWORD_WRITE,
    database: process.env.LOCAL_DB_NAME,
    connectionLimit: 10,
    connectTimeout: 60 * 60 * 1000,
    multipleStatements: true,
    timezone: '-04:00',
    dateStrings: true,
    port: myport,
  };

  const mariadbPool = mysql.createPool(configPool);

  return mariadbPool;
}
