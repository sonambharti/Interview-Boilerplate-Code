const Employee = require("../models/employeeModel");

const checkDuplicateUser = async(req, res, next) => {
    const {email} = req.body;
    if (! email){
        return res.status(400).json({
            status: 'fail',
            message: "Email is required"
        })
    }

    try {
        const existingEmployee = await Employee.findOne({email});
        if (existingEmployee) {
            return res.status(409).json({
                status: 'fail',
                message: 'Email already exists'
            });
        }
        next(); // proceed the controller if not found
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error checking email',
        });
    }
}

module.exports = checkDuplicateUser;