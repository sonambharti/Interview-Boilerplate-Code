require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./db/dbConnect");
const employeeRoutes = require('./routes/employeeRoutes');
const PORT = process.env.PORT || 5000;

const app = express();  

connectDB();

app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://127.0.0.1:3000/'
    ],
    methods: "GET,POST,PUT,DELETE,PATCH,OPTION",
    credentials: true,
}));
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