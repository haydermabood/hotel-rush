
#Hotel Rush

[![Build Status](https://travis-ci.org/haydermabood/hotel-rush.svg?branch=master)](https://travis-ci.org/haydermabood/hotel-rush)

### Getting started with your local sandbox server

**Dependenices:**

**One time dependencies (you only need to do these the first time you set up this app). If you have set up this app before, skip to step 5.**

1) Download the *latest* version node.js if you have not already <http://nodejs.org/>. You can confirm that node is successfully installed on your machine by opening up Terminal and typing 'node'. If you don't get an error, it's installed! You can exit the node process with Ctrl+c.

2) Download this project repo and navigate into the code directory with Terminal. To download it, click "Download Zip" at [the repo](https://github.com/haydermabood/hotel-rush)... (do not clone it).

3) cd path/to/this/code/directory

4) Run **npm install** to get all required libraries.

	npm install

    ```Note: this command also build the project.``` 

5) Run **npm run dev** to start the server.

	npm run dev

6) Run **npm run test-server** to run the server tests.

	npm run test-server
	
7) Open your favorite browser and navigate to:

	http://localhost:3000/

8) The server hotel offers API is available at the following path:

        http://localhost:3000/api/offers
	
	You can append *query sting* parameters as required, for example:
	
	    http://localhost:3000/api/offers?destinationName=Miami&lengthOfStay=1&maxTripStartDate=2018-01-18&minTripStartDate=2018-01-11
	
9) If at any point you want to re-build the project you can execute:

	npm run build
