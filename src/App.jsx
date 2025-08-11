import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import CreatePage from './pages/CreatePage';
import NewPage from './pages/NewPage';
import ProgressPage from './pages/ProgressPage';
import CompletedPage from './pages/CompletedPage';
import CancelPage from './pages/CancelPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import NotFoundPage from './pages/NotFoundPage';
import ForgetpassPage from './pages/ForgetpassPage';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/completed" element={<CompletedPage />} />
          <Route path="/cancel" element={<CancelPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/forget-pass" element={<ForgetpassPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
