require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./db/dbConnect");
const employeeRoutes = require('./routes/employeeRoutes');
const PORT = process.env.PORT || 5000;

const app = express();  

connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/employee", employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/**
 * Or, we can 1st connect the DB and then Start Over
 * connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
 * })
 */