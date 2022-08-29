import React from "react";
import { AppDispatch, RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementAsync } from "./counterSlice";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Backdrop } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { stat } from "fs";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const status = useSelector((state: RootState) => state.counter.status);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="App">
            {status === 'loading' && (
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
            <Button variant="contained" onClick={() => dispatch(increment())}>Increment</Button>
            <Button variant="contained" onClick={() => dispatch(incrementAsync(5))}>Increment Async</Button>
            <Button variant="outlined" onClick={() => dispatch(decrement())}>Increment</Button>
            <Typography variant="h1" gutterBottom>
                {count}
            </Typography>
        </div>
    );
}

export default Counter;
