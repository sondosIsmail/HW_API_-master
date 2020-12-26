const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const querystring = require('querystring');
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());


app.post('/user', (req, res) => {
    console.log('body :', req.body);
    res.json({ name: req.body.name , message:"success"});
});

app.get('/user', (req, res) => {
    res.json({ message:"Hello " + req.query.name});
});


app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

