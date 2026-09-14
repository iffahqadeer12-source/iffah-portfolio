const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Please fill in all fields",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      message: "Message sent successfully!",
      contact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to send message",
      error: error.message,
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json(contacts);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get messages",
      error: error.message,
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    res.json({
      message: "Message deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete message",
      error: error.message,
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact,
};
