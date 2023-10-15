const { Thought, User} = require("../models");

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

      if(!req.body.username){
        return res
          .status(404)
          .json({ message: 'No username found :(' });
      }
      const thought = await Thought.create(req.body)

      const user = await User.findOneAndUpdate({username:req.body.username},{$push:{thoughts:thought._id}})
      if(user && thought){
        res.status(200).send({message:"Thought created!"});
      }
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
  async createReaction(req, res) {
    try {
      if(!req.body.username){
        return res
          .status(404)
          .json({ message: 'No username found :(' });
      }
      const reaction = await Thought.findByIdAndUpdate(req.params.thoughtId, {
       $push:{reactions: req.body}
      });
      res.status(200).send({message:'Reaction added to thought'})
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
  async deleteReaction(req, res) {
    try {
      await Thought.findByIdAndUpdate(req.params.thoughtId,{
        $pull:{"reactions":{_id: req.params.reactionId}}
      });
      res.status(200).send({ message: "Reaction deleted" });
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
};
