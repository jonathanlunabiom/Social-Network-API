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
  async getThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      res.status(200).json(thought);
    } catch (e) {
      res.status(500).json(e.message);
    } 
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      if (!thought) {
        res.status(404).json("User not found");
      }
      res.status(200).json(thought);
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
};
