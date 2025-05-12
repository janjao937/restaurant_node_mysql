import mysql, { RowDataPacket } from 'mysql2/promise';
import * as dotenv from "dotenv";
import customerTableModel from './model/customer_table_model';
import memberModel from './model/member_model';
import adminModel from './model/admin_model';
import itemModel from './model/item_model';
import orderModel from './model/order_model';
import orderListModel from './model/order_list_model';

dotenv.config();

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '12345',
//     database: 'resturant_db',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });
export const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit:10,
    queueLimit: 0
});


// export async function testConnection() {
//     const pool = mysql.createPool({
//         host: 'localhost',
//         user: 'root',
//         password: '12345',
//         database: 'resturant_db'
//     });

//     const [rows] = await pool.query('SELECT 1 + 1 AS solution');
//     console.log(rows);
// }



// export async function checkDatabaseConnection() {
//     try {
//         const connection = await pool.getConnection();
//         console.log('✅ DB Connected!');
//         connection.release();
//     } catch (error) {
//         console.error('❌ Database connection failed:', error);
//     }
// }

//setup but not test cant use because pool
// export async function findOrCreateDB() {
//     try{
//         const dbName: string = "resturant_db";
//         const [rows] = await pool.query<RowDataPacket[]>(`SHOW DATABASES LIKE '${dbName}'`); // Check if the database exists
//         if (rows.length === 0) {
//             console.log(`📌 Database "${dbName}" not found. Creating it now...`);
//             await pool.query(`CREATE DATABASE ${dbName}`);
//             console.log(`✅ Database "${dbName}" created successfully.`);
//         } else {
//             console.log(`✅ Database "${dbName}" already exists.`);
//         }
//     } catch (error) { 
//         console.error('Database connection failed:', error);
//     }
// }

export async function findDB() {
    try{
        const dbName: string = "resturant_db";
        const [rows] = await pool.query<RowDataPacket[]>(`SHOW DATABASES LIKE '${dbName}'`); // Check if the database exists
        if (rows.length === 0) {
            console.log(`📌 Database "${dbName}" not found. Creating it now...`);
            // await pool.query(`CREATE DATABASE ${dbName}`);
            console.log(`✅ Database "${dbName}" created successfully.`);
        } else {
            console.log(`✅ Database "${dbName}" already exists.`);
        }
      } catch (error) { 
        console.error('Database connection failed:', error);
    }
}

export async function findOrCreateTable() {
  try {
      //customer_table
      const [customer_table_rows] = await pool.query<RowDataPacket[]>(`SHOW TABLES LIKE '${customerTableModel.tableName}'`); // Check if the table exists
      if (customer_table_rows.length === 0) {
          console.log(`📌 Table "${customerTableModel.tableName}" not found. Creating it now...`);
          await pool.query(customerTableModel.model);
          console.log(`✅ Table "${customerTableModel.tableName}" created successfully.`);
      } else {
          console.log(`✅ Table "${customerTableModel.tableName}" already exists.`);
      }
      //member
      const [member_rows] = await pool.query<RowDataPacket[]>(`SHOW TABLES LIKE '${memberModel.tableName}'`); // Check if the table exists
      if (member_rows.length === 0) {
          console.log(`📌 Table "${memberModel.tableName}" not found. Creating it now...`);
          await pool.query(memberModel.model);
          console.log(`✅ Table "${memberModel.tableName}" created successfully.`);
      } else {
          console.log(`✅ Table "${memberModel.tableName}" already exists.`);
      }
      //admin
      const [admin_rows] = await pool.query<RowDataPacket[]>(`SHOW TABLES LIKE '${adminModel.tableName}'`); // Check if the table exists
      if (admin_rows.length === 0) {
          console.log(`📌 Table "${adminModel.tableName}" not found. Creating it now...`);
          await pool.query(adminModel.model);
          console.log(`✅ Table "${adminModel.tableName}" created successfully.`);
      } else {
          console.log(`✅ Table "${adminModel.tableName}" already exists.`);
      }
      
      //item
      const [itemModel_rows] = await pool.query<RowDataPacket[]>(`SHOW TABLES LIKE '${itemModel.tableName}'`); // Check if the table exists
      if (itemModel_rows.length === 0) {
          console.log(`📌 Table "${itemModel.tableName}" not found. Creating it now...`);
          await pool.query(itemModel.model);
          console.log(`✅ Table "${itemModel.tableName}" created successfully.`);
      } else {
          console.log(`✅ Table "${itemModel.tableName}" already exists.`);
      }
      
      //order
      const [orderModel_rows] = await pool.query<RowDataPacket[]>(`SHOW TABLES LIKE '${orderModel.tableName}'`); // Check if the table exists
      if (orderModel_rows.length === 0) {
          console.log(`📌 Table "${orderModel.tableName}" not found. Creating it now...`);
          await pool.query(orderModel.model);
          console.log(`✅ Table "${orderModel.tableName}" created successfully.`);
      } else {
          console.log(`✅ Table "${orderModel.tableName}" already exists.`);
      }

      //order_list
      const [order_list_rows] = await pool.query<RowDataPacket[]>(`SHOW TABLES LIKE '${orderListModel.tableName}'`); // Check if the table exists
      if(order_list_rows.length === 0) {
          console.log(`📌 Table "${orderListModel.tableName}" not found. Creating it now...`);
          await pool.query(orderListModel.model);
          console.log(`✅ Table "${orderListModel.tableName}" created successfully.`);
      } else {
          console.log(`✅ Table "${orderListModel.tableName}" already exists.`);
      }
    } catch (error) {
      console.error('Table creation failed:', error);
  }
}

async function mockupInsertData(tableName: string, model: string) {
  try {

  }
  catch (error) {
    console.error('❌ Insert Database failed:', error);
  }
}

// export async function findOrCreateTable() {
//     try {
//         const tableName: string = "users";
//         const [rows] = await pool.query<RowDataPacket[]>(`SHOW TABLES LIKE '${tableName}'`); // Check if the table exists
//         if (rows.length === 0) {
//             console.log(`📌 Table "${tableName}" not found. Creating it now...`);
//             await pool.query(`
//                 CREATE TABLE ${tableName} (
//                     id INT AUTO_INCREMENT PRIMARY KEY,
//                     name VARCHAR(255) NOT NULL,
//                     email VARCHAR(255) NOT NULL UNIQUE
//                 )
//             `);
//             console.log(`✅ Table "${tableName}" created successfully.`);
//         } else {
//             console.log(`✅ Table "${tableName}" already exists.`);
//         }
//     } catch (error) {
//         console.error('Table creation failed:', error);
//     }
// }


export async function MigrateTable() {
    //for update table
    try{

    }catch(error) {

    }
}


export default pool;


export interface Db_Model {
    tableName: string;
    model: string;
}