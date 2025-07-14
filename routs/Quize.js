const express = require("express")
const { isLoggin } = require("../middelware/isLogin")
const router = express.Router()
const coding = require("../Quize/CodingQuize.json")
const genral = require("../Quize/GenralQuze.json")
const math = require("../Quize/Math.json")
router.get("/:id", (req, res) => {
    const id = req.params.id

    if (id === "coding") {
       return res.status(200).json({ coding:coding })
    }

    if (id === "genral") {
       return res.status(200).json({ genral:genral })
    }

    if (id === "math") {
       return res.status(200).json({ math:math })
    }
    return res.status(404).json({success:false,message:"quize not found"})

})

module.exports = router