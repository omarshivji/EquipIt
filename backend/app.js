const express = require('express');
const app = express();
const router = express.Router();

// Set up middleware to parse request body as JSON
app.use(express.json());

// Set up middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set up middleware to serve static files (e.g. CSS, images)
app.use(express.static('public'));

// Set up the view engine (EJS)
app.set('view engine', 'ejs');

// Import and use the routes
const customersRoutes = require('./routes/customers.js');

const ordersRoutes = require('./routes/orders.js');
//const driversRoutes = require('./routes/drivers');
//const productsRoutes = require('./routes/products');
//const storesRoutes = require('./routes/stores');



app.use('/customers', customersRoutes);

app.use('/orders', ordersRoutes);
/* 
app.use('/drivers', driversRoutes);
app.use('/products', productsRoutes);
app.use('/stores', storesRoutes);
*/


// Set up a default route for handling invalid requests
app.use((req, res, next) => {
  res.status(404).send('Invalid request');
});

// Set up a global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Server error');
});

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

