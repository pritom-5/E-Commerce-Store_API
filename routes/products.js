const express = require("express");
const getTasksBasedOnFiltersAndSearch = require("../controllers/getTasksBasedOnFiltersAndSearch");
const router = express.Router();

router.route("/").get(getTasksBasedOnFiltersAndSearch);

module.exports = router;
