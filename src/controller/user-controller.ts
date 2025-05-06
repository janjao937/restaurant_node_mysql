import { getUsers, getUserById } from '../database/queries/userQueries';
import { Request, Response } from 'express';

export async function getAllUsers(req: Request, res: Response) {
    const users = await getUsers();
    res.json(users);
}

export async function getSingleUser(req: Request, res: Response) {
    const userId = parseInt(req.params.id, 10);
    const user = await getUserById(userId);
    res.json(user);
}
