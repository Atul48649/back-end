const express = require('express');
const router = express.Router();
const studentController =  require('../controller/students_controller');

router.post('/create', studentController.createStudent);

module.exports = router;