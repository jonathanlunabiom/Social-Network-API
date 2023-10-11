const router = require("express").Router();

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userControllers");

router.route("/").get(getAllUsers).post(createUser);

// /api/courses/:courseId
router.route("/:userId").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
