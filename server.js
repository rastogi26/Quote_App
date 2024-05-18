import dotenv from "dotenv";
import { ApolloServer,gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from './SchemaGQL.js'
import mongoose from 'mongoose'
import  jwt from "jsonwebtoken";

dotenv.config({
  path: "./.env",
});

mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
})


mongoose.connection.on("connected",()=>{
  console.log("Connected to mongodb");
})

mongoose.connection.on("error", (err) => {
  console.log("Failed to connect to mongodb",err );
});

//import models here 
import "./models/user.js"
import "./models/quotes.js"

import resolvers from "./resolvers.js";

//middleware
const context = ({ req }) => {
  const { authorization } = req.headers;
  if (authorization) {
    const { userId } = jwt.verify(authorization, process.env.SECRET_KEY);
    return { userId: userId };
  }
};


const server =  new ApolloServer({
    typeDefs,  //typeDefs: typeDefs
    resolvers,
    context,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({url})=>{
   console.log(`Server is ready at ${url}`);
})