
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
// const bodyParser = require('body-parser');


import usersRoutes from "./routes/users.js";

app.use (bodyParser.json());
app.use (cors());

app.use('/users',usersRoutes )
// app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Welcome yogapriya"));
// app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));



app.listen(8080, () => {
  console.log('App listening on port 8080')
});

