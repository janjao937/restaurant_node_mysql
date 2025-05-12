import { Db_Model } from "../db";

const tableName = 'orders';
const orderModel = `CREATE TABLE ${tableName} (
id VARCHAR(36) DEFAULT (UUID()) NOT NULL UNIQUE PRIMARY KEY,
order_list_id VARCHAR(255) NOT NULL,
customer_table_id VARCHAR(255) NOT NULL,
member_id VARCHAR(255) NOT NULL,
enter_date_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
exit_date_time DATETIME NULL
)`;

export default { tableName, model: orderModel } as Db_Model;

interface Order_Model {
  id: string;
  customer_table_table_id: string;
  member_id: string;
  order_list_id: string;
  enter_date_time: string;
  exit_date_time: string;
}