import mongoose from 'mongoose';
import User from '../models/User';
import { PassportStatic } from 'passport';
import { Profile, VerifyCallback } from 'passport-google-oauth20';

const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function(passport: PassportStatic) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
    console.log(profile);
  }));

  passport.serializeUser((user: any, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    User.findById(id, (err: any, user: Express.User) => {
      done(err, user)
    })
  })
}

