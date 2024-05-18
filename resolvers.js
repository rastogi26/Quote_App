import { users, quotes } from "./fakeDB.js";
import {randomBytes} from "crypto"
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


const User = mongoose.model("User")

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { _id }) => users.find((user) => user._id == _id), // first argument is parent but it is already a root so we use _ and second is _id
    quotes: () => quotes,
    iquote: (_, { by }) => quotes.filter((quote) => quote.by == by),
  },
  User: {
    quotes: (ur) => quotes.filter((quote) => quote.by == ur._id), //parent
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
      const user = await User.findOne({email:userSignin.email})
      if(!user)
        {
          throw new Error("User does not exist with this email")
        }

        const isMatch = await bcrypt.compare(userSignin.password,user.password)
        if (!isMatch) {
          throw new Error("Email or Password is invalid.")
        }
        //generate token
        const token= jwt.sign({userId:user._id},process.env.SECRET_KEY)
        return {token}
    },
  },
};

export default resolvers;
