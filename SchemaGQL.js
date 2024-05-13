import {  gql } from "apollo-server";
const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User # api to find user by id type User
    quotes: [Quote]
    iquote(by: ID!): [Quote] #array of quotes
  }

  type User {
    id: ID!
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

  type Mutation{
    signupUserDummy(userNew: UserInput!):User   #return User
  }

  input UserInput{
  fname:String!
  lname: String!
  email: String!
  password: String!
  }
`;

export default typeDefs;
