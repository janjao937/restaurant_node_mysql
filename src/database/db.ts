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

// SELECT COUNT(*) FROM INFORMATION_SCHEMA.PROCESSLIST; check query connection
export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true, //change to env
    connectionLimit: 15,  //10-50 medieum user 100 per sec   //change to env
    queueLimit: 50   //change to env
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

export async function mockupInsertData() {
  try {
    const insert_customer_table = 'INSERT INTO customer_table (seat) VALUES (?)';
    const insert_member = 'INSERT INTO member (first_name, last_name, phone_number, token, point) VALUES (?, ?, ?, ?, ?)';
    const insert_item = 'INSERT INTO item (name, price, category, pic_path, count, info) VALUES (?, ?, ?, ?, ?, ?)';
    const insert_orderList = 'INSERT INTO member (table_id, item_id, count, is_success) VALUES (?, ?, ?, ?)';

    // await pool.execute(insert_customer_table, ["1"]);
    // await pool.execute(insert_member, ["john", "doe", "1234567890", "jwt_token", 2]);
    // await pool.execute(insert_item, ["ข้าวกระเพรา", 100, "จานเดียว", "https://www.thammculture.com/wp-content/uploads/2024/01/Untitled-612.jpg", 4, "หมู/ไก่/กุ้ง"]);
    // await pool.execute(insert_orderList, [""]);
   

    console.log('Data inserted successfully');
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

//for update table
export async function MigrateTable() {
  try{
    //version db = 1
    //Alter table 
  }catch(error) {

  }
}




export default pool;
export interface Db_Model {
  tableName: string;
  model: string;
}


//db.query ใช้สำหรับ query ทั่วไป เช่น SELECT, INSERT, UPDATE, DELETE
//db.execute
// ใช้สำหรับ query ที่ต้องใช้ prepared statements.

// ป้องกัน SQL injection เพราะใช้ parameter binding.

// ใช้ query สำหรับคำสั่งทั่วไปที่ไม่ต้องใช้ parameters.

// ใช้ execute สำหรับ prepared statements เพื่อความปลอดภัยและประสิทธิภาพ.

// await db.query(`INSERT INTO todos (title,completed,user_id) VALUES (? ,? ,? )`,[title,completed,userId]);
// res.status(200).json({message:"CREATE SUCCESS"});

// const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
// await db.execute(sql, [name, email]);
// console.log('Data inserted successfully');
