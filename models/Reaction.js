const { Schema, model, Types } = require("mongoose");

const formatDay = (date) => {
  let dateTo = new Date();
  let month = dateTo.getUTCMonth() + 1; 
  let day = dateTo.getUTCDate();
  let year = dateTo.getUTCFullYear();

  return  (`${day}/${month}/${year}`)
};

const reactionSchema = new Schema(
  {
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
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
