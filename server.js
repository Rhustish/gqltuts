import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from "./schemagql.js"
import mongoose from "mongoose"
import { mongourl } from "./config.js"
import { context } from "./context.js"


mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: "admin"
}).then(console.log("Hello"))

import "./models/quotes.js"
import "./models/user.js"
import resolvers from "./resolvers.js"

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection:true
})

const { url } = await startStandaloneServer(server, {
  context,
  introspection:true,
  listen: { port: 4000 },
});

console.log(`server at ${url}`);