import { Db_Model } from "../db";

const tableName = 'customer_table';
const customerTableModel = `CREATE TABLE ${tableName} (
id INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
seat INT NOT NULL 
)`;

export default { tableName, model: customerTableModel } as Db_Model;

interface CustomerTable_Model {
  id: number;
  seat: number;
}