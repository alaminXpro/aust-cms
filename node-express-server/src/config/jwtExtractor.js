const { ExtractJwt } = require('passport-jwt');

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['accessToken']; // Assuming the JWT is stored in a cookie named 'jwt'
  }
  return token;
};

const jwtExtractor = (req) => {
  let token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
  if (!token) {
    token = cookieExtractor(req);
  }
  return token;
};

module.exports = jwtExtractor;