import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ServiceDetails from "../pages/serviceDetails/ServiceDetails";
import Checkout from "../pages/Checkout/Checkout";
import AddNewService from "../pages/AddNewService/AddNewService";
import CartDetails from "../pages/CartDetails/CartDetails";
import ManageOrders from "../pages/ManageOrders/ManageOrders";
import ContactForm from "../pages/ContactForm/ContactForm";
import AboutPage from "../pages/About/AboutPage";
import Blog from "../pages/Blog/Blog";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import Appointments from "../pages/Appointments/Appointments";
import UserProfile from "../pages/UserProfile/UserProfile";
import Booking from "../pages/Booking/Booking";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BookedServices from "../pages/BookedServices/BookedServices";
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
        },
        {
          path:"/add-new-service",
          element:<AddNewService></AddNewService>
        },
        {
          path:"/cart-details",
          element:<CartDetails></CartDetails>
        },
        {
          path:"/manage-orders",
          element:<ManageOrders></ManageOrders>
        },
        {
          path:"/contact",
          element:<ContactForm></ContactForm>
        },
        {
          path:"/about",
          element:<AboutPage></AboutPage>
        },
        {
          path:"/blog",
          element:<Blog></Blog>
        },
        {
          path:"/terms-and-conditions",
          element:<TermsAndConditions></TermsAndConditions>
        },
        {
          path:"/appointments",
          element:<Appointments></Appointments>
        },
        {
          path:"/profile",
          element:<UserProfile></UserProfile>
        },
        {
          path:"/booking/:bookingId",
          element:<PrivateRoute><Booking></Booking></PrivateRoute>
        },
        {
          path:"/booked-services",
          element:<BookedServices></BookedServices>
        }
      ]
    },
  ]);

export default router;