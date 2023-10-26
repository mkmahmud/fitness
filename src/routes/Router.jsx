import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/Signup/SignUp";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Schedule from "../pages/Schedule/Schedule";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AdminHome from "../pages/Dashboard/Admin/Home/Home";
import Members from "../pages/Dashboard/Admin/Members/Members";
import Trainers from "../pages/Dashboard/Admin/Trainers/Trainers";
import MealPlan from "../pages/Dashboard/Admin/MealPlan/MealPlan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <Home></Home>
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <About></About>{" "}
          </>
        ),
      },
      {
        path: "/services",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <Services></Services>{" "}
          </>
        ),
      },
      {
        path: "/schedule",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <Schedule></Schedule>{" "}
          </>
        ),
      },
      {
        path: "/gallery",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <Gallery></Gallery>{" "}
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <Contact></Contact>{" "}
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <Login></Login>{" "}
          </>
        ),
      },
      {
        path: "/signup",
        element: (
          <>
            {" "}
            <ScrollToTop></ScrollToTop> <SignUp></SignUp>{" "}
          </>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <div className="min-w-[400px] bg-blue text-white mx-auto">
            Dashboard Home
          </div>
        ),
      },
      {
        path: "/dashboard/admin",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/dashboard/admin/members",
        element: <Members></Members>,
      },
      {
        path: "/dashboard/admin/trainers",
        element: <Trainers></Trainers>,
      },
      {
        path: "/dashboard/admin/meal-plan",
        element: <MealPlan></MealPlan>,
      },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default router;
