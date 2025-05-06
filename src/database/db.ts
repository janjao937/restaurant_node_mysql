import mysql, { RowDataPacket } from 'mysql2/promise';

export async function testConnection() {
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'your_password',
        database: 'your_database'
    });

    const [rows] = await pool.query('SELECT 1 + 1 AS solution');
    console.log(rows);
}

export async function checkDatabaseConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('✅ DB Connected!');
        connection.release();
    } catch (error) {
        console.error('❌ Database connection failed:', error);
    }
}

//setup but not test
export async function findOrCreateDB() {
    try{
        const dbName: string = "resturant_db";
        const [rows] = await pool.query<RowDataPacket[]>(`SHOW DATABASES LIKE '${dbName}'`); // Check if the database exists
        if (rows.length === 0) {
            console.log(`📌 Database "${dbName}" not found. Creating it now...`);
            await pool.query(`CREATE DATABASE ${dbName}`);
            console.log(`✅ Database "${dbName}" created successfully.`);
        } else {
            console.log(`✅ Database "${dbName}" already exists.`);
        }
    } catch (error) { 
        console.error('Database connection failed:', error);
    }
}

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'your_database',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
