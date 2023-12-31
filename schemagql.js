import gql from "graphql-tag"
const typeDefs = gql`
    type Query{
        users:[User]
        user(_id:ID!):User
        quotes:[QuoteName]
        iquote(by:ID!):[Quote]
    }

    type QuoteName{
        name:String
        by:PersonalQ
    }

    type PersonalQ{
        _id:ID
        firstName:String
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