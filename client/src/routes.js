import CreateQuote from "./components/CreateQuote";
import Home from "./components/Home";
import Login from "./components/Login";
import OtherUserProfile from "./components/OtherUserProfile";
import Profile from "./components/Profile";
import Signup from "./components/SignUp";

export const routes = [
    { path: "/",element:<Home/> },
    { path: "/login",element:<Login/> },
    { path: "/signup",element:<Signup/> },
    { path: "/profile",element:<Profile/> },
    { path: "/create",element:<CreateQuote/> },
    { path: "/profile/:userid",element:<OtherUserProfile/> },
];
