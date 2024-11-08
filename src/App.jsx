import BalancePage from "./Pages/balance";
import DashboardPage from "./Pages/dashboard";
import ErrorRoute from "./Pages/errorRoute";
import ForgotPassword from "./Pages/ForgotPassword";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import FormForgotPasswordResetConfirmation from "./Pages/PasswordResetConfirmation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GoalsPage from "./Pages/GoalsPage";



const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage/>,
      errorElement: <ErrorRoute/>,
    },
     
    {
      path: "/login",
      element: <SignInPage/>
    },
    {
      path: "/register",
      element: <SignUpPage/>
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword/>
    },
    {
      path: "/balance",
      element: <BalancePage/>
    },
    {
      path: "/logout",
      element: <SignInPage/>
    },
    {
      path: "/forgotpasswordconfirm",
      element: <FormForgotPasswordResetConfirmation/>
    },
    {
      path: "/goals",
      element: <GoalsPage/>
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;