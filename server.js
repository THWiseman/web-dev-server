import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitController from "./controllers/tuits-controller.js"

const app = express();
app.use(express.json());
app.use(cors());
tuitController(app);
helloController(app);
userController(app);
app.listen(process.env.PORT || 4000);