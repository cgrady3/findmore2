const router = require("express").Router();
const CollectionsController = require("../../controllers/CollectionsController");

// Matches with "/api/books/"
router.route("/").post(CollectionsController.create);

// Matches with "/api/books/:title"
router.route("/:title").get(CollectionsController.findByTitle);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(CollectionsController.findById)
  .delete(CollectionsController.remove);

// Matches with "/api/books/user/:userId"
router.route("/user/:userId").get(CollectionsController.findByUserId);

router
  .route("/upvote/:votes/:id")
  .put(CollectionsController.updateUpVotes);

router
  .route("/downvote/:votes/:id")
  .put(CollectionsController.updateDownVotes);

module.exports = router;
