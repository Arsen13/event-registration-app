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
}

module.exports = { createEvent, getAllEvents };