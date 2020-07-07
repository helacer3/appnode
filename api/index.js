const express    = require("express");
const bodyParser = require("body-parser");
const user       = require("./components/user/network");
const config     = require("../config.js");

const app = express();

app.use(bodyParser.json());

// Router
app.use('/api/user', user);

app.listen(config.api.port,() => {
	console.log('API escuchando en el puerto ', config.api.port);
});


/*
git init
npm init
npm i express
npm i body-parser
*/