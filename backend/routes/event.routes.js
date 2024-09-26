const express = require('express');
const { createEvent, getAllEvents, addParticipant } = require('../controllers/event.controller');

const router = express.Router();

router.post("/create", createEvent);
router.get("/all", getAllEvents);
router.post("/addParticipant/:id", addParticipant)

module.exports = router;