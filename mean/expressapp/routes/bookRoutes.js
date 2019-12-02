const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var Book = require('../models/book.model');
// => localhost:3000/books/
router.get('/', (req, res) => {
    Book.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Books :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Book.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var book = {
            tenSach: req.body.tenSach,
            tacGia: req.body.tacGia,
            giaBan: req.body.giaBan,
        };
    Book.findByIdAndUpdate(req.params.id, { $set: book }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Book Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Book.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Book Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/',(req, res) => {
    var book = new Book({
        
        tenSach: req.body.tenSach,
        tacGia: req.body.tacGia,
        giaBan: req.body.giaBan,
    });
    book.save((err, doc) =>{
        if(!err) {res.send(doc); }
        else { console.log('Error in Book Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports=router