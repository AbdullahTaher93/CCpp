//using mongodb
var MongoClient=require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";







size=0;
var savedata=[];
var jsonreturn=[];

var namesfilter=[];
var data = {
    name:'',
    age:0,
    skills:'',
    study:'',
    email:'',
    phonenumber:0,
    sex:"",
  
  
    setname: function(name) {
      this.name=name;
    },
    getname: function(){
      return name;
    },
    setage: function(age){
        this.age=age;
    },
    getage: function() {
     return age;
    },
    setskills: function(skills) {
      this.skills=skills;
    },
    getskills: function(){
      return skills;
    },
    setemail: function(email){
      this.email=email;
    },
    getemail: function() {
      return email;
    },
    setstudy: function(study){
      this.study=study;
    },
    getstudy: function(){
      return study;
    },
    getphone: function(){
      return phonenumber;
    },
    setphone: function(phonenumber){
      this.phonenumber=phonenumber;
    },
    getsex: function(){
        return sex;
      },
      setsex: function(sex){
        this.sex=sex;
      }
}
//insert new profile
function storeData(name,age,sex,email,phonenumber,skills,study){
    let clone = {};
    for (let key in data) {
      clone[key] = data[key];
      
    }
  
    clone.setname(name);
    clone.setage(age);
    clone.setsex(sex);
    clone.setemail(email);
    clone.setphone(phonenumber);
    clone.setskills(skills);
    clone.setstudy(study);
    
    
    


    savedata.push(clone);

    MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {   //here db is the client obj
      if (err) throw err;
      
      var dbase = db.db("persons"); //here
      var json;
      
        
        
           json={
            ID:size,
            name:name,
            age:age,
            sex:sex,
            email:email,
            phonenumber:phonenumber,
            skills:skills,
            study:study
            

          };
     
      dbase.collection("profiles").insertOne(json,function(err, res){
          if (err) throw err;
          console.log("profile created!");
          db.close();   //close method has also been moved to client obj
      });
  });
    size=size+1;
     
  }
  //edit a profile
  function editdata(index,name,age,sex,email,phonenumber,skills,study){
    savedata[index].setname(name);
    savedata[index].setage(age);
    savedata[index].setsex(sex);
    savedata[index].setemail(email);
    savedata[index].setphone(phonenumber);
    savedata[index].setskills(skills);
    savedata[index].setstudy(study);
  }
//delete a profile
function deletdata(index){
  
  MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {   //here db is the client obj
    if (err) throw err;
    
    var dbase = db.db("persons"); //here
    
    
      var query={ID:index};
      
        
    dbase.collection("profiles").deleteOne(query,function(err, res){
        if (err) throw err;
        console.log("profile deleted!");
        db.close();   //close method has also been moved to client obj
    });
});


var items=savedata.splice(index,1);
  return items;
}

function search(age){

var si=0;
   savedata.find(function(element) {
  if (element.age = age){
  namesfilter[si]=element.name;
  console.log(namesfilter[si]);
  si=si+1;
  }
  return namesfilter;
  
});



}


function search1(age){

  MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {   //here db is the client obj
    if (err) throw err;
 
    var dbase = db.db("persons"); //here
    
    
      var query={age:age};
      
        
    dbase.collection("profiles").find().sort(query).toArray(function(err, res){
        if (err) throw err;
        console.log(" searching!");
        db.close();   //close method has also been moved to client obj
    });
});
  
  
  
  }
  

//print all fprofiles in Console.....
  function print(){
   
    savedata.forEach(function(item, index) {
      console.log('['+(index+1)+'] '+item.name+' '+item.age+'  '+item.sex+'  '+item.email+'  '+item.phonenumber+'  '+item.skills+'  '+item.study);
      
      jsonreturn.push({"ID":(index+1),"name":item.name,"Age":item.age,"sex":item.sex,"email":item.email,"phonenumber":item.phonenumber,"skills":item.skills,"Study":item.study});
    }
    
    );
  

  }



  module.exports={storeData,savedata,print,editdata,deletdata,search,namesfilter,size,jsonreturn};



