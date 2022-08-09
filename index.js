const express = require('express');
const app = express();
var path = require('path')
const route = require("./routes/routes");
const port = process.env.PORT || 8080;

app.use(express.json())
app.use(route);
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port);
console.log('Le Serveur à démarrer à http://localhost:' + port);