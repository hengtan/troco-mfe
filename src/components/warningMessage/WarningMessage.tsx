// src/components/balancecard/WarningMessage.tsx
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

const WarningMessage: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#F6F6F6',
                margin: '3px',
                padding: 2,
                height: '10px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <WarningIcon sx={{ color: 'orange', marginRight: '5px', fontSize: '12px' }} />
            <Typography
                variant="h5"
                component="h2"
                sx={{ fontSize: '12px', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
            >
                Seu Saldo está abaixo do recomendado! Efetue uma recarga para garantir seus trocos ;)
            </Typography>
        </Box>
    );
};

export default WarningMessage;