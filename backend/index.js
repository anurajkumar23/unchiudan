const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const {router} = require("./router/route");
const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// require("./database/connectDb");
app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log("Server Start In Port http://localhost:" + process.env.PORT);
});
