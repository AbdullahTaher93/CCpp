# Milestone 4


In this part we will create VM by using the [Azure](https://Azure.microsoft.com) CLI tool, then we will deploye our app on Azure in a virtual machine with [Debian 9](https://www.debian.org/intro/why_debian), and we will add Mongodb into our app ....


#### In this part we are going to use Mongodb in Our App..

We have to do somethings for using Mongodb : 

  First: we need to connect our app with Mongodb, but before that we should install mongodb with this line:

    npm install mongodb --save

Now we can connect mongodb with our app by these lines:

    var MongoClient=require("mongodb").MongoClient;

    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, { useNewUrlParser: true },function(err,........

Second: we used 3 method for dealing with mongodb
 
 * add a new profile by this line:

           db.collection("profiles").insertOne() 

* remove a profile by this line:

    
        query={ID:index};*
        db.collection("profiles").deleteOne(query)

* Search about a profile by this line:

        query={ID:index};
        db.collection("profiles").find().sort(query).toArray()


## Now we are going to create a new VM by using command line for deploying our App

#### We are going to use Cloud shell of portal azuer



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/cli.png)

The first thing we have to do That create the resource group with the following command:

    az  group create --name hito4resend --location francecentral


In this case we chose data center of france central because it has the best Average Latency, following [web portal](https://azurespeedtest.azurewebsites.net/) 



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/lat.png)


After running the command of create group the result will be: 

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/creategroup.png)


#
Next, we are going to create the network security group of our virtual machine
following command:

       az network nsg create --resource-group hito4resend --location francecentral --name networks


The result will be:



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/createnetwork1.png)


#
Then we should open Port 80 with command:


    az network nsg rule create --resource-group hito4resend --nsg-name networks --name http80 --protocol tcp --priority 800 --destination-port-range 80 --access allow




![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/createnetwork2.png)





#
Next, we can create and run  our virtual machine, we are going to indicate image of os, user, static ip and we indicate that it belongs to the network security group is created previously that with command:

     az vm create --resource-group hito4resend --name Myproject --image credativ:Debian:9:latest --admin-username abdullahtaher --admin-password mypassword --public-ip-address-allocation static -- nsg networks

   ![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/runVMcli.png)



its configuration:
   
   1. OS: Debian9 
   2. Region: France Central.
   3. Authentication:password.
   4. user : abdullahtaher
   5. Ip address: static
   6. ports: HTTP (80).


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/debiancfg.png)

## Why Debian?!

### Packages well integrated
Debian surpasses all other distributions in how well its packages are integrated. Since all software is packaged by a coherent group, not only can all packages be found at a single site, but you can be assured that we have already worked out all issues regarding complicated dependencies. While we feel that the deb format has some advantages over the rpm format, it is the integration between the packages that makes a Debian system more robust.

### Source code


If you are a software developer, you will appreciate the fact that there are hundreds of development tools and languages, plus millions of lines of source code in the base system. All of the software in the main distribution meets the criteria of the Debian Free Software Guidelines (DFSG). This means that you can freely use this code to study from, or to incorporate into new free software projects. There are also plenty of tools and code suitable for use in proprietary projects.
   


### Easy upgrades

Due to our packaging system, upgrading to a new version of Debian is a snap. Just run apt-get update ; apt-get dist-upgrade (or aptitude update; aptitude dist-upgrade in newer releases)

### Fast and easy on memory
Other operating systems may be as fast in one or two areas, but being based on GNU/Linux or GNU/kFreeBSD, Debian is lean and mean. Windows software run from GNU/Linux using an emulator sometimes runs faster than when run in the native environment.

[Read more information about Debian](https://www.debian.org/intro/why_debian)

We can find specific [images](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/cli-ps-findimage) of Debian,To find a specific VM image in the Marketplace we can use this line:

             az vm image list --offer Debian --all --output table 

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/showVMofDebian.png)


### Start with Debian 9

  ![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/runde.png)

Finally, now we can deploy our project on the new our virtual machine so we can do that a same way as in the [previous milestone](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/Hito3.md),we have to [Install](https://tecadmin.net/install-ansible-on-debian-9-stretch/) Ansible on Debian 9, now we can ping our machine after edit hosts file with ansible_host, ansible_ssh_pass and ansible_user that it is located in the  --/etc/ansible/hosts-- and the result will be:

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/testwithansible.png)










### Check the App 

To check App if it is working correctly, its IP accessed through the browser http://52.143.152.163/

  and the result will be:



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/IPVM2.png)






       










