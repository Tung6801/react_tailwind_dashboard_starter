import React, { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;