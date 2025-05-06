const express = require("express");

// controller functions
const {addEmployee, getAllEmployee, getEmployee, updateEmployee, deleteEmployee} = require("../controllers/employeeCOntroller");

//midleware
const checkDuplicateUser = require("../middleware/checkDuplicateUser");

const router = express.Router();

//  POST - Add a new employee
router.post("/", checkDuplicateUser, addEmployee);

// GET - Get all employees
router.get("/", getAllEmployee);

// POST - Get a employee
// router.get('/:email', userController.getUser); // email is in params
router.get('/by-email', getEmployee); // email is in body

router.patch("/update", updateEmployee);
router.delete("/delete", deleteEmployee);

module.exports = router;