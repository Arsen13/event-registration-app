const express = require('express');
const { createEvent, getAllEvents } = require('../controllers/event.controller');

const router = express.Router();

router.post("/create", createEvent);
router.get("/all", getAllEvents);

module.exports = router;