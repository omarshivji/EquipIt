const { getCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer } = require('./models/customersModel');

exports.getAllCustomers = (req, res) => {
  getCustomers((error, results) => {
    if (error) throw error;
    res.send(results);
  });
};

exports.getCustomer = (req, res) => {
  const customerId = req.params.customers_id;
  getCustomerById(customerId, (error, results) => {
    if (error) throw error;
    res.send(results[0]);
  });
};

exports.createCustomer = (req, res) => {
  const { name, email, address, phone, DOB, password } = req.body;
  createCustomer(name, email, address, phone, DOB, password, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating customer' });
    } else {
      res.json({ customers_id: results.insertId, name, email, address, phone, DOB, password });
    }
  });
};

exports.updateCustomer = (req, res) => {
  const customerId = req.params.customers_id;
  const updatedCustomer = req.body;
  updateCustomer(customerId, updatedCustomer, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
};

exports.deleteCustomer = (req, res) => {
  const customerId = req.params.customers_id;
  deleteCustomer(customerId, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
};
