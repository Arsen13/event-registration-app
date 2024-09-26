const express = require('express');
const { createEvent, getAllEvents, addParticipant, getAllParticipants } = require('../controllers/event.controller');

const router = express.Router();

router.post("/create", createEvent);
router.get("/allEvents", getAllEvents);
router.post("/addParticipant/:id", addParticipant)
router.get("/allParticipants/:id", getAllParticipants);

module.exports = router;