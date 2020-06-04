const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: { type: String },
    eventDesc: { type: String },
    eventDate: { type: String },
    eventTime: { type: String },
    eventLoc: { type: String },
    eventReminder: { type: String },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Event = mongoose.model('Events', eventSchema);
module.exports = Event;