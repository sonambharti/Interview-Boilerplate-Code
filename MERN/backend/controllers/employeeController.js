require("dotenv").config({path: "../.env"});
const Employee = require("../models/employeeModel");

const addEmployee = async(req, res) => {
    try {
        // const {name, email, phone, department, role, salary} = req.body;
        const user = new Employee(req.body);
        await user.save();
        res.status(201).json({
            status: 'success',
            data: user,
        });
    } catch(err) {
        res.status(500).json({
            status: 'fail',
            message: err.message
        });
    }
}


const getAllEmployee = async(req, res) => {
    try {
        const user = await Employee.find();
        // const user = await Employee.find({salary: {$gte: 30000}});
        res.status(201).json({
            status: 'success',
            data: user,
        });
    } catch(err) {
        res.status(500).json({
            status: 'fail',
            message: err.message
        });
    }

}

const getEmployee = async (req, res) => {

    try {
        const data = await Employee.findOne({email: req.body.email});
        // const data = await UserModel.find({email: req.params.email});
        if(!data) {
            return res.status(404).json({
                status: 'fail',
                message: 'Employee not found'
            });
        }
        res.status(201).json({
            status: 'success',
            data: data,
        });
    }catch(err) {
        res.status(400).json({
            status: 'fail',
            message: `Failed to get the details...`,
        });
    }
}   

const updateEmployee = async (req, res) => {
    try {
        const { email, ...updates } = req.body;
        if (!email){
            return res.status(400).json({
                status: 'fail',
                message: 'Email is required',
            });
        }

        const updatedEmployee = await Employee.findOneAndUpdate(
            { email },
            updates,   
        )

        if (!updatedEmployee) {
            return res.status(404).json({
                status: 'fail',
                message: 'Employee not found',
            });
        }
        res.status(200).json({
            status: 'success',
            data: updatedEmployee,
        });
    } catch(err){
        res.status(400).json({
            status: 'fail',
            message: `Failed to update the employee...`,
        });
    }
}

const deleteEmployee = async(req, res) => {
    try{
        const { email } = req.body;

        if (!email){
            return res.status(400).json({
                status: 'fail',
                message: 'Email is required',
            });
        }
        const deletedEmployee = await Employee.findOneAndDelete({ email });

        if (!deletedEmployee) {
            return res.status(404).json({
                status: 'fail',
                message: 'Employee not found',
            });
        }
        res.json({
            message: "User deleted successfully", deletedEmployee
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: `Failed to delete the employee...`,
        });
    }
}

module.exports = {addEmployee, getAllEmployee, getEmployee, updateEmployee, deleteEmployee};