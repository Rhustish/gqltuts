import jwt  from "jsonwebtoken";
import { jwts } from "./config.js";
export const context = ({ req }) => {
    if(req.method=="POST"){
    const { authorization } = req.headers
    if (authorization) {
      const { userID } = jwt.verify(authorization, jwts)
      return { userID }
    }} 
  }