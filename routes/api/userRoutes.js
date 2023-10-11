const router = require("express").Router();

const {
    getAllUsers,
    getUser,
    createUser,
    deleteUser
} = require("../../controllers/userControllers");


router.route('/').get(getAllUsers).post(createUser);

// /api/courses/:courseId
router
  .route('/:user')
  .get(getUser)
//   .put(updateCourse)
  .delete(deleteUser);

module.exports = router;
