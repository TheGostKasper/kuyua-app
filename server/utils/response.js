const sendSuccessResponse = (res, data, statusCode = 200) => {
    res.status(statusCode).json(data);
  };
  
  const sendErrorResponse = (res, errorMessage, statusCode = 500) => {
    res.status(statusCode).json({ error: errorMessage });
  };
  
  module.exports = {
    sendSuccessResponse,
    sendErrorResponse,
  };
  