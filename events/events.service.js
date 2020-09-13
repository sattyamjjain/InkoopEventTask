const db = require('_helpers/db');
const Events = db.Events;

module.exports = {
    create,
    getEvent
};

async function create(eventParam) {
    const event = new Events(eventParam);
    await event.save();
}

async function getEvent() {
    return await Events.find();
}