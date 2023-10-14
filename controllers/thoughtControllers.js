const { Thought, Reaction } = require("../models");

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
  async createReaction(req, res) {
    try {
      const reaction = await Thought.findByIdAndUpdate(req.params.thoughtId, {
        reactions: req.body,
      });
      res.status(200).json(reaction);
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
  async deleteReaction(req, res) {
    try {
      const reaction = await Reaction.findOne({ _id: req.params.reactionId });
      res.status(200).send({ message: "Reaction deleted" });
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
};
