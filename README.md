# Node.js Practical Test

## Instructions to run the application after cloning locally

* To install dependencies run 'npm install' on the terminal after getting into backend folder

* To start the application  run 'npm start' on the terminal 


## Api requests for each requirements

* http://localhost:5000/api/users/register  -- User Signup

    For signup you need to give the firstname,lastname,email and password in the request body

    sample input 

    {
    "firstName":"Rahul",
    "lastName":"P",
    "password":"99999",
    "email":"rahulpar1999@gmail.com"
    }

* http://localhost:5000/api/users/login  -- User Login

    For logging in you need to give the email and password in the request body

    sample input 

    {
    "password":"99999",
    "email":"rahulpar1999@gmail.com"
    }

* http://localhost:5000/api/books -- Create new book

    sample input 

    {
    "bookName":"ramayanam",
    "authorName":"shake",
    "price":234,
    "status":true
    }

* http://localhost:5000/api/books/listallbooks/  -- List all books


* http://localhost:5000/api/books/63b7c1642a74b327fcf0951f  -- Edit book details


## Services used:
* Node.js
* Express.js
* MongoDB
* JWT
* Mongoose
* bcryptjs

