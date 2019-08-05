# Milestone 2
In this milestone, a REST API has been developed by NodeJS using Express, 

 Right now, The data is stored in a structure and managed by itself, in the future this will be changed by using MongoDB.

A RESTful API is an application program interface [API](https://searchmicroservices.techtarget.com/definition/application-program-interface-API) That uses [HTTP](https://searchwindevelopment.techtarget.com/definition/HTTP) requests to GET, PUT, POST and DELETE data.
A RESTful API -- also referred to as a RESTful web service -- is based on representational state transfer [REST](https://searchmicroservices.techtarget.com/definition/REST-representational-state-transfer) technology, an architectural style and approach to communications often used in [web services](https://searchmicroservices.techtarget.com/definition/Web-services-application-services) development.



## Data Structure

This structure has a "data" object The data to keep information about persons(profiles) such as ::

* names
* ages
* skills
* study (Bachelor, Master,PhD ......)
* Phones numbers
* emails
* status (Single or not)

We create four functions:

     1- storeData : it provides to users create a new profile
       
     2- editData: edit a value already stored in the profile.
       
     3-deleteData: delete a profile.
       
     4-search: it provides a searching based on Specific conditions. 
     
We can see the code of these functions in [class.js](https://github.com/AbdullahTaher93/CCMYproject/blob/master/class.js)

## REST API
 Our REST API has methods following:

     1- GET on "/": Return the status of the service.

     2- GET over "/api":return all the profiles of users.

     3- GET over "/api/search":return the profiles of users whose their ages less than Specific age .

     4- POST on "/api": Add a new profile.

     5- PUT on "/api": Edit an element stored in the profile,It's based on the ID of the profile.

     6- DELETE on "/api":remove a profile of users, It's based on ID of profile.


 We can see the code of these methods in [index.js](https://github.com/AbdullahTaher93/CCMYproject/blob/master/index.js).  

 Before That, the first thing we had to do which was creating a small web service using Node js:


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/npm%20init.png)


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/npm%20--save%20inst.png)





## Test

   The tests were created by using the "supertest" framework and executed with mocha. So we can test our App locally.
    
 ![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/testmocha.jpg)


 After that, we can test our project with [travis](https://travis-ci.org)


 ![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/trivas1.png)



 ![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/trivas2.png)


 


## PaaS Heroku

 We selected This PasS because it is easy to use, it is free and it easy to configure, Also it is easy to integrate with Travis, in the Future we will use Azure.

 Now for using Heroku we should create an new account in [Heroku](https://Heroku.com) then we should connect Github with Heroku.

 ![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/heroku.png) 




 

## [My Project](https://abdullahtaher93.github.io/CCMYproject/)

 Despliegue: https://small-well-service.herokuapp.com/

 Now I used [postman](https://www.getpostman.com/) app to send requests.


1- GET on "/": Return the status of the service.

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/get1.jpg) 


2- POST on "/api": Add a new profile.

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/post.jpg)

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/post1.jpg)


3- GET over "/api":return all the profiles of users.

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/getall.jpg)
 


4- PUT on "/api": Edit an element stored in the profile,It's based on the ID of the profile.

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/put1.jpg)


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/put2.jpg)

 6- DELETE on "/api":remove a profile of users, It's based on ID of profile.

 ![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/delete.jpg)

 ![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/delete1.jpg)