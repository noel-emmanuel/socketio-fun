// get the express package and put it in a variable called 'express'
const express = require('express');
// call the express function and save that to a variable
const app = express();
// get the server to listen and get a "callback"
app.listen(3000, () => console.log("listen on port 3000"));

// use express to host static files
app.use(express.static('public'));