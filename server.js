import { ApolloServer,gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from './SchemaGQL.js'
import resolvers from './resolvers.js'


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