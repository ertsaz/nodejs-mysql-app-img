const express = require('express');
const morgarn = require('morgan');
const exhbs = require('express-handlebars');
const path = require('path');
const app = express();
require('dotenv').config();
const pool = require('./database');

//configuracion
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exhbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'parcials'),
    extname: '.hbs'

}));
app.set('view engine', '.hbs');

//midleware
app.use(morgarn('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routers
app.use(require('./routers/index'));

//global variables


//iniciar server
app.listen(app.get('port'), () => {
    console.log('server en el puerto', app.get('port'));
});