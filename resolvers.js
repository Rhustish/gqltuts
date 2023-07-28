import {quotes,users} from "./demodb.js"
import {randomBytes} from "crypto"
const resolvers = {
    Query:{
        users:()=>users,
        quotes:()=>quotes,
        user:(_,{id})=>users.find(user=>user.id == id),
        iquote:(_,{by})=>quotes.filter(quote=>quote.by == by)

    },
    User:{
        quotes:(ur)=>quotes.filter(q=>q.by == ur.id)
    },
    Mutation:{
        createUserDummy:(_,{userNew})=>{
            const id = randomBytes(5).toString("hex")
            users.push({
                id,
                ...userNew
            })
            return users.find(user=>user.id == id);
        }
    }
}

export default resolvers;