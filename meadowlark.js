var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var port = process.env.PORT || 3000;

app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');


//Home Page
app.get('/',function(req, res){
    res.render('home');
});

//About Us Page
app.get('/about',function(req, res){
    res.render('about');
})
// custom 404 page
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('Error 404 - Not Found');
});
// custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});
app.listen(port, function(){
console.log( 'Express started on http://localhost:' + port + '; press Ctrl-C to terminate.' );
});
