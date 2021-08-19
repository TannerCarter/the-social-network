const router = require("express").Router();

const apiRoutes = require("./api");

//Import
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.sendStatus(404);
});

module.exports = router;
