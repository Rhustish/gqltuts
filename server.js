import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'
import  jwt  from "jsonwebtoken"
import { jwts } from "./config.js"
import typeDefs from "./schemagql.js"
import mongoose from "mongoose"
import { mongourl } from "./config.js"


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
  context: ({ req }) => {
    if(req.method=="POST"){
    console.log("Ping");
    const { authorization } = req.headers
    if (authorization) {
      const { userID } = jwt.verify(authorization, jwts)
      console.log(`userID`);
      return { userID }
    }}
  },
  introspection:true,
  listen: { port: 4000 },
});

console.log(`server at ${url}`);