const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const pet = require('./routes/pet.js');
const attention = require('./routes/attention.js');
const badge = require('./routes/badge.js');
const food = require('./routes/food.js');
const hygiene = require('./routes/hygiene.js');
const plant_type = require('./routes/plant_type.js');
const player = require('./routes/player.js');
const PORT = process.env.PORT || 3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded())
app.use(cors())
app.use('/api/v1/pet', pet)
app.use('/api/v1/attention', attention)
app.use('/api/v1/badge', badge)
app.use('/api/v1/food', food)
app.use('/api/v1/hygiene', hygiene)
app.use('/api/v1/plant_type', plant_type)
app.use('/api/v1/player', player)


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
