import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import error from "./middlewares/error.js";
import routesTasks from "./routes/rTask.js";

//const __dirname = path.dirname(new URL(import.meta.url).pathname);
const __dirname = process.cwd();
const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routesTasks);
app.use(error.e404);

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
