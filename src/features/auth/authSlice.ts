import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    id: number;
    username: string;
    email: string;
  } | null;

}

const AuthState = {
  user: null,

};
const loadAuthState = (): AuthState => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('auth');
    return saved ? JSON.parse(saved) : { user: null };
  }
  return { user: null };
};

const initialState: AuthState = loadAuthState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{id: number; username: string; email: string }>) {
      state.user = action.payload;
      localStorage.setItem('auth', JSON.stringify(state));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('auth');
    },
    loadUserFromStorage(state) {
      const saved = localStorage.getItem('auth');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.user) {
          state.user = parsed.user;
        }
      }
    }
  },
});

export const { loginSuccess, logout,loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;