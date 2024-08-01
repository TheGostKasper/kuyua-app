const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 300 });

const cacheMiddleware = (req, res, next) => {
  const cacheKey = req.originalUrl;
  if (cache.has(cacheKey)) {
    return res.json(cache.get(cacheKey));
  }
  res.sendResponse = res.json;
  res.json = (body) => {
    cache.set(cacheKey, body);
    res.sendResponse(body);
  };
  next();
};

module.exports = cacheMiddleware;
