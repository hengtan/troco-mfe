import React from 'react';
import {Box, Button, Modal, Typography, Icon, IconButton} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from "@mui/icons-material/Close";

const ModalOpsErro: React.FC<{ open: boolean; handleClose: () => void }> = ({ open, handleClose }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    backgroundColor: 'white', // Fundo branco
                    width: 366, // Largura de 366px
                    height: 350, // Altura de 340px
                    padding: 5, // Espaçamento interno
                    borderRadius: 1, // Borda arredondada
                    boxShadow: 24, // Sombra para destaque
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)', // Centraliza o modal
                }}
            >
                <Typography sx={{ mt: 2, display: 'flex', alignItems: 'center'}}>
                    <Box
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            mr: 1
                        }}
                    >
                        <ErrorOutlineIcon sx={{ color: '#FF6600', fontSize: 50 }} />
                    </Box>
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: 'absolute', top: 35, right: 30 }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Typography>
                <Box sx={{ backgroundColor: '', height: 50, mt: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Ops, algo deu errado!
                    </Typography>
                </Box>
                <Box sx={{ backgroundColor: '', height: 50, mt: 0 }}>
                    <Typography variant="body1" sx={{fontSize: '12px'}}>
                        Não foi possível gerar o QR code da recarda nesse momento.
                        <br/><br/>
                        Tente novamente em alguns minutos.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        backgroundColor: '',
                        height: 50,
                        mt: 7,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}
                >
                    <Button
                        onClick={handleClose}
                        sx={{
                            backgroundColor: '#FF6600',
                            color: 'white',
                            border: 'none',
                            fontSize: '16px',
                            borderRadius: 0,
                            textTransform: 'none'
                        }}
                    >
                        Fechar
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default ModalOpsErro;