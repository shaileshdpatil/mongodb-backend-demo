const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const crudRouter = require("./router/crud-router");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api",crudRouter);

connectDB().then(() => {
    app.listen(5000, () => {
        console.log("Server started");
    })
})