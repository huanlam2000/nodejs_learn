const express = require("express");
const router = express.Router();
const meController = require("../app/controllers/MeController");

// /me/stored/courses

router.get('/trash/courses', meController.trashCourses);
router.get('/stored/courses', meController.storedCourses);

module.exports = router;
