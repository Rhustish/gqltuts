import {ApolloServer} from "@apollo/server"
import gql from "graphql-tag"
import {ApolloServerPluginLandingPageLocalDefault} from "@apollo/server/plugin/landingPage/default"
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = gql`
    type Query{
        greet:String
    }
`

const resolvers = {
    Query:{
        greet:()=>"Hello World"
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageLocalDefault()
    ]
})
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`server at ${url}`);