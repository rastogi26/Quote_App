import { users, quotes } from "./fakeDB.js";
import {randomBytes} from "crypto"
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


const User = mongoose.model("User")
const Quote = mongoose.model("Quote")

const resolvers = {
  Query: {
    users: async () => await User.find({}),
    user: async (_, { _id }) => await User.findOne({ _id }), // first argument is parent but it is already a root so we use _ and second is _id
    quotes: async () => await Quote.find({}).populate("by", "_id fname"),
    iquote: async (_, { by }) => await Quote.find({ by }),
  },
  User: {
    quotes: async (ur) => await Quote.find({ by: ur._id }), //parent
  },
  Mutation: {
    signupUser: async (_, { userNew }) => {
      const user = await User.findOne({ email: userNew.email });
      //check if user already exist or not
      if (user) {
        throw new Error("User already exists with this email");
      }

      // bcrypt the password
      const hashedPassword = await bcrypt.hash(userNew.password, 10);

      const newUser = new User({
        ...userNew,
        password: hashedPassword,
      });

      return await newUser.save();
    },
    signinUser: async (_, { userSignin }) => {
      const user = await User.findOne({ email: userSignin.email });
      if (!user) {
        throw new Error("User does not exist with this email");
      }

      const isMatch = await bcrypt.compare(userSignin.password, user.password);
      if (!isMatch) {
        throw new Error("Email or Password is invalid.");
      }
      //generate token
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
      return { token };
    },
    createQuote: async (_, { name }, { userId }) => {
      if (!userId) {
        throw new Error("You must be logged in");
      }

      const newQuote = new Quote({
        name,
        by: userId,
      });

      await newQuote.save();
      return "Quote saved successfully";
    },
  },
};

export default resolvers;
