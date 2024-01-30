const db = require("../models");
const Event = db.events;

// api to get all events table data
const getAllEvents = (req, res) => {
  Event.findAll({
    order: [["id", "DESC"]],
  })
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = {
  getAllEvents,
};
