/*
*
*
*       Complete the API routing below
*       
*       
*/

'use strict';

var expect = require('chai').expect;
const book = require('../models/book');

module.exports = function (app) {

  app.route('/api/books')
    .get(function (req, res){//get all books
      var arrResult=[];
      var bookResult;
      book.find()
      .then((result)=>{
        result.forEach((ele)=>{
          bookResult={
            _id: ele._id,
            title: ele.book_title,
            commentcount: ele.comments.length
          }
          arrResult.push(bookResult);
        })
        return arrResult;
      })
      .then((result)=>{
        res.send(result);
      })
      .catch((err)=>{
        console.error(err);
      })
      //response will be array of book objects
      //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]
    })
    
    .post(function (req, res){//creating an new book
      var title = req.body.title;
      if(req.body.title){
        var newBook = new book({
          book_title: title
        })
        newBook.save()
        .then((result)=>{
          console.log(result.book_title);
          res.json({
            _id: result._id,
            title: result.book_title,
            comments: result.comments
          });
        })
        .catch((err)=>{
          console.error(err);
        })
      }else{
        res.send('missing title')
      }
      //response will contain new book object including atleast _id and title
    })
    
    .delete(function(req, res){// delete all books
      //if successful response will be 'complete delete successful'
      book.deleteMany()
      .then(()=>{
        res.send('complete delete successful');
      })
      .catch((err)=>{
        console.error(err);
      })
    });



  app.route('/api/books/:id')
    .get(function (req, res){//get a book detail
      var bookid = req.params.id;
      book.findById(req.params.id)
      .then((result)=>{
        if(!result){
          res.send('no book exists');
        }else{
        res.json({
          _id: result._id,
          title: result.book_title,
          comments: result.comments
        });
      }
      })
      .catch((err)=>{
        res.send('invalid book id')
        console.error(err)
      })
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
    })
    
    .post(function(req, res){//add a comment to a book
      var bookid = req.params.id;
      var newComment = req.body.comment;
      book.findById(req.params.id)
      .then((result)=>{
        result.comments.push(newComment);
        return result.save();
      })
      .then((result)=>{
        res.json({
          _id: result._id,
          title: result.book_title,
          comments: result.comments
        });
      })
      .catch((err)=>{
        console.error(err);
      })
      //json res format same as .get
    })
    
    .delete(function(req, res){//delete a book
      var bookid = req.params.id;
      book.findByIdAndDelete(bookid)
      .then((result)=>{
        res.send('delete successful');
      })
      .catch((err)=>{
        console.error(err);
      })
      //if successful response will be 'delete successful'
    });
  
};
