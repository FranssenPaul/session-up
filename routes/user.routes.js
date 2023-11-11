const { userNew, userCreate } = require("../controller/user.controller");

const router = require("express").Router();

// afficher le formulaire d'inscription
router.get("/new", userNew);

// soumettre le formulaire d'inscription
router.post("/", userCreate);

module.exports = router;
