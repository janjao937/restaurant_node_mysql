import express, {NextFunction, Request, Response} from "express";
import notFoundMiddleware from "./middleware/notfound-middleware";
import errorMiddleware from "./middleware/error-middleware";
import * as dotenv from "dotenv";
import test_router from "./route/test-route";
import user_route from "./route/user-route";
import { findDB, findOrCreateTable, MigrateTable, mockupInsertData } from "./database/db";
import cors from "cors";
import rateLimitMiddleware from "./middleware/ratelimit-middleware";

dotenv.config();
const app = express();
const port: number = 8000;

app.use(express.json());
app.use(cors());
app.use(rateLimitMiddleware);

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({message: "ok"});
  }catch(error) {
    next(error);
  }
});

//route
app.use("/test", test_router); //for test
app.use("/user", user_route); //user

app.use(notFoundMiddleware); //not found middleware
app.use(errorMiddleware); //error middleware

app.listen(port, async () => {
  await findDB();
  await findOrCreateTable();
  if (process.env.DB_TEST_INSERT_DATA === "true") {
    await mockupInsertData();
  }
  console.log("sever is running on port: " + port);
});