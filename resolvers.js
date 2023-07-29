import {quotes,users} from "./demodb.js"
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import  {jwts}  from "./config.js";

const User = mongoose.model("User")
const Quote = mongoose.model("Quote")

const resolvers = {
    Query:{
        users:async()=>await User.find({}),
        quotes:async()=>await Quote.find({}),
        user:async(_,{_id})=>await User.findById(_id),
        iquote:async(_,{by})=>await Quote.find({by})

    },
    User:{
        quotes:(ur)=>quotes.filter(q=>q.by == ur._id)
    },
    Mutation:{
        newUser:async (_,{userNew})=>{
            const user = await User.findOne({email:userNew.email})
            if(user) throw new Error("already exists")
            const pwd = await bcrypt.hash(userNew.password,12)
            const createdUser = new User({
                ...userNew,
                password:pwd
            })

            return await createdUser.save();
        },
        login: async (_,{userCred})=>{
            const user = await User.findOne({email:userCred.email})
            if (!user) throw new Error("doesn't exitst")
            const matchOK = await bcrypt.compare(userCred.password,user.password)
            if(!matchOK) throw new Error("cred no")
            
            const token = jwt.sign({userID:user._id},jwts)
            return {token}

        },
        createQuote: async(_,{name},{userID})=>{
            if(!userID) throw new Error("3-2")
            const nq = await new Quote({
                name,
                by:userID
            })
            return await nq.save()
        }   
    }
}

export default resolvers;