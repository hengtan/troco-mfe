import * as React from 'react';
import { Box, Modal, Typography } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import './style.css'; // Certifique-se de que o caminho está correto

interface LoadingModalProps {
    open: boolean;
    handleClose: () => void;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="loading-modal-title"
            aria-describedby="loading-modal-description"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 24,
                    width: 312,
                    height: 284,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <ComputerIcon sx={{ fontSize: 80, color: 'orange', marginBottom: 0 }} /> {/* Diminui a margem inferior */}
                <Typography id="loading-modal-description" variant="body1" component="p" className="loading-dots">
                    <span>.</span><span>.</span><span>.</span>
                </Typography>
            </Box>
        </Modal>
    );
};

export default LoadingModal;