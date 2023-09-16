import express from 'express';
import {getFiles} from './utils/file.util';
const app = express();
const port = 8080; // Default port to listen

// Configure Express to use EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const filesStructure = getFiles('data');

// Define a route handler for the default home page
app.get('/', (req, res) => {
	res.json(JSON.stringify(filesStructure));
});

// Start the express server
app.listen(port, () => {
	// Tslint:disable-next-line:no-console
	console.log(`server started at http://localhost:${port}`);
});
