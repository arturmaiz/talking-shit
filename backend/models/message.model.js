const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  message: {
    type: String,
  },
  name: {
    type: String,
  },
  timestamp: { type: Date, default: Date.now },
  received: {
    type: Boolean,
  },
});

module.exports = mongoose.model("message", messageSchema);
