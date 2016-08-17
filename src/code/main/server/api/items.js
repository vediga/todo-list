var express = require('express');
var router = express.Router();

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
  res.send('Creates a new Item object.');
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
  res.send('Updates an Item object for the given id.');
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
  res.send('Deletes an Item object for the given id.');
});

module.exports = router;
