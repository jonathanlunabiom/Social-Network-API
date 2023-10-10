const { Thought, User } = require("../models");

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate("friends")
        .populate("thoughts");
        
      res.status(200).json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.courseId });

      if (!user) {
        res.status(404).json("User not found");
      }
      //also delete the thought that belongs to this user
      //deleteMany (?)
      res.status(200).json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
};
