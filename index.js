//=============================================================================
// Basic Config
//=============================================================================
const express = require('express');
// instantiate cors
const cors = require('cors');
// instantiate express app
const app = express();
app.set('port', process.env.PORT || 7000);

// enable cors to allow requests from other URLs
app.use(cors());
//=============================================================================
// Middleware
//=============================================================================
// `express.json` parses application/json request data and
//  adds it to the request object as request.body
app.use(express.json());
// `express.urlencoded` parses x-ww-form-urlencoded request data and
//  adds it to the request object as request.body
app.use(express.urlencoded({ extended: true }));

//=============================================================================
// ROUTES
//=============================================================================
// Redirect
app.get('/', (req, res) => {
	res.redirect('/api/');
});
/* START CONTROLLERS HERE */
const resortController = require('./controllers/resortController');
// direct all requests to '/api/resorts' to the resort controller
app.use('/api/resorts', resortController);

const pinController = require('./controllers/pinController');
// direct all requests to '/api/pins' to the resort controller
app.use('/api/pins', pinController);

const userController = require('./controllers/userController');
// direct all requests to '/api/users' to the resort controller
app.use('/api/users', userController);

/* END CONTROLLERS HERE */

//=============================================================================
// START SERVER
//=============================================================================

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
