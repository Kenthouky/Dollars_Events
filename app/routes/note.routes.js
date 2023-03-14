module.exports = (app) => {
	const guest = require('../controllers/note.controller.js');

	app.post('/guest', guest.create);

	app.get('/guest', guest.findAll);

	app.get('/guest/:guestId', guest.findOne);

	app.put('/guest/:guestId', guest.update);

	app.delete('/guest/:guestId', guest.delete);
}
