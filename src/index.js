const express = require('express');
const morgarn = require('morgan');
const app = express();

//configuracion
app.set('port', process.env.PORT || 5000);

//midleware
app.use(morgarn('dev'));

//iniciar server
app.listen(app.get('port'), () => {
    console.log('server en el puerto', app.get('port'));
});