import express, {NextFunction, Request, Response} from "express";
import notFoundMiddleware from "./middleware/notfound-middleware";
import errorMiddleware from "./middleware/error-middleware";
import { checkDatabaseConnection } from "./database/db";

import test_router from "./route/test-route";
import user_route from "./route/user-route";

const app = express();
const port: number = 8000;

app.use(express.json());

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

app.listen(port, () => {
  console.log("sever is running on port: " + port);
  checkDatabaseConnection();
  //find or create DB
});