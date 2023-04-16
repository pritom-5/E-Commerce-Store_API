function errorHandler(error, req, res, next) {
  const errorStatusCodeGotFromRes = res.statusCode;
  const { message: errorMessage, stack: errorStack } = error;

  res
    .status(400)
    .json({ message: errorMessage, status: errorStatusCodeGotFromRes });
}

module.exports = errorHandler;

// use of error:
// res.status(errorCode)
// throw new Error('message')
