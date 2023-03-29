const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

app.use(cors({
  origin: '*'
}));

// Set up middleware to parse request body as JSON
app.use(express.json());

// Set up middleware to parse form data
//app.use(express.urlencoded({ extended: true }));

// Set up middleware to serve static files (e.g. CSS, images)
app.use(express.static('public'));

// const allowedOrigins = ['https://3000-omarshivji-equipit-fjpjc4oo06g.ws-eu93.gitpod.io'];

//const corsOptions = {
 // origin: "https://3000-omarshivji-equipit-fjpjc4oo06g.ws-eu93.gitpod.io"
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
//};

// app.use(cors(corsOptions));

// app.use(cors(corsOptions));
//manual cors
//const allowedOrigins = ['https://3000-omarshivji-equipit-fjpjc4oo06g.ws-eu93.gitpod.io'];

// app.use((req, res, next) => {
//   const origin = req.headers.origin;
//   if (allowedOrigins.indexOf(origin) > -1 || !origin) {
//     res.setHeader('Access-Control-Allow-Origin', origin);
//   }

//   //Set other CORS headers
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   res.setHeader('Access-Control-Allow-Credentials', true);

//  if (req.method === 'OPTIONS') {
//    res.sendStatus(200);
//   } else {
//    next();
//   }
// });


// Import and use the routes
const customersRoutes = require('./routes/customers');
const ordersRoutes = require('./routes/orders');
const driversRoutes = require('./routes/drivers');
const productsRoutes = require('./routes/products');
const storesRoutes = require('./routes/stores');


app.use('/customers', customersRoutes);
app.use('/orders', ordersRoutes);
app.use('/drivers', driversRoutes);
app.use('/products', productsRoutes);
app.use('/stores', storesRoutes);


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

process.on('SIGINT', function() {process.exit()});