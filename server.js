const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();



const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use(bodyParser.json())
// Require Notes Routes
require('./app/routes/note.routes.js')(app);

mongoose.connect("mongodb+srv://dollars:currency@cluster0.gh4jygf.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Connected to MongoDB");

	app.get('/', (req, res) => {
		res.json({"message": "Welcome to Dollars Event Management System, the BIGGEST IN TOWN!"});
	});

	app.listen(port, () => {
		console.log(`Server listening at http://localhost:${port}`);
	});
})
.catch((err) => {
	console.error(err);
});
//app.get('/', (req, res) => {
//	res.json({"message": "Welcome to Dollars Event Management System, the BIGGEST IN TOWN!"});
//});

//app.listen(3000, () => {
//	console.log("Server is listening on port 3000");
//});