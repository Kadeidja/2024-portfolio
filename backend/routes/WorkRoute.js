const expressApp = require("express");
const router = expressApp.Router();
// Require controller modules.
const workController = require('../controllers/WorkController');

router.get("/work", workController.getworkModel);
router.get("/work/:id", workController.getworkModelById)

module.exports = router;
