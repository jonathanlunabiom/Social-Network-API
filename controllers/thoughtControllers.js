const { Thought, User } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thought = await Thought.find();
      res.status(200).json(thought);
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.status(200).json(thought);
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
};
