import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login.page';
import SignupPage from '../pages/signup.page';

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default Navigation;
