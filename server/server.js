const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');

app.use(parser.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;

const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
const db = client.db('bookings');
const customersCollection = db.collection('customers');
const customersRouter = createRouter(customersCollection);
app.use('/api/customers',
customersRouter);
})
.catch(console.err);

app.listen(3000, function () {
console.log(`Listening on port ${this.address().port}`);
});
