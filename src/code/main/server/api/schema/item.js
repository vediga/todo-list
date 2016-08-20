var mongoose = require('mongoose');

var itemSchema = {
   title: { type: String, required: true, unique: true },
   status: { type: Boolean, required: true }
};

module.exports = mongoose.model('Item', itemSchema);
