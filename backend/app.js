const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./models/dbconnection');
const db = require('./models'); 

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
const customersModel = require('./models/customersModel.js');
const customers = customersModel(sequelize);
const customersRoutes = require('./routes/customers')(customers);

const driversModel = require('./models/driversModel.js');
const drivers = driversModel(sequelize);
const driversRoutes = require('./routes/drivers')(drivers);

const ordersModel = require('./models/ordersModel.js');
const orders = ordersModel(sequelize);
const ordersRoutes = require('./routes/orders') (orders);

const productsModel = require('./models/productsModel.js');
const products = productsModel(sequelize);
const productsRoutes = require('./routes/products')(products);

const storesModel = require('./models/storesModel.js');
const store = storesModel(sequelize);
const storesRoutes = require('./routes/store')(store);


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
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Server error');
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  
  (async () => {
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await db.sequelize.sync({ force: false });
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    console.log("All models were synchronized successfully.");
  })();
  


app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});

process.on('SIGINT', function() {process.exit()});