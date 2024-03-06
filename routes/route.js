const express = require("express")
const router = express.Router()
const {home , test} = require("../controllers/controllers.js")


router.get("/" , home)
router.get("/test" , test)



module.exports = router