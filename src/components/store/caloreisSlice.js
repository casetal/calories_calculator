import { createSlice } from '@reduxjs/toolkit';

export const caloriesSlice = createSlice({
    name: 'calories',
    initialState: {
        value: 0.0
    },
    reducers: {
        increment: (state, action) => {
            const newValue = action.payload;

            if(!isNaN(newValue))
                state.value += action.payload;
        },
        clear: state => {
            state.value = 0;
        }
    }
})

export const { increment, clear } = caloriesSlice.actions;

export default caloriesSlice.reducer;