var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var port = process.env.PORT || 3000;

app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');

var fortunes = [
"Conquer your fears or they will conquer you.",
"Rivers need springs.",
"Do not fear what you don't know.",
"You will have a pleasant surprise.",
"Whenever possible, keep it simple.",
];

//Middlewares
app.use(express.static(__dirname + '/public'));


//Home Page
app.get('/',function(req, res){
    res.render('home');
});

//About Us Page
app.get('/about', function(req, res){
   var randomFortune =
    fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune: randomFortune });
});

//Custom 404 page
app.use(function(req, res, next){
   res.status(400);
   res.render('404');
});

// custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('505');
});
app.listen(port, function(){
console.log( 'Express started on http://localhost:' + port + '; press Ctrl-C to terminate.' );
});
