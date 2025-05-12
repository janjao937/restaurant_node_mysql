import { Db_Model } from "../db";

const tableName = 'customer_table';
const customerTableModel = `CREATE TABLE ${tableName} (
id int(11) UNIQUE PRIMARY KEY AUTO_INCREMENT,
seat int(11) NOT NULL 
)`;

export default { tableName, model: customerTableModel } as Db_Model;

interface CustomerTable {
  id: number;
  seat: number;
}