import {  gql } from "apollo-server";
const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User # api to find user by id type User
    quotes: [QuoteWithName]
    iquote(by: ID!): [Quote] #array of quotes
    myprofile:User
  }

  type QuoteWithName {
    name: String
    by: IdName
  }

  type IdName {
    _id: String
    fname: String
  }

  type User {
    _id: ID!
    fname: String!
    lname: String!
    email: String!
    password: String!
    quotes: [Quote] #user can have arrays of quote Reference Quote
  }

  type Quote {
    name: String!
    by: ID!
  }
  type Token {
    token: String!
  }
  type Mutation {
    signupUser(userNew: UserInput!): User #return User
    signinUser(userSignin: UserSigninInput!): Token #return token
    createQuote(name: String!): String #return string
  }

  input UserInput {
    fname: String!
    lname: String!
    email: String!
    password: String!
  }
  input UserSigninInput {
    email: String!
    password: String!
  }
`;

export default typeDefs;
