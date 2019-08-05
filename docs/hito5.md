# Milestone 5


In this part the create virtual machine  with Ubuntu Server 18.04 ,and The orchestration of the virtual machine was performed using the Vagrant orchestration tool ,[Vagrant](https://www.vagrantup.com/intro/index.html) provides easy to configure, reproducible, and portable work environments built on top of industry-standard technology and controlled by a single consistent workflow to help maximize the productivity and flexibility of you and your team.....



## Creating a Virtual machine

   its configuration:
   
   1. OS: Ubuntu Server 18.04 
   2. Region: France Central.
   3. Authentication:password.
   4. user : AbdullahTaher
   5. Ip address: static
   6. Open ports: SSH (22) and HTTP (80).



   ## Install Vagrant on Ubuntu 

   The first step we have to  install VirtualBox with this Line :   

    sudo apt-get install virtualbox

 Then we have to install Vagrant with this Line:
   
    sudo  vagrant box add azure https://github.com/azure/vagrant-azure/raw/v2.0/dummy.box --provider azure

     sudo  vagrant plugin install vagrant-azure

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/box.png)

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/install.png)






Then we can init Vagrantfile with this Line:

    sudo vagrant init azure

so now we Can edit it for our work that I edited [it]() to :

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/Vfile.png)


Finally we can run it with this Lines:


     sudo vagrant up
     sudo vagrant provision


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/runv1.png)

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/runv2.png)

The result:

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/resultv1.png)


now we can check the Datebase on Postman:


1- Add a new profile with Post request:

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/postman1.png)

2- Edit a profile with PUT request:

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/postman2.png)



3- delete a profile with Delete request:

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/postman3.png)















    



