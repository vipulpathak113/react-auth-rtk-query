import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazily } from "react-lazily";
const { Home } = lazily(() => import('./pages/Home/Home'));
const { SendEmail } = lazily(() => import('./pages/SendEmail/SendEmail'));
const { EmailVerify } = lazily(() => import('./pages/EmailVerify/EmailVerify'));
const { Signin } = lazily(() => import('./pages/Signin/Signin'));
const { Signup } = lazily(() => import('./pages/Signup/Signup'));
const {ChangePassword} = lazily(() => import('./pages/ChangePassword/ChangePassword'))
const {ForgotPassword} = lazily(() => import('./pages/ForgotPassword/ForgotPassword'))
const {Error404} = lazily(() => import('./pages/Error404/Error404'))

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/send-verify-mail" element={<SendEmail />} />
          <Route path="/email-verify/:token" element={<EmailVerify />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/forgot-password-verify/:token"
            element={<ChangePassword />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
