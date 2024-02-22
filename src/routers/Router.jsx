import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/About/About";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import ProductDetails from "../Pages/CategoryDetails/ProductDetails";
import UpdateDetails from "../Pages/CategoryDetails/UpdateDetails";
import Cart from "../Pages/Cart/Cart";
import Contact from "../Pages/Contact/Contact";


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
      element: <Contact></Contact>
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
    {
      path:"/productDetails/:category",
      element: <CategoryDetails></CategoryDetails>
    },
    {
      path:"/singleProductDetails/:id",
      element: <ProductDetails></ProductDetails>
    },
    {
      path:"/updateProductDetails/:id",
      element: <PrivateRoute><UpdateDetails></UpdateDetails></PrivateRoute>
    },
    {
      path:"/cart",
      element: <PrivateRoute><Cart></Cart></PrivateRoute>
    },
   ]
  },
  ]);

export default router;