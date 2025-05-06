import express, {NextFunction, Request, Response} from "express";
import notFoundMiddleware from "./middleware/notfound-middleware";
import errorMiddleware from "./middleware/error-middleware";


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

//not found middleware
//error middleware


app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log("sever is running on port: " + port);
});