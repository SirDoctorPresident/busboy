# I heard you need an app

Well hey, this is an app. Specifically, this is a super simple node app to get you started with node, express, and pivotal cloud foundry.

## Prequisites
- ### **git**
  I recommend you [**download the git cli**](https://git-scm.com/downloads) if you haven't already. You can still follow along by downloading this repo as a zip but then all the cool kids will jeer. Assuming you downloaded and installed it successfully, the following command should give you some output:
  ```bash
  git --version
  ```
- ### **node (and npm)**
  This is a node app. As such you will need to [**install node**](https://nodejs.org/en/) if you wanna follow along on your machine locally. Confirm it worked by running these:
  ```bash
  node -v
  npm -v
  ```
- ### **PWS (Pivotal web services)**
   You'll need access to pivotal cloud foundry. [**Sign up for a free account**](https://account.run.pivotal.io/z/uaa/sign-up) to gain access to pivotal web services, which is what we will be using to host our app.
- ### **CF CLI**
  Finally, you will need the [**cloud foundry cli**](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html#windows-installation) to deploy the app to pcf. Guess what? Sanity check!
  ```bash
  cf -v
  ```

## Building the application
You will need to clone this repository and install its dependencies in order to run it. Run the following commands to do so:
```bash
git clone https://github.com/SirDoctorPresident/an-app.git
cd an-app
npm install
```
In order, this will:
 1. Clone the contents of this repo into a directory named ```an-app```
 2. Navigate to that directory
 3. Install the dependencies for this project. The node package manager will look for the dependencies listed in ```package.json``` (in our case the only dependency is express, which is a web server library) and install them into the ```node modules``` directory.
## Running the application
Once you have run ```npm install``` to get express, you can run this application by navigating to the source directory and running either of the following two commands:
```bash
node app.js
```
  or
```
npm start
```
This will start the server on port 8080. Now you're running the app locally! [You can view it here](http://localhost:8080/).
> *```npm start``` is actually simply an alias for ```node app.js``` which we defined in the ```scripts``` section of ```package.json```*

## Deploying to PCF
So now you've build the app locally, but no one can see it and you worked so hard! We need to get it in the cloud. This is where the cf cli comes in! Check it:
```bash
cf login -a api.run.pivotal.io
cf push an-app
```
In order, this will:
1. Log you into pcf. You will be prompted for your credentials. 
   > *The ```-a``` option allows you to specify the api endpoint and may be different depending on how you procured your cloud foundry installation, but if you're using pivotal web services, the above link should work fine.*

2. Push your application to the org and space you specified (if you only have access to one it will figure it out).
   > *The ```push``` command figures out how to configure a server for your application and push it by using the ```manifest.yml``` file in this project. By convention, the ```cf``` command will look for this file in the directory in which it is run to figure out how to properly stage an app.*
   
   > *The only thing I will draw your attention to specifically in ```manifest.yml``` is the path property, which we set to be the current directory; meaning when we run cf push, this whole directory will be pushed to the server (in a proper application we would generate a separate build folder and assign it to path). You can read more about the properties in ```manifest.yml``` [here](https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html).*

   >*Final note, pcf, needs to know how to run your server for it to work. By default, it will attempt to run ```npm start``` in order to do this, which is why we bothered defining the ```start``` script in ```package.json```*
