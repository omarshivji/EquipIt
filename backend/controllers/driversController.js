const mysql = require('mysql');

// create a MySQL connection
const connection = mysql.createConnection({
  host: 'database-2.clq4hvzpxxdf.eu-west-2.rds.amazonaws.com',
  user: 'admin',
  password: 'equipit123',
  port: '3306',
  database: 'equipit'
});


connection.connect(err => {
  if (err) {
    console.error('Error connecting to database: ', err);
  } else {
    console.log('Connected to database');
  }
});


// Get all drivers from database
app.get('/drivers', (req, res) => {
connection.query('SELECT * FROM delivery_drivers', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving drivers from database');
    } else {
      res.render('drivers/index', { drivers: result });
    }
  });
});

// Get a driver by ID from database
app.get('/drivers/:id', (req, res) => {
  connection.query('SELECT * FROM delivery_drivers WHERE driver_id = ?', [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving driver from database');
    } else if (result.length === 0) {
      res.status(404).send('Driver not found');
    } else {
      res.render('drivers/show', { driver: result[0] });
    }
  });
});

// Create a new driver in database
app.post('/drivers', (req, res) => {
  const driver = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    vehicle_make: req.body.vehicle_make,
    vehicle_model: req.body.vehicle_model,
    vehicle_color: req.body.vehicle_color,
    DOB: req.body.DOB,
    password: req.body.password
  };
  connection.query('INSERT INTO delivery_drivers SET ?', driver, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error creating new driver');
    } else {
      res.redirect('/drivers');
    }
  });
});

// Update a driver by ID in database
app.put('/drivers/:id', (req, res) => {
  const driver = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    vehicle_make: req.body.vehicle_make,
    vehicle_model: req.body.vehicle_model,
    vehicle_color: req.body.vehicle_color,
    DOB: req.body.DOB,
    password: req.body.password
  };
  connection.query('UPDATE delivery_drivers SET ? WHERE driver_id = ?', [driver, req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error updating driver in database');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Driver not found');
    } else {
      res.redirect('/drivers/' + req.params.id);
    }
  });
});

// Delete a driver by ID from database
app.delete('/drivers/:id', (req, res) => {
  connection.query('DELETE FROM delivery_drivers WHERE driver_id = ?', [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error deleting driver from database');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Driver not found');
    } else {
      res.status(200).send(`Driver with ID: ${req.params.id} deleted`);
    }
  });
});
