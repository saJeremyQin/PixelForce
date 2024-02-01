// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OnboardingPage from '../Pages/OnboardingPage';
import ExplorePage from '../Pages/ExplorePage';
import LoginPage from '../Pages/LoginPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<OnboardingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/explore" element={<ExplorePage />} />
    </Routes>
  );
};

export default AppRoutes;
