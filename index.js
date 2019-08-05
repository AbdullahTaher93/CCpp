//using mongodb
var express=require("express");
var MongoClient=require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
/*MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {   //here db is the client obj
    if (err) throw err;
    console.log("db has created");
    var dbase = db.db("persons"); //here
    dbase.createCollection("profiles", { useNewUrlParser: true },function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();   //closed method has also been moved to client obj
    
});*/
MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error(err)
  
    return
  }
  var dbase = client.db("persons");
  const collection = dbase.collection('profiles')
  //...
})
        

    
      



    var app = express();
    var bodyParser=require('body-parser');

    
    var port = process.env.PORT || 5000;

    var savedata=require("./class");
    app.set('port', port);
    app.use(express.static(__dirname + '/public'));
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))


    app.get('/', function (req, res) {

      var msg = {
             "status": "OK",
             "ejemplo": {
                "ruta": "/issue/foo",
                            "valor": { "msg" : "Abdullah Form Spain" }
               }
           }
      res.status(200);
      res.send(msg);
      console.log('done server')
    });
    

    app.get('/api',(req,res)=>{
     
      savedata.print();
      
      res.status(200).send(savedata.jsonreturn);
       });

       app.get('/api/search',(req,res)=>{
       
          savedata.search(req.body.age);
         
          res.status(200).send('The name of these age are printed in console');
           
           });
    

    

         app.post('/api',(req,res)=>{
      
            savedata.storeData(req.body.name,req.body.age,req.body.sex,req.body.email,req.body.phonenumber,req.body.skills,req.body.study);
           
            res.status(200).send(req.body.name+' '+req.body.age+' '+req.body.sex+' '+req.body.email+' '+req.body.phonenumber+' '+req.body.skills+' '+req.body.study);
             
             });

          app.put('/api',(req,res)=>{
             
              savedata.editdata(req.body.index,req.body.name,req.body.age,req.body.sex,req.body.email,req.body.phonenumber,req.body.skills,req.body.study);
           
              res.status(200).send(req.body.name+' '+req.body.age+' '+req.body.sex+' '+req.body.email+' '+req.body.phonenumber+' '+req.body.skills+' '+req.body.study);
               
               
               });


               app.delete('/api',(req,res)=>{
               
                savedata.deletdata(req.body.index);
             
                res.status(200).send('this is profile has deleted!!!');
                 
                
                 });
            
     




  
  app.listen(port, function () {

    console.log('Example app listening on port 3000!');

  });
module.exports=app;