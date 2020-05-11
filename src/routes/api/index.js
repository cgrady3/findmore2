  
const router = require("express").Router();
const CollectionsRoutes = require("./Collections");
const CommentsRoutes = require("./Comments");
const UserRoutes = require("./Users");

// Book routes
router.use("/Collections", CollectionsRoutes);
router.use("/Comments", CommentsRoutes);
router.use("/User", UserRoutes);

module.exports = router;
