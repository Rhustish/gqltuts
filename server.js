import {ApolloServer} from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'
import resolvers from "./resolvers.js"
import typeDefs from "./schemagql.js"

const server = new ApolloServer({
    typeDefs,
    resolvers,
})
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`server at ${url}`);