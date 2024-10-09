const express = require('express');
const router = express.Router();
const crudController = require('../controller/crud-controller');

router.route('/get-employee').get(crudController.getEmployees);
router.route('/create-employee').post(crudController.createEmployees);

module.exports = router;