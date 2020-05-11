const router = require("express").Router();
const CommentsController = require("../../controllers/CommentsController");

// Matches with "/api/booksComments/"
router.route("/").post(CommentsController.create);

// Matches with "/api/bookComments/:id"
router
  .route("/:id")
  .get(CommentsController.findByCollection)
  .delete(CommentsController.remove);

module.exports = router;
