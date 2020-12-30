# Mock API Development using Express.js


## What is REST?
**REST**, or Representational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server. We will go into what these terms mean and why they are beneficial characteristics for services on the Web.

The REST architectural style describes six constraints that were originally communicated by Roy Fielding in his doctoral dissertation and defines the basis of RESTful-style as:
1. Uniform Interface
2. Stateless
3. Cacheable
4. Client-Server
5. Layered System
6. Code on Demand (optional)

RESTful services use HTTP requests to perform **CRUD (Create, Read, Update, Delete) operations**.
<br /><br />


## What is Express.js?
Express is a fast, assertive, essential and moderate web framework of Node.js. You can assume express as a layer built on the top of the Node.js that helps manage a server and routes. It provides a robust set of features to develop web and mobile applications.

Let’s see some of the core features of Express framework

* It can be used to design single-page, multi-page and hybrid web applications.
* It allows to setup middleware to respond to HTTP Requests.
* It defines a routing table which is used to perform different actions based on HTTP method and URL.
* It allows to dynamically render HTML Pages based on passing arguments to templates.
<br />

## Express.js Architecture
![](https://s3-eu-west-1.amazonaws.com/jssolutions/Article_Photo/Mobile+app+development+with+Express.js/express+js+mobile+development.jpg)
<br />

## Advantages of Express.js?
* Ultra-fast I/O
* Asynchronous and single threaded
* MVC like structure
* Robust API makes routing easy
<br />

## Tools/Technologies
* Node.js
* MongoDB
* Text editor (Notepad++, Sublime, Atom, VSCode)
* Postman
<br />

## Pre-requisites
Node.js and MongoDB should be installed. If you haven’t installed them, you can install from the below URLs.
* [Node.js](https://nodejs.org/en/download/package-manager/)
* [MongoDB](https://docs.mongodb.com/manual/installation/)
<br />

## Getting started
Basically this project contains RESTful APIs for CRUD operations which developed using Mongoose and Express.js. 

Open your terminal and follow the following steps.
1. Clone this project to your computer \
**`git clone https://github.com/osandadeshan/mock-server-demo.git`**

2. Navigate to the project folder \
**`cd mock-server-demo`**

3. Install the relevant node modules \
**`npm install`**

4. Start the server \
**`npm start`** \
Then you will see \
**Mock server started on: 3000**
<br />

## Testing via Postman
Now that everything is now connected, let’s test each of the routes and the respective methods.

1. **GET Health**
***GET http://localhost:3000/health***

![Health](https://user-images.githubusercontent.com/9147189/103358772-64d6ee80-4adc-11eb-9d78-dbb855de566d.png)

2. **GET Authentication Token**
***GET http://localhost:3000/auth***

![GET](https://user-images.githubusercontent.com/9147189/103358678-348f5000-4adc-11eb-8454-9fa9f43873da.png)

3. **GET All Tasks**
***GET http://localhost:3000/tasks***

***Mandatory Headers:-***
   |Header Name	  |Header Value															  |
   |--------------|-----------------------------------------------------------------------|
   |Authorization |Bearer 5aa8220420419fd5890bb88a1767ed7cb1abc4412024bfff91513a40d6e19823|
   |App-Name  	  |IntelliAPI    														  |
   |Organization  |MaxSoft    															  |

![GET](https://user-images.githubusercontent.com/9147189/103358638-175a8180-4adc-11eb-8bf5-9cd44c7b1eb5.png)

4. **POST A Task**
***POST http://localhost:3000/tasks***

***Mandatory Headers:-***
   |Header Name	  |Header Value															  |
   |--------------|-----------------------------------------------------------------------|
   |Authorization |Bearer 5aa8220420419fd5890bb88a1767ed7cb1abc4412024bfff91513a40d6e19823|
   |App-Name  	  |IntelliAPI    														  |
   |Organization  |MaxSoft    															  |

***JSON Request Body:-***
```json
{
    "status": [
        "In Progress"
    ],
    "name": "IntelliAPI framework for codeless API automation",
    "category": "IntelliAPI",
    "isDeleted": false,
    "__v": 1.3
}
```   

![GET](https://user-images.githubusercontent.com/9147189/103358541-d5c9d680-4adb-11eb-91da-bfc043e80a5a.png)
