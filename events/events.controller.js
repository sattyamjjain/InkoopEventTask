const express = require('express');
const router = express.Router();
const eventsService = require('./events.service');

// routes
router.post('/events', createEvent);
router.get('/events', getEvent);

module.exports = router;

function createEvent(req, res, next) {
    eventsService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getEvent(req, res, next) {
    eventsService.getEvent()
        .then(events => res.json(events))
        .catch(err => next(err));
}
