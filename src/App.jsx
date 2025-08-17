import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Dashboard from "./pages/DashboardPage";
import CreateTask from "./pages/CreatePage";
import NewTasks from "./pages/NewPage";
import ProgressTasks from "./pages/ProgressPage";
import CompletedTasks from "./pages/CompletedPage";
import CancelledTasks from "./pages/CancelPage";
import UserProfile from "./pages/ProfilePage";
import UserLogin from "./pages/LoginPage";
import UserRegistration from "./pages/RegistrationPage";
import NotFound from "./pages/NotFoundPage";
import ForgotPassword from "./pages/ForgetpassPage";

import sessionHelper from "./helper/SessionHelper"; 

const App = () => {
  const token = sessionHelper.getToken(); 
  return (
    <Fragment>
      <Router>
        <Routes>
          {token ? (
            <>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create" element={<CreateTask />} />
              <Route path="/new" element={<NewTasks />} />
              <Route path="/progress" element={<ProgressTasks />} />
              <Route path="/completed" element={<CompletedTasks />} />
              <Route path="/cancel" element={<CancelledTasks />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<UserLogin />} />
              <Route path="/register" element={<UserRegistration />} />
              <Route path="/forget-pass" element={<ForgotPassword />} />
              <Route path="*" element={<NotFound />} />
            </>
          )}
        </Routes>

        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              borderRadius: "8px",
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </Router>
    </Fragment>
  );
};

export default App;
