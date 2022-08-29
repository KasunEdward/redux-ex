import { createSlice, createAsyncThunk, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

export interface counterState {
    value: number,
    status: string
}

const initialState: counterState = {
    value: 0,
    status: 'idle'
}

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount: Number) => {
        const response  = await fetchCount(amount);
        return response.data;

    }
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },


    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, (state)=>{
            state.status = 'loading';
        })
        .addCase(incrementAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value += action.payload;
        })


    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer