import pool from '../db';
import { RowDataPacket } from 'mysql2';


export async function getUsers() {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows;
}

export async function getUserById(userId: number) {
  const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM users WHERE id = ?', [userId]);
  return rows.length > 0 ? rows[0] : null;
}
