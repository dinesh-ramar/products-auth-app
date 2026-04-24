import { createSlice } from '@reduxjs/toolkit';

const getSavedUser = () => {
    try {
        const saved = localStorage.getItem('authUser');
        return saved ? JSON.parse(saved) : null;
    } catch {
        return null;
    }
};

const initialState = {
    username: getSavedUser()?.username || ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.username = action.payload.username;
            try {
                localStorage.setItem('authUser', JSON.stringify({ username: state.username }));
            } catch {
                // ignore storage errors
            }
        },
        clearUser(state) {
            state.username = '';
            try {
                localStorage.removeItem('authUser');
            } catch {
                // ignore storage errors
            }
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
