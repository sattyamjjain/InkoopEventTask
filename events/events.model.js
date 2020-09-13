const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    eventName: { type: String, required: true },
    eventType: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true}
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Events', schema);