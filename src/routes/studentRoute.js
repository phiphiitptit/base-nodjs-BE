const express = require('express');
const Student = require('../controllers/userController');

const router = express.Router();

router.route("/").post(Student.CreateStudent);

module.exports = router;