const Event = require("../models/event.model");

const createEvent = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(404).json({ error: "Title is require" });
        }

        if (!description) {
            return res.status(404).json({ error: "Description is require" });
        }

        const event = new Event({
            title,
            description
        });

        await event.save();

        res.status(200).json(event);

    } catch (error) {
        console.log("Error in createEvent controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();

        if (events.length === 0) {
            return res.status(200).json([]);
        } 

        res.status(200).json(events);

    } catch (error) {
        console.log("Error in getAllEvents controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

const addParticipant = async (req, res) => {
    try {
        const eventId = req.params.id;

        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(400).json({ error: "Event not found" });
        }

        const { fullName, email, dateOfBirth, eventSource} = req.body;

        if (!fullName) {
            return res.status(404).json({ error: "Fullname is require" });
        }
        if (!email) {
            return res.status(404).json({ error: "Email is require" });
        }
        if (!dateOfBirth) {
            return res.status(404).json({ error: "Date of birth is require" });
        }
        if (!eventSource) {
            return res.status(404).json({ error: "Where did you here about event is require" });
        }

        const participant = {
            fullName,
            email,
            dateOfBirth,
            eventSource
        };

        event.participants.push(participant);

        await event.save();

        res.status(200).json(event);
        
    } catch (error) { 
        console.log("Error in addParticipant controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { createEvent, getAllEvents, addParticipant };