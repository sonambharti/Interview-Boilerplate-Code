const mongoose = require("mongoose");

mongoose.set("strictQuery", false); // ensures that only specified fields will be stored in the schema.

const Schema = mongoose.Schema;

const employeeSchema = new Schema(
    {
        name: String,
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        phone: {
            type: String,
            required: [true, "Phone number is required"],
        },
        department: String,
        role: String,
        salary: Number,
    }
)
module.exports = mongoose.model("Employee", employeeSchema);