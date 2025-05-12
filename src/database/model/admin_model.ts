import { Db_Model } from "../db";

const tableName = 'admin';
const adminModel = `CREATE TABLE ${tableName} (
id VARCHAR(36) DEFAULT (UUID()) NOT NULL UNIQUE PRIMARY KEY,
role VARCHAR(255) NOT NULL,
name VARCHAR(255) NOT NULL,
lastname VARCHAR(255) NOT NULL,
username VARCHAR(255) NOT NULL,
phone_number VARCHAR(12) NOT NULL
)`;

export default { tableName, model: adminModel } as Db_Model;

interface Admin_Model {
  id: number;
  role: string; // may change to enum
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  phone_number: string;
}