
export const createTokenLocation = (location) => {
  var jwt = require('jsonwebtoken');
  return jwt.sign(location, 'locationToken');
}