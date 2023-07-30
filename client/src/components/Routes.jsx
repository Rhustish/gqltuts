import Login from "./Login"
import CreateQuote from './CreateQuote'
import Profile from './Profile'
import Signup from './Signup'
import Home from "./Home"
const Routes =[
    {path:"/",element:<Home />},
    {path:"/create",element:<CreateQuote />},
    {path:"/profile",element:<Profile />},
    {path:"/signup",element:<Signup />},
    {path:"/login",element:<Login />},
]

export default Routes;