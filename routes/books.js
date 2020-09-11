const express    = require('express');
const Book       = require('../Models/Book.model.js');

const router  = express.Router();

router.get('/' , (req ,res) => {
  Book.find({}).exec((err , books) => {
    if(err){
      console.log('error');
    }
    res.json(books);
  });
});

router.post('/' , (req ,res) => {
  const newBook = new Book();
  if(!req.body.title || !req.body.author ||!req.body.category) {
    console.log("POST :: all fields required");
    return res.redirect('/');
  }
  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.category = req.body.category;

  newBook.save((err , book) => {
    if(err) {
      console.log("Error while saving the book");
    }
    res.redirect('/');
  });
});

router.post('/mod' , (req ,res) => { //Should be PUT using AJAX or else here just for testing and simplicity
  const newBook = new Book();
  if(!req.body.targetTitle) {
    console.log("PUT :: all fields required");
    return res.redirect('/');
  }
  Book.findOneAndUpdate({ title: req.body.targetTitle } , { title: req.body.title }).then(() => {
    console.log("Updated");
  })
  res.redirect('/');
});

router.post('/del' , (req ,res) => { //Should be DELETE using AJAX or else
  const newBook = new Book();
  if(!req.body.title) {
    console.log("all fields required");
    return res.redirect('/');
  }
  Book.findOneAndDelete({ title: req.body.title }).then(() => {
    console.log("Deleted");
  })
  return res.redirect('/');
});

router.get('/:title' , (req ,res) => {
  Book.findOne({title : req.params.title}).exec((err , book) => {
    if(err){
      console.log('error');
    }
    res.json(book);
    console.log(req.body);
  });
});

module.exports = router;
