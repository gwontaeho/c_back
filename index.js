require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");
const routers = require("./routers");

const app = express();
const port = 4000;

sequelize
    .sync({
        // force: true,
        alter: true,
    })
    .then(() => {
        console.log("db 연결");
    })
    .catch((error) => {
        console.log(error);
    });

app.use(express.json());
app.use("/", routers);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
