const { Router } = require("express");
const { registerStudent,loginStudent } = require("../controllers/StudentController");
const router = Router();
router.post("/register", registerStudent);
router.post("/login",loginStudent); 
module.exports = router;
