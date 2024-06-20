
# St Augustine's Prayer App

St Augustine's Prayer App helps educators, administrators, and students find and create appropriate prayers for school events, aiming to reduce stress. It offers a curated database and a tool for generating custom prayers, focusing on text-based content.

## Installation

### Prerequisites
Ensure you have Node.js and npm installed on your system. You can download and install them from [nodejs.org](https://nodejs.org/)
ensure you  install version 20.9.0, to maximise usability of dependencies.

Ensure you have Git installed to clone the repository. You can download and install it from [git-scm.com](https://git-scm.com)

### 1. Installation Steps
Clone the Repository
Open a terminal (or command prompt) and navigate to the directory where you want to clone the repository. Run the following command:
```bash
  git clone https://github.com/SPorcelli4/St-Augustine-Prayer-App-Assessment.git
```

### 2. Navigate to the Project Directory

```bash
cd St-Augustine-Prayer-App-Assessment
```
### 3. Install Dependencies
Once inside the project directory, install the required dependencies using npm:
This will install all the required dependencies

```bash
npm install
```

### 4. Configure Environment Variables
Create a .env file in the root of your project directory and add the necessary environment variables. Example:

```bash
touch .env
```

Add your environment variables in the .env file. The only one required for this project is a mongodb connection string.

#### Note: You will need to create a cluster on MongoDB, a tutorial on this is available on their site [mongodb.com](https://www.mongodb.com/docs/guides/atlas/cluster/). Then you will need to follow these steps on getting your [connection string](https://www.mongodb.com/docs/guides/atlas/connection-string/).

Example of the connection string in your .env file"
```bash
MONGODB_URI="mongodb+srv://myDatabaseUser:D1fficultP%40ssw0rd@cluster0.example.mongodb.net/?retryWrites=true&w=majority"
```

Modify these values according to your project's requirements.

### Start the server
Start the server with the following command:

```bash
npm start
```


### or, for development mode with hot-reloading:

```bash
npm run startDev
```
#### You have now successfully installed and run the app! 

### Access the Website
Open a web browser and navigate to http://localhost:3000

### Additional Information
#### Testing: To run tests, use the following command:


```bash
npm test
```
Linting: To check for linting errors, run:

```bash
npm run lint
```

### Common Issues:
Port already in use: If the specified port is already in use, change the port number in the .env file.
Dependency issues: Ensure all dependencies are correctly installed by running npm install again.
Database connection errors: Double-check the database configuration in the .env file.
Feel free to reach out if you encounter any issues during the installation process.
## How to use

The website is simple in structure and acts how one expects it to act. To initalise an admin user you must go to the hidden route /signup from there you will create your admin. you may also maipulate the possible tags directly from the code. After signing in to the admin portal. You can add prayers dedicated to your needs. Also changing favicons and logos for diffrent schools and purposes is easy and all done through simple html.
## License

#### MIT LICENSE

Copyright (c) 2024 SPorcelli4

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Screenshots

![Set of images](public/images/screenshots/shot1.png)


## Acknowledgements

 - [Beginning Node.js, Express & MongoDB Development - Greg Lim](https://www.amazon.com.au/Beginning-Node-js-Express-MongoDB-Development/dp/1078379556)
 - [Node Auth Tutorial - Net Ninja ](https://www.youtube.com/watch?v=SnoAwLP1a-0&list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp)

## Author Details

Maintained by Me! - Silvio Porcelli

Contact is: silvio.porcelli@staugustinesprayerapp.com


## Documentation

[Documentation](https://docs.google.com/document/d/1so3Tt_6XLNcjWlfpXWvPc_wrMFYORPUzCaL_DAVwzro/edit)

