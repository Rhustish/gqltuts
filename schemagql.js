import gql from "graphql-tag"
const typeDefs = gql`
    type Query{
        users:[User]
        user(_id:ID!):User
        quotes:[Quote]
        iquote(by:ID!):[Quote]
    }

    type User{
        _id:ID
        firstName:String
        lastName:String
        email:String
        password:String
        quotes:[Quote]
    }

    type Quote{
        name:String
        by:ID
    }

    type Token{
        token:String
    }

    type Mutation{
        newUser(userNew:UserInput):User
        login(userCred:UserSignInput!):Token
        createQuote(name:String):Quote
    }

    input UserInput{
        firstName:String!
        lastName:String!
        email:String!
        password:String!
    }

    input UserSignInput{
        email:String!
        password:String!
    }

`
export default typeDefs;