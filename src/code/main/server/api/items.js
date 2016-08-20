var express = require('express');
var router = express.Router();
var Item = require('./schema/item');

/**
 * GET /items - Gets todo Item list. Optional query param of pageSize determines page size and pageNo
 * determines which page to retrieve.
 *
 * @query-param {string} pageSize Page size of response, defaults to 10
 * @query-param {string} pageNo Page number to return, defaults to 1
 * @return {array} returns object with following properties
 *  items {array} - todo items corresponding to pageNo and pageSize
 *  meta {object} - meta data about the items
 */
router.get('/', function(req, res, next) {
   res.send('returns array of todo items corresponding to pageNo and pageSize');
});

/**
 * POST /items - Creates a new Item object.
 *
 * @body {object} new todo list item object to be created
 * @return {object} returns object with following properties
 *  description {string} - success message or failure reason
 *  status {string} - 'SUCCEEDED' or 'FAILED'
 */
router.post('/', function(req, res, next) {
   var newItem = new Item(req.body);

   newItem.save(function (err) {
      var message; // {String}
      var status; // {String}

      if (err) {
         message = 'Failed to create Todo item.';
         status = 'FAIL';
         // try to set more specific error message
         if (err.name === 'MongoError') {
            if (err.code === 11000) {
               message = 'Todo List item already exists.'
            }
         } else if (err.name === 'ValidationError') {
            message = 'Validation error, make sure all the required fields are supplied.'
         }
      } else {
         message = 'Created a new Todo List item.';
         status = 'SUCCESS';
      }

      res.json({ status: status, message: message });
   });
});

/**
 * PUT /items/:id - Updates an Item object for the given id.
 *
 * @path-param {string} id of item to be updated
 * @return {object} returns object with following properties
 *  description {string} - success message or failure reason
 *  status {string} - 'SUCCEEDED' or 'FAILED'
 */
router.put('/:id', function(req, res, next) {
   Item.update({ _id: req.params.id }, req.body, null, function (err, raw) {
      var message; // {String}
      var status; // {String}

      if (err) {
         message = 'Failed to update the item.';
         status = 'FAIL';
      }  else {
         message = 'Successfully updated Todo List item.';
         status = 'SUCCESS';
      }

      res.json({ status: status, message: message });
   });
});

/**
 * DELETE /items/:id - Deletes an Item object for the given id.
 *
 * @path-param {string} id of item to be updated
 * @return {object} returns object with following properties
 *  description {string} - success message or failure reason
 *  status {string} - 'SUCCEEDED' or 'FAILED'
 */
router.delete('/:id', function(req, res, next) {
   Item.remove({ _id : req.params.id }, function(err, removed) {
      var message; // {String}
      var status; // {String}

      if (err) {
         message = 'Failed to delete the item.';
         status = 'FAIL';
      }  else {
         message = 'Successfully deleted Todo List item.';
         status = 'SUCCESS';
      }

      res.json({ status: status, message: message });
   });
});

module.exports = router;
