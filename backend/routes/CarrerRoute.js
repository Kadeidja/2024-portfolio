const expressApp = require("express");
const router = expressApp.Router();
// Require controller modules.
const carrerController = require('../controllers/CarrerController');

router.get("/carrer", carrerController.getCarrerModel);
router.get("/carrer/:id", carrerController.getCarrerModelById)

module.exports = router;
