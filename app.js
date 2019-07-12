var express = require('express');
var app = express();
app.use(express.static('public/temp1'));
app.set('view engine','ejs');
var bodyParser = require('body-parser');
var port = process.env.PORT||80;
// #############################################################################
function get (route,html){app.get(route,function(req,res){res.render(html)})}
get('/','temp1/index')


// #############################################################################
app.listen(port,function(){console.log('Dentist Sites has just been Launched')})