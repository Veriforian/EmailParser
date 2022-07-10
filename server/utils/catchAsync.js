//Wraps async function, catches error and sends it to error handler
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
