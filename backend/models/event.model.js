const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    participants: [
        {
            fullName: {
                type: String,
                require: true
            },
            email: {
                type: String,
                require: true
            },
            dateOfBirth: {
                type: Date,
                require: "true",
                default: Date.now()
            },
            eventSource: {
                type: String,
                require: true
            }
        }
    ]
}, { versionKey: false });

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;