const express = require("express");
const router = express();

const auth = require("./Auth");
const jobs = require("./Jobs");

router.use("/auth", auth);
router.use("/jobs", jobs);

module.exports = router;
