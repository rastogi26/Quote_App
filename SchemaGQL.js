import {  gql } from "apollo-server";
const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User # api to find user by id type User
    quotes: [Quote]
    iquote(by: ID!): [Quote] #array of quotes
  }

  type User {
    _id: ID!
    fname: String
    lname: String
    email: String
    password: String
    quotes: [Quote] #user can have arrays of quote Reference Quote
  }

  type Quote {
    content: String
    by: ID
  }
  type Token{
    token:String
  }
  type Mutation{
    signupUser(userNew: UserInput!):User   #return User
    signinUser(userSignin:UserSigninInput!):Token #return token
  }

  input UserInput{
  fname:String!
  lname: String!
  email: String!
  password: String!
  }
  input UserSigninInput{
  email: String!
  password: String!
  }
`;

export default typeDefs;
