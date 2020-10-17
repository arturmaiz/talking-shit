const Message = require("../models/message.model");

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();

    res.status(200).json({ messages });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const postMessage = async (req, res) => {
  try {
    const { message, name, timestamp, received } = req.body;

    const newMessage = new Message({
      message,
      name,
      timestamp,
      received,
    });

    await newMessage.save();

    res.status(200).json({ msg: newMessage });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = { postMessage, getAllMessages };
