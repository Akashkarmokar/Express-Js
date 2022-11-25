/**
 * Imported Module
 */
const express = require('express');


/**
 * App instances
 */
const app = express();


/**
 * Listen server at port
 */
app.listen(8000,()=>{
    console.log('Express server is ok.It is running on port 8000');
})
