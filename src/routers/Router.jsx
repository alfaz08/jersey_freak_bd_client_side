import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/About/About";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
   path: "/",
   element: <MainLayout></MainLayout>,
   errorElement: <ErrorPage></ErrorPage>,
   children:[
    {
      path:"/",
      element: <Home></Home>
    },
    {
      path:"/contact",
      element: <Home></Home>
    },
    {
      path:"/about",
      element: <About></About>
    },
    {
      path:"/login",
      element: <Login></Login>
    },
    {
      path:"/signUp",
      element: <SignUp></SignUp>
    },
    {
      path:"/addProduct",
      element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
    },
   ]
  },
  ]);

export default router;