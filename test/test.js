var request = require('supertest');
var app=require("../index.js");
var alldata=require("../class.js");
const assert = require('assert');

//API REST test

describe( "API REST", function() {

  	it('responds {"status":"OK"} to /', function (done){
		request(app)
			.get('/')
			.set('Accept', 'application/json')
			.expect('Content-Type',/json/)
			.expect(function(res){
				if( res.body.status != "OK" ) throw new Error ("The service is not OK");
			})
			.expect(200);
      done();
	});
  
//print all profiles on console
  it('Get to /api', function(done){
    request(app)
      .get('/api')
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(200)
      done();
  });

it('Post to /api', function(done){
    request(app)
      .post('/api')
      .send("name=abdullah&age=25&sex=M&email=AbdullahTaher@correo.ugr.es&phonenumber=0063&skills=C1,C2,C3&study=A1")
      .expect(200);
      done();
  });
//edit
  it('put to /api', function(done){
    request(app)
      .put('/api')
      .send("index=0&name=ali&age=23&sex=M&email=AbdullahTaher@correo.ugr.es&phonenumber=0063&skills=C1,C2,C3&study=A1")
     .expect(200);
     done();
  });

  

  it('delete to /api', function(done){
    request(app)
      .delete('/api')
      .send("index=0")
      
      
      .expect(200) 
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
  
//query 
  it('query to /api/search', function(done){
    request(app)
      .get('/api/search')
      .send("age=25")
      
      
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
//==================== profile class test ====================

describe(' profile class test', function() {

	
	

	it( 'get 0 profile when there is no profile added' , function(done){
		assert.equal(alldata.savedata.length, 0);
		done();
	});

	it( 'add profile', function(done){

		alldata.storeData(name='abdullah',age=25,sex='M',email='AbdullahTaher@correo.ugr.es',phonenumber=0063,skills='C1,C2,C3',study='A1');
		var result = alldata.savedata;
		assert.equal(result.length,1);
		assert.equal(result[0].name,"abdullah");
		done();

  });
  
  it( 'edit profile', function(done){

		alldata.editdata(index=0,name='ali',age=25,sex='M',email='AbdullahTaher@correo.ugr.es',phonenumber=0063,skills='C1,C2,C3',study='A1');
		var result = alldata.savedata;
		assert.equal(result.length,1);
		assert.equal(result[0].name,"ali");
		done();

	});

	it( 'search of a person has age equal  25', function(done){
    alldata.search(25);
    var result = alldata.namesfilter[0];
		assert.equal(result,'ali');
		done();
	});

	it( 'delete the profile', function(done){
   alldata.deletdata(0);
    
		assert.equal(alldata.size,0);
		done();
	});

});

  






 

  

