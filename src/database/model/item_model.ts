import { Db_Model } from "../db";

const tableName = 'item';
const Item_Model = `CREATE TABLE ${tableName} (
id VARCHAR(36) DEFAULT (UUID()) NOT NULL UNIQUE PRIMARY KEY,
name VARCHAR(255) NOT NULL,
category VARCHAR(255) NOT NULL,
pic_path VARCHAR(255) NOT NULL,
info VARCHAR(255) NOT NULL,
price INT NOT NULL,
count INT NOT NULL DEFAULT 0
)`;

export default { tableName, model: Item_Model } as Db_Model;

interface Item_Model {
  id: number;
  name: number;
  category: string;
  price: number;
  info: string;
  pic_path: string;
  count: number;
}