const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const config = require('./config');
const { tokenTypes } = require('./tokens');
const { User } = require('../models');
const jwtExtractor = require('./jwtExtractor');

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: jwtExtractor, // Use the custom extractor
};

const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== tokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    const user = await User.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

// Google Strategy
const googleStrategy = new GoogleStrategy({
  clientID: config.google.clientId,
  clientSecret: config.google.clientSecret,
  callbackURL: config.google.callbackUrl,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ email: profile.emails[0].value });
    if (!user) {
      user = await User.create({
        name: profile.displayName,
        email: profile.emails[0].value,
        password: Math.random().toString(36).slice(-10),
      });
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

module.exports = {
  jwtStrategy,
  googleStrategy,
};
