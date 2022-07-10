module.exports = (err, req, res, next) => {
  //Prepare error
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  //In Development, send all details
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};
