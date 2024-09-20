import * as React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RechargeSaldoModal from '../rechargeSaldoModal/RechargeSaldoModal';

const RechargeButton: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                variant="contained"
                sx={{ backgroundColor: '#FF6600', borderRadius: 0, border: 'none' }}
                endIcon={<AddIcon />}
                onClick={handleOpen}
            >
                Recarregar
            </Button>
            <RechargeSaldoModal
                open={open}
                handleClose={handleClose}
            />
        </>
    );
};

export default RechargeButton;