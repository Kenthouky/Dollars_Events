const nodemailer = require('nodemailer');

const sendEmail = async options => {
	// Transporter
	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD
		}
		// Activate in gmail "less secure app" option
	});
	// Define the email options
	const mailOptions = {
		from: 'Dollars Kenthouky <hello@dollars.io>',
		to: options.email,
		subject: options.subject,
		text: "It is our pleasure to inform you that you are among the guests for the Special Man Solution exclusive event holding at 12 Ezekiel St, Ikeja, Lagos.\nIt would be of great pleasure to see you there, while we unveil our latest innovation plus other projects that are sure to leave you amazed.\nTime is 9am prompt.\nCome prepared, we will dumbfound you!"
		//html:
	};
	// Send the email
	await transporter.sendMail(mailOptions)
};

module.exports = sendEmail;
//const nodemailer = require('nodemailer');
//const app = express();
//const port = 5000;

//let transporter = nodemailer.createTransport({
//	service: 'gmail',
//	auth: {
//		type: 'OAuth2',
//		user: process.env.MAIL_USERNAME,
//		pass: process.env.MAIL_PASSWORD,
//		clientId: process.env.OAUTH_CLIENTID,
//		clientSecret: process.env.OAUTH_CLIENT_SECRET,
//		refreshToken: process.env.OAUTH_REFRESH_TOKEN
//	}
//});

//let mailOptions = {
//	from: dollarskenthouky@gmail.com,
//	to: dollarskenthouky@gmail.com,
//	subject: 'Nodemailer Project',
//	text: 'Hi from your nodemailer project'
//};

//transporter.sendMail(mailOptions, function(err, data) {
//	if(err) {
//		console.log("Error" + err);
//	} else {
//		console.log("Email sent successfully");
//	}
//});

//app.listen(port, () => {
//	console.log(`nodemailerProject is listening at http://localhost:${port}`)
//});