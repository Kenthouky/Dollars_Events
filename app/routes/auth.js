const { verifySignUp } = require("../../middlewares");
const controller = require("../controllers/AuthController.js");

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-toke, Origin, Content-Type, Accept"
			);
		next();
	});

	app.post(
		"/event/auth/signup",
		[
		verifySignUp.checkDuplicateUsernameorEmail,
		verifySignUp.checkRolesExisted
		],
		controller.signup
		);

	app.post("/event/auth/signin", controller.signin);
};