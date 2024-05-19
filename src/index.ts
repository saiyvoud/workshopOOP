import express, { Application, Router } from "express";
import "../src/config/db"
import RouteUrl from "./router";
import cors from "cors";
import bodyParser from "body-parser";

class Server {
  private app: Application = express();
  private router: Router = express.Router();
  constructor() {
    this.run();
    this.config()
  }
  run() {
    this.app.listen(8000, () => {
      console.log(`http://localhost:8000`);
    });
  }
  config (){
    this.app.use(cors());
    this.app.use(bodyParser.json({ limit: "500mb" }));
    this.app.use(bodyParser.urlencoded({extended: true,limit: "500mb",parameterLimit:500}));
    new RouteUrl(this.router);
    this.app.use("/api",this.router)
  }
}
new Server();


