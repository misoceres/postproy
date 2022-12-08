const express = require('express');
const dotenv = require('dotenv').config();
const bodyparser = require('body-parser');
const cors = require('cors');

var corsOptions = {
    origin:['http//127.0.0.1:8081','http://localhost:8081'],
    optionSuccessStatus: 200,
}
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors(corsOptions));
app.use(require('./routes/index.js'));
app.use('/usu',require('./routes/usuario'));
app.use('/programa',require('./routes/programa'));


app.listen(process.env.PORT,()=>{
    console.log('Ya funciono el servidor')
})

