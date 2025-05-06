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

module.exports = {addEmployee, getAllEmployee, getEmployee};