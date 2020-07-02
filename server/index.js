require('dotenv').config();

const express = require('express');
const massive = require('massive');
const products_controller = require("./Controllers/products_controller");
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive({
connectionString: CONNECTION_STRING,
ssl: {rejectUnauthorized: false}
}) .then(db => {
    app.set("db", db);
   console.log('db connected');
});



app.get('/api/products', products_controller.getAllProducts);
app.get('/api/products/:id', products_controller.getOneProduct);
app.put('/api/products/:id', products_controller.updateProducts);
app.post('/api/products', products_controller.create);
app.delete('/api/products/:id', products_controller.deleteProducts);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`)
});

