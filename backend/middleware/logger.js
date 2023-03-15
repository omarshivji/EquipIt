const express = require('express');

// Middleware function to log information about incoming requests
function logRequest(req, res, next) {
    console.log(`Received ${req.method} request to ${req.path} at ${new Date()}`);
    next();
  }
  
  module.exports = {
    logRequest
  };
  