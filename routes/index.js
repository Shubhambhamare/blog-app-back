const express = require("express");
const blogRouter = require("./backend-data");


const router = express.Router();
router.use("/blogData", blogRouter);

module.exports = router;