

[![Build Status](https://travis-ci.org/AbdullahTaher93/CCMYproject.svg?branch=master)](https://travis-ci.org/AbdullahTaher93/CCMYproject)


# Description


We know there are many people are looking for a job and They have difficulty finding a job what they want,Conversely There are many companies’ managers are looking for a suitable person to work in their companies,for that my idea provides a RESTful WebService which will provide a relationship between companies and people, The objective is creating Employment APP that allows them to browse, search and get a chance to work, and select a suitable job. 
an example: If someone wants looking for a job the first thing he has to do it is creating an account with his email then configures his profile with his (name,skills ,phone number.....etc) that profile represents a simple C.V for him, so when he wants searching about a job the searches results will match to his skills which stored in his profile previously.

# Architecture

We will create the system by an architecture based on [microservices](https://en.wikipedia.org/wiki/Microservices). It has a cloud service in which the data is stored, the database system will be a NoSql database in (MongoDB), Our system has a Login/signup for users, from this, the users can also view all data that stored in DB on the cloud, they can add, edit or delete features (skills) to/from their profiles, The system also has a REST API which can be using through a web page to do requesting (Get, post, Put, and delete), so we can use Node js to create that services, development of microservices the following :

* Microservice: User management (Sign up, log in, user profile modification ...).

* Microservice: Management of the MongoDB database.

* Microservice: find jobs by Specific conditions.

* Microservice: display data in a certain way.




![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/arct.png)





#  Deployment

There are different PaaS deployment services to deploy our application, For that we select Heroku: This PasS has been chosen because it is simple to use and allows to deploy any application from a Github repository.

Travis has been used As an integration service.

 The reasons of use it are :
* easy to use. 

* It is enough to include a file .travis.yml. 

To use it you have to connect it with the github account.

All information regarding of this section and the microservice developed are in
[This Document](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/Hito2.md)

Despliegue: https://small-well-service.herokuapp.com/


# Provision

The application deployed in Azure in a virtual machine with Ubuntu Server 18.04 
All the information about this milestone[This Document](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/Hito3.md)

I have checked the supply of [javiercabrera184](https://github.com/javiercabrera184) in the following [This Document](https://github.com/javiercabrera184/ProyectoCC/blob/master/docs/Hito3.md)

MV: 40.89.158.72



# Gathering

In this part we will create virtual machine by command line using the Azure CLI tool, The we will deploy our application on Azure in a virtual machine with Debian 9  as os, and we used Mongodb in our app 
All the information about this milestone[This Document](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/hito4.md)


MV2: 52.143.152.163



# Orchestration


The orchestration of the virtual machine was performed using the Vagrant orchestration tool,All the information to this milestone is in [This Document](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/hito5.md)

and [this Video](https://azure.microsoft.com/es-es/resources/videos/azure-virtual-machine-creation-and-set-up-using-vagrant-with-corey-fowler/) help me to deal with vagrant.


Despliegue Vagrant: 52.143.168.220

