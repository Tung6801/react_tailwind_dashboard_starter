import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUserFromStorage } from '../features/auth/authSlice';

export const usePersistAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);
};