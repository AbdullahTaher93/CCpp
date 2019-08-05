#! / bin / bash





# We wil create a group of resources with location
az group create --name hito4 --location francecentral

# We created a security group for the network of the resource group previously created
az network nsg create --resource-group hito4 --location francecentral --name networks
# We will open port 80 
az network nsg rule create --resource-group hito4 --nsg-name networks --name http80 --protocol tcp --priority 800 --destination-port-range 80 --access allow
# We will create the virtual machine with the group of resources created previously.
# az vm create --resource-group hito4 --name Myproject --image Canonical: UbuntuServer: 18.04-LTS: latest --admin-username abdullahtaher --admin-password mypassword --public-ip-address-allocation static - nsg networks
# We will create the virtual machine with the group of resources created previously.
 az vm create --resource-group hito4resend --name Myproject --image credativ:Debian:9:latest --admin-username abdullahtaher --admin-password mypassword --public-ip-address-allocation static -- nsg networks
