import express from 'express';
import { getTest } from '../controller/test-controller';

const router = express.Router();

router.get("/get", getTest);

export default router ;