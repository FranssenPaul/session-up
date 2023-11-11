const {
  sessionCreate,
  sessionDelete,
  sessionNew,
} = require("../controller/auth.controller");

const router = require("express").Router();

// affiche le formulaire de connexion
router.get("/signin/form", sessionNew);

// envoi du formulaire de connexion
router.post("/signin", sessionCreate);

// déconnexion (effacement de la session)
router.get("/signout", sessionDelete);

module.exports = router;
