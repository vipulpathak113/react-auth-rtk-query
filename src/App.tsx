import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { lazy } from "react";
const Home = lazy(() => import("./pages/Home/Home"));
const SendEmail = lazy(() => import("./pages/SendEmail/SendEmail"));
const EmailVerify = lazy(() => import("./pages/EmailVerify/EmailVerify"));
const Signin = lazy(() => import("./pages/Signin/Signin"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const ChangePassword = lazy(
  () => import("./pages/ChangePassword/ChangePassword")
);
const ForgotPassword = lazy(
  () => import("./pages/ForgotPassword/ForgotPassword")
);
const Error404 = lazy(() => import("./pages/Error404/Error404"));

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              token ? (
                <React.Suspense fallback={<>Loading...</>}>
                  <Home />
                </React.Suspense>
              ) : (
                <Navigate to="/signin" />
              )
            }
          />

          <Route
            path="/send-verify-mail"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <SendEmail />
              </React.Suspense>
            }
          />
          <Route
            path="/email-verify/:token"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <EmailVerify />
              </React.Suspense>
            }
          />

          <Route
            path="/signin"
            element={
              !token ? (
                <React.Suspense fallback={<>Loading...</>}>
                  <Signin />{" "}
                </React.Suspense>
              ) : (
                <React.Suspense>
                  <Navigate to="/" />
                </React.Suspense>
              )
            }
          />

          <Route
            path="/signup"
            element={
              !token ? (
                <React.Suspense fallback={<>Loading...</>}>
                  <Signup />
                </React.Suspense>
              ) : (
                <React.Suspense fallback={<>Loading...</>}>
                  <Navigate to="/" />
                </React.Suspense>
              )
            }
          />

          <Route
            path="/forgot-password-verify/:token"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <ChangePassword />
              </React.Suspense>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <ForgotPassword />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<>Loading...</>}>
                <Error404 />
              </React.Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
