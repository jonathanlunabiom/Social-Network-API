const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const formatDay = (date) => {
  let dateTo = new Date();
  let month = dateTo.getUTCMonth() + 1; 
  let day = dateTo.getUTCDate();
  let year = dateTo.getUTCFullYear();

  return  (`${day}/${month}/${year}`)
};

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => formatDay(date),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
