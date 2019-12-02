var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var schema = new Schema({
    tenSach : {type:String, require:true},
    tacGia: {type:String, require:true},
    giaBan:{type:String, require:true},
    imgSach: String
});

module.exports = mongoose.model('books',schema);

