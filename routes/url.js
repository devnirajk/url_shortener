const express = require("express");
const controller = require("../controllers/url");
const router = express.Router();

//Route for handling redirect URL
// router.get('/:urlId', controller.openShortURL);
//Route for handling generate shortURL
//http://localhost:8002/?urlId=lPIqCde1yz
router.post('/', controller.handleGenerateShortURL);


module.exports = router;