import React from "react";
import { useEffect, useState } from "react";

const Clock = () => {
    const [seconds, setSeconds] = useState(Date.now() / 1000);

    const tick = () => {
        setSeconds(Date.now() / 1000);
    }

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return () => clearInterval(timerID);

    }, [])

    return (
        <p>{seconds} seconds have elapsed since the UNIX epoch. </p>
    )
}

export default Clock;