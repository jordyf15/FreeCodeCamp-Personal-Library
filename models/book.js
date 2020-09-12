const mongoose=require('mongoose');
const Schema = mongoose.Schema;
var bookSchema= new Schema({
    book_title: String,
    comments: [String]
});
module.exports=mongoose.model('book', bookSchema);