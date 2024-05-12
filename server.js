import { ApolloServer,gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import {users,quotes} from "./fakeDB.js"

const typeDefs = gql`

type Query{
    users: [User]
    user(id:ID!): User   # api to find user by id type User
    quotes: [Quote]
    iquote(by:ID!): [Quote] #array of quotes
}

type User{
    id:ID!
    fname: String
    lname:String
    email:String
    password: String
    quotes: [Quote]    #user can have arrays of quote Reference Quote
}

type Quote{
    content: String
    by:ID
}


`

const resolvers = {
    Query:{
        users:()=>users,
        user:(_,{id})=>users.find(user=>user.id==id),                // first argument is parent but it is already a root so we use _ and second is id
        quotes:()=>quotes,
        iquote:(_,{by})=>quotes.filter(quote=>quote.by==by)
    },
    User:{
        quotes:(ur)=>quotes.filter(quote=>quote.by==ur.id)   //parent 
    }
}


const server =  new ApolloServer({
    typeDefs,  //typeDefs: typeDefs
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({url})=>{
   console.log(`Server is ready at ${url}`);
})