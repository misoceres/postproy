const express = require('express');
const dotenv = require('dotenv').config();
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(require('./routes/index.js'));
app.use(cors);



app.listen(process.env.PORT,()=>{
    console.log('Ya funciono el servidor')
})

