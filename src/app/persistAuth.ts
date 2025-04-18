import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess,logout } from '../features/auth/authSlice';

export const usePersistAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authData = localStorage.getItem('auth');
    if (authData) {
      try {
        const parsed = JSON.parse(authData);
        if (parsed.user) {
          dispatch(loginSuccess(parsed.user));
        } else {
          localStorage.removeItem('auth');
          dispatch(logout());
        }
      } catch {
        localStorage.removeItem('auth');
        dispatch(logout());
      }
    } else {
      dispatch(logout());
    }
  }, [dispatch]);
};