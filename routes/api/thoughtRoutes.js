const router = require("express").Router();

const {
  getThoughts,
  createThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtControllers");

router.route("/").get(getThoughts).post(createThought);

router.route("/:thoughtId/reactions").post(createReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
