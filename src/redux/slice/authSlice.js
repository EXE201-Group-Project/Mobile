import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { config } from '../../config/config';

export const loginGoogle = createAction('loginGoogle');

export const signUp = createAsyncThunk('signupuser', async (body) => {
  const response = await fetch(config.BACKEND_ENDPOINT + '/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return await response.json();
});

export const login = createAsyncThunk('loginuser', async (body) => {
  const response = await fetch(config.BACKEND_ENDPOINT + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return await response.json();
});

const authSlice = createSlice({
  name: 'user',
  initialState: {
    msg: '',
    user: '',
    token: '',
    loading: false,
    error: '',
    email: '',
    googleUser: null,
    googleError: null
  },
  reducers: {
    addToken: (state, action) => {
      state.token = AsyncStorage.getItem('token');
    },
    addUser: (state, action) => {
      state.user = AsyncStorage.getItem('user');
    },
    addError: (state, action) => {
      state.error = AsyncStorage.getItem('error');
    },
    addEmail: (state, action) => {
      state.email = AsyncStorage.getItem('email');
    },
    logout: (state, action) => {
      state.token = null;
      state.user = null;
      state.error = null;
      state.email = null;
      AsyncStorage.clear();
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, { payload: { error, msg } }) => {
        state.loading = false;
        if (error) {
          state.error = error;
        } else {
          state.msg = msg;
        }
        console.log(state);
      })
      .addCase(signUp.rejected, (state) => {
        state.loading = true;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        login.fulfilled,
        (state, { payload: { error, msg, token, user, email } }) => {
          state.loading = false;
          if (error) {
            state.error = error;
          } else {
            state.msg = msg;
            state.token = token;
            state.user = user;
            state.email = email;

            if (msg) AsyncStorage.setItem('msg', msg);
            if (user) AsyncStorage.setItem('user', JSON.stringify(user));
            if (token) AsyncStorage.setItem('token', token);
            if (email) AsyncStorage.setItem('email', email);
            if (error) AsyncStorage.setItem('error', error);
          }
          // const navigate =useNavigate();
          // navigate("/home")
        }
      )
      .addCase(login.rejected, (state) => {
        state.loading = true;
      })
      .addCase(loginGoogle, (state, action) => {
        const { idToken, user } = action.payload;
        if (idToken && user) {
          state.token = idToken;
          state.email = user.email;
          state.user = user.name;
          state.googleUser = user;
        }
      });
  }
});

export const { addToken, addUser, logout, addEmail, addError } =
  authSlice.actions;
export default authSlice.reducer;
