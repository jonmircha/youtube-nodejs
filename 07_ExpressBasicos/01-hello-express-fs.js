import express from "express";
import { resolve } from "path";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(resolve("index.html"));
});

app.listen(3000, () =>
  console.log("Iniciando Express desde http://localhost:3000")
);
