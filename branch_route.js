/**
 * Imported Module
 */
const express =  require('express');
const cryptoRoute = require('./CryptoJs/app');

const branch_route = express.Router();


branch_route.use(cryptoRoute);

module.exports = branch_route;

