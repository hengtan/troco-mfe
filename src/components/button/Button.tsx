// src/components/CustomButton.jsx
import * as React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ children, ...props }) => {
    return (
        <Button variant="contained" color="primary" {...props}>
            {children}
        </Button>
    );
};

export default CustomButton;