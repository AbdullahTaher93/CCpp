

# Milestone 3 Document

   In this Milestone ,The application has been deployed on Azure in a virtual machine with Ubuntu Server 18.04.

   ## Creating a Virtual machine

   its configuration:
   
   1. OS: Ubuntu Server 18.04 
   2. Region: France Central.
   3. Authentication:password.
   4. user : AbdullahTaher
   5. Ip address: static
   6. Open ports: SSH (22) and HTTP (80).
    
![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/VM1.png)

   ## Ansible

To use it, we need to install it previously. Then we need to edit a file called ansible_hosts and it is located in the / etc / ansible / hosts directory. This file edited with the following:

     [Azure]
       Ip Address Ansible_user=AbdullahTaher Ansible_ssh_pass=Mypass

we are indicating that my IP is in the azure group and has a user named AbdullahTaher and password 'Mypassword' . Now running the following command we can ping our machine : 
   
         Ansible all -m ping --ask-pass 


And the result follows:

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/ansible.png)


Now we will proceed to perform the provisioning task to deploy our application.

The provisioning file is located in the provision directory with the name [playbook.yml](https://github.com/AbdullahTaher93/CCMYproject/blob/master/provision/playbook.yml)



this file follows these steps:

* Create a directory where the project will be downloaded.
* Clone the git repository.
* Install npm 
* Install dependencies.
* Install pm2
* Remove, if it exists, a previous pm2 process
* Execute the application.

We launched the playbook and the result is as follows:
        
![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/ansible1.png)









   ## Run our App
  
 we can run our application on the VM with a command :
        
         sudo port=80 npm start

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/port80.png)

The result following:    http://40.89.158.72/


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/sever.png)







      






    











    
 







