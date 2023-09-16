import express from 'express';
import fs from 'fs';
import { getFiles } from './utils/file.util';
const app = express();
const APP_PORT = 8080; // Default port to listen
const TEST_DIR = 'test';

// Configure Express to use EJS
// eslint-disable-next-line @typescript-eslint/no-var-requires
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/test', (req, res) => {
  const path = __dirname + `/../${TEST_DIR}/test.md`;
  const file = fs.readFileSync(path, 'utf8');
  res.send(file.toString());
});

app.get('/files', (req, res) => {
  res.json({ data: getFiles(TEST_DIR) });
});

// Start the express server
app.listen(APP_PORT, () => {
  // Tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${APP_PORT}`);
});
