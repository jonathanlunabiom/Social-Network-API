const { Schema, model, Types } = require("mongoose");

const formatDay = (date) => {
  return date.getMonth();
};

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date) => formatDay(date),
  },
});

module.exports = reactionSchema;
