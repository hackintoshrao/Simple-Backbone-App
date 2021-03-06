
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongodb = require('mongodb');
  
var app = express();
var server = new mongodb.Server('localhost',27017,{auto_reconnect:true});
var db = new mongodb.Db('backbone_test',server);
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', function(req,res){
  console.log("backbone Request Accepted");
  db.open(function(err,db){
  db.collection('users',function(err,collection){
    collection.find().toArray(function(err,docs){
      console.log(docs);
      db.close();
    });
  });

});
});

  
	


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
