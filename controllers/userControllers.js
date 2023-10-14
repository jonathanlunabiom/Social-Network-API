const { User } = require("../models/index");

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
      const user = await User.findOne({ _id: req.params.userId });

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
  async updateUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.userId, req.body); //can only be updated a single property?

      if (!user) {
        res.status(404).json("User not found");
      }

      res.status(200).send({ message: `User updated successfully` });
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

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
  async createFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.userId, {
        friends: req.params.friendId,
      });
      res.status(200).json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
  async deleteFriend(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.userId, {
        friends: req.params.friendId,
      });
      res.status(200).json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
};
