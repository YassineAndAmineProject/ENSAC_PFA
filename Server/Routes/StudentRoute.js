const { Router } = require("express");
const {
  registerStudent,
  loginStudent,
  getStudent
} = require("../controllers/StudentController");
const router = Router();
router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.get("/get/:id",getStudent);
module.exports = router;
