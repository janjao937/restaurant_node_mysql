import { Db_Model } from "../db";

const tableName = 'member';
const memberModel = `CREATE TABLE ${tableName} (
id VARCHAR(36) DEFAULT (UUID()) NOT NULL UNIQUE PRIMARY KEY,
first_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
phone_number VARCHAR(12) NOT NULL,
token VARCHAR(255) NOT NULL,
point INT(11) NOT NULL,
started_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)`;

export default { tableName, model: memberModel } as Db_Model;

interface Member_Model {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  token: string;
  point: number;
  started_at: string; //2025-05-12 15:14:00
}