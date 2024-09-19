// src/components/balancecard/RechargeButton.tsx
import * as React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface RechargeButtonProps {
    onClick: () => void;
}

const RechargeButton: React.FC<RechargeButtonProps> = ({ onClick }) => {
    return (
        <Button
            variant="contained"
            sx={{ backgroundColor: '#FF6600', borderRadius: 0, border: 'none' }}
            endIcon={<AddIcon />}
            onClick={onClick}
        >
            Recarregar
        </Button>
    );
};

export default RechargeButton;