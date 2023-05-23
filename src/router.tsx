import { createBrowserRouter } from "react-router-dom"
import Sidebar from "./Pages/Sidebar/Sidebar"
import AddPosts from "./Pages/AddPosts/AddPosts";
import Users from "./Pages/Users/Users";
import AddUsers from "./Pages/AddUsers/AddUsers";
import Posts from "./Pages/Posts/Posts";
import Team from "./Pages/Team/Team";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Sidebar/>,
        children: [
           {
            path: "",
                element: <Users />
           }, {
                path: "/addposts",
                element: <AddPosts/>,
            }, {
                path: "/addusers",
                element: <AddUsers/>,
            }, {
                path: "/posts",
                element: <Posts />,
            }, {
                path: "/team",
                element: <Team />,
            }
        ]
    }
])