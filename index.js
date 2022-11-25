/**
 * Imported Module
 */
const express = require('express');
const branch_route = require('./branch_route');

/**
 * App instances
 */
const app = express();
app.use(branch_route);

/**
 * Listen server at port
 */
app.listen(8000,()=>{
    console.log('Express server is ok.It is running on port 8000');
})
