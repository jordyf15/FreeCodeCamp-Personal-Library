# FreeCodeCamp's Personal Library
For the Third project of FreeCodeCamp's Quality Assurance Curriculum we have to make a personal library where users can add a new book, delete a book and also add comments for each book.

## Live Demo on Repl
https://FreeCodeCamp-Personal-Library.jordyf15.repl.co

## Technologies Used:
1. HTML
2. CSS
3. Javascript
4. Body-parser version ^1.15.2
5. Chai version ^3.5.0
6. Chai-http version ^3.0.0
7. Cors version ^2.8.1
8. Express version ^4.14.0
9. Helmet version ^3.1.0
10. Mocha version ^3.2.0
11. Mongoose version ^5.10.5
12. Zombie version ^5.0.5

## User-Stories
1. Nothing from my website will be cached in my client as a security measure.
2. I will see that the site is powered by 'PHP 4.2.0' even though it isn't as a security measure.
3. I can post a title to /api/books to add a book and returned will be the object with the title and a unique _id.
4. I can get /api/books to retrieve an aray of all books containing title, _id, & commentcount.
5. I can get /api/books/{_id} to retrieve a single object of a book containing title, _id, & an array of comments (empty array if no comments present).
6. I can post a comment to /api/books/{_id} to add a comment to a book and returned will be the books object similar to get /api/books/{_id}.
7. I can delete /api/books/{_id} to delete a book from the collection. Returned will be 'delete successful' if successful.
8. If I try to request a book that doesn't exist I will get a 'no book exists' message.
9. I can send a delete request to /api/books to delete all books in the database. Returned will be 'complete delete successful' if successful.
10. All 6 functional tests requiered are complete and passing.

## Project Description
This project was made from FreeCodeCamp's Personal Library [Boilerplate](https://repl.it/github/freeCodeCamp/boilerplate-project-library/) where we have to edit some files to make it work. There are 3 files we need to edit to pass the test:
1. **Server.js**  
In server.js all we need to is use helmet as middleware to add security features to the personal library. We can this do this by adding ```app.use(helmet());``` before all routes in server.js
2. **Routes/api.js**   
There are 2 routes in total with 3 methods each that we need to complete for the public library to work.
 - `/api/books`
    - `get` method:  
    The get method in this route is to get all books in the database and return it as an array.
    - `post` method:  
    The post method in this route is to create a new book in the library.
    - `delete` method:  
    The delete method in this route will delete all books in the library.
 - `/api/books/:id`
    - `get` method:  
    The get method in this route will return a book based on id inputted by the user.
    - `post` method:  
    The post method in this route will create a new comment on the selected book by id.
    - `delete` method:  
    The delete method in this route will delete a book with the matching id from the library.
3. **2_functional-tests**  
There are 7 test in total but only 6 that we need to create since the first one is an example test created from the boilerplate.

4. **Additional edits**  
There are 3 files we can edit to change the front end of the personal library. They are client.js and style.css in the public folder and also index.html from the views folder.

### Previous instruction from FreeCodeCamp's Boilerplate
1. ADD YOUR MongoDB connection string to .env without quotes as db
    `example: DB=mongodb://admin:pass@1234.mlab.com:1234/fccpersonallib`
2. SET NODE_ENV to `test` without quotes
3. You need to create all routes within `routes/api.js`
4. You will add any security features to `server.js`
5. You will create all of the functional tests in `tests/2_functional-tests.js`


