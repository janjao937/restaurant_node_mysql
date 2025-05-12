import { Db_Model } from "../db";

const tableName = 'order_list';
const orderListModel = `CREATE TABLE ${tableName} (
id VARCHAR(36) DEFAULT (UUID()) NOT NULL UNIQUE PRIMARY KEY,
table_id INT NOT NULL,
item_id VARCHAR(36) NOT NULL,
count INT NOT NULL DEFAULT 0,
is_success INT NOT NULL DEFAULT 0,
created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)`;

export default { tableName, model: orderListModel } as Db_Model;

interface OrderList_Model {
  id: string;
  table_id: number;
  item_id: string;
  count: number;
  is_success: number; // 0 = not success, 1 = success
  created_at: string; //2025-05-12 15:14:00
}