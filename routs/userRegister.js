const express = require("express")
const router = express.Router()

const { usersignupcontroller, userslogincontroller } = require("../controllers/usercontrol")

//All user sign up info
router.post("/signup",usersignupcontroller)
router.post("/login",userslogincontroller)

module.exports = router