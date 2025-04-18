import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import LoginPage from './pages/LoginPage';
import AppLayout from './components/Layout/AppLayout';
import Home from './pages/Dashboard/Home';
import Profile from './pages/Dashboard/Profile';
import Settings from './pages/Dashboard/Setting';
import NotFound from './pages/NotFound';
import { usePersistAuth } from './app/persistAuth';


import PrivateRoute from './routes/PrivateRoute.';
const AppRoutes = () => {
  usePersistAuth();
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<PrivateRoute>
      <AppLayout />
      </PrivateRoute>}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
};

export default App;