var items = require('./api/items');

module.exports = function (app) {
   // api handlers

   // GET, POST, PUT and DELETE items
   app.use('/api/items', items);

   // error handlers

   // catch 404 and forward to error handler
   app.use(function(req, res, next) {
     var err = new Error('Not Found');
     err.status = 404;
     next(err);
   });

   // development error handler
   // will print stacktrace
   if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
         res.status(err.status || 500);
         // api requests respond with json
         if (req.path.startsWith('/api')) {
            res.json({ status: 'FAIL', message: err.message });
         } else {
            res.render('error', { message: err.message, error: err });
         }
      });
   }

   // production error handler
   // no stacktraces leaked to user
   app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      // api requests respond with json
      if (req.path.startsWith('/api')) {
         res.json({ status: 'FAIL', message: '' });
      } else {
         res.render('error', { message: err.message, error: {} });
      }
   });
}
