import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ServiceDetails from "../pages/serviceDetails/ServiceDetails";
import Checkout from "../pages/Checkout/Checkout";
const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<Signup></Signup>
        },
        {
          path:"service-details/:servcieDetailsId",
          element:<ServiceDetails></ServiceDetails>
        },
        {
          path:"/checkout",
          element:<Checkout></Checkout>
        }
      ]
    },
  ]);

export default router;