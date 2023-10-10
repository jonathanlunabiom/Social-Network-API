const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((res, req) => res.setEncoding("Choose another route"));

module.exports = router;
