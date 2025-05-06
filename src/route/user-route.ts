import express from 'express';
import { getAllUsers, getSingleUser } from "../controller/user-controller";

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);

export default router;