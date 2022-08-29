import React from 'react';
import { Checkbox, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { ChangeEvent, useState } from 'react'

interface message {
    text: string
}

const MessageBox = (props: message) => {
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setShowMessage(event.target.checked);
    }

    return (
        <>
            <Stack justifyContent={"center"} alignItems={"center"} direction={"row"} spacing={2}>
                <Typography variant="h6" gutterBottom>
                    Show Message
                </Typography>
                <Checkbox
                    id='showMessageCheck'
                    checked={showMessage}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled'}}
                    data-testid={'checkbox-1234'} 
                />
            </Stack>
            {/* <Typography variant="h3" gutterBottom>
                {showMessage ? props.text : null}
            </Typography> */}
            {showMessage ? props.text : null}
        </>

    )

}

export default MessageBox;