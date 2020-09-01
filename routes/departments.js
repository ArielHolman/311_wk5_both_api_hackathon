const express = require('express')
const router = express.Router()
const departmentsController = require('../controllers/departments')

router.get('/', departmentsController.getDepartments)

router.get('deptno/:dept_no', departmentsController.getDepartmentsById)

router.post('/', departmentsController.createDepartments)

router.put('deptno/: dept_no', departmentsController.updateDepartmentById)

router.delete('deptno/: dept_no', departmentsController.deleteDepartmentByNumber)

module.exports = router