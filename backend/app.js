const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./models/dbconnection');
const db = require('./models'); 
const session = require('express-session');
// const nodemon = require('nodemon');

app.use(cors({
  origin: '*'
}));

// Set up middleware to parse request body as JSON
app.use(express.json());

// Set up middleware to serve static files (e.g. CSS, images)
app.use(express.static('public'));

app.use(session({
  secret : 'webslesson',
  resave : true,
  saveUninitialized : true
}));

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

const transactionsModel = require('./models/transactionsModel.js');
const transactions = transactionsModel(sequelize);
const transactionRoutes = require('./routes/transactions')(transactions);

const adminModel = require('./models/adminModel.js');
const admin = adminModel(sequelize);
const adminRoutes = require('./routes/admin')(admin);

const loginModel = require('./models/loginModel.js');
const login = loginModel(sequelize);
const loginRoutes = require('./routes/login')(login);

app.use('/customers', customersRoutes);
app.use('/orders', ordersRoutes);
app.use('/drivers', driversRoutes);
app.use('/products', productsRoutes);
app.use('/stores', storesRoutes);
app.use('/transactions', transactionRoutes);
app.use('/admin', adminRoutes);
app.use('/login', loginRoutes);

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

const server = app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});

// nodemon({
//   script: server,
//   ignore: ["node_modules/**", "public/**"],
//   ext: "js json"
// });

process.on('SIGINT', function() {process.exit()});
