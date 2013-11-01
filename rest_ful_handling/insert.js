//Node.js Program to be run to insert the initial data to the mongoDb database
var MongoClient = require('mongodb').MongoClient ;
var users = [
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
MongoClient.connect('mongodb://127.0.0.1/backbone_test',function(err,db){
	if(err)
		throw err;
	db.collection('users').insert(users,function(err,doc){
		if(err)
			throw err;
		db.close();

	});


});