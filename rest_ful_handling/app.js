
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

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
  var obj = [
              {"name":'Karthic Rao',"age":20,"college":'FSMK',"branch":'Computers',"passion":'Keyboards,Metal,Coding'},
              {"name":'Manas',"age":20,"college":'FSMK',"branch":'Computers',"passion":'Keyboards,Metal,Coding'},
              {"name":'Naveen',"age":20,"college":'FSMK',"branch":'Computers',"passion":'Keyboards,Metal,Coding'},
              {"name":'Santhosh',"age":20,"college":'FSMK',"branch":'Computers',"passion":'Keyboards,Metal,Coding'},
              {"name":'Ravi',"age":20,"college":'FSMK',"branch":'Computers',"passion":'Keyboards,Metal,Coding'},
              {"name":'Kishore',"age":20,"college":'FSMK',"branch":'Computers',"passion":'Keyboards,Metal,Coding'},
              {"name":'Chethan',"age":20,"college":'FSMK',"branch":'Computers',"passion":'Keyboards,Metal,Coding'},
              {"name":'Mayur',"age":20,"college":'FSMK',"branch":'Computers',"passion":'Keyboards,Metal,Coding'},
              {"name":'Jake',"age":20,"college":'FSMK',"branch":'Computers',"passion":'Keyboards,Metal,Coding'},
              {"name":'Sahana',"age":20,"college":'FSMK',"branch":'Computers',"passion":'Keyboards,Metal,Coding'},
              {"name":'Ishan',"age":20,"college":'FSMK',"branch":'Computers',"passion":'Keyboards,Metal,Coding'},
              {"name":'Chaudary',"age":20,"college":'FSMK',"branch":'Computers',"passion":'Keyboards,Metal,Coding'},
              {"name":'Ramya',"age":20,"college":'FSMK',"branch":'Computers',"passion":'Keyboards,Metal,Coding'},
              {"name":'Cyrus',"age":20,"college":'FSMK',"branch":'Computers',"passion":'Keyboards,Metal,Coding'}
            ]  
  res.writeHead(200,{'Content-Type':'application/json'});
  res.write(JSON.stringify(obj));
  res.end();
  
	
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
