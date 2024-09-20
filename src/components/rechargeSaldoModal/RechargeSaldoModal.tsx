import * as React from 'react';
import { Box, Button, Grid, IconButton, Modal, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LoadingModal from '../loadingModal/LoadingModal';
import QRCodeModal from '../qrCodeModal/QRCodeModal'; // Certifique-se de que o caminho está correto

interface RechargeSaldoModalProps {
    open: boolean;
    handleClose: () => void;
}

const RechargeSaldoModal: React.FC<RechargeSaldoModalProps> = ({ open, handleClose }) => {
    const [loadingOpen, setLoadingOpen] = React.useState(false);
    const [qrCodeModalOpen, setQRCodeModalOpen] = React.useState(false);
    const [base64String, setBase64String] = React.useState<string | null>(null);

    const handleGenerateQRCode = () => {
        setLoadingOpen(true);
        setTimeout(() => {
            setLoadingOpen(false);
            setBase64String('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...'); // Simulação de recebimento do backend
            setQRCodeModalOpen(true);
        }, 3000);
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'opacity(70%)'
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'white',
                        padding: 2,
                        borderRadius: 1,
                        boxShadow: 24,
                        maxWidth: 500,
                        width: '100%',
                        position: 'relative'
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12}>
                            <Box>
                                <Typography id="modal-title" variant="h2" component="h2">
                                    Recarregar de saldo
                                </Typography>
                                <Typography id="modal-subtitle" variant="h7" component="h7" sx={{ fontSize: '12px' }}>
                                    Preencha o valor da sua recarga e gere o QR code para recarregar o saldo da Conta Troco Digital.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ backgroundColor: '', padding: '0.7cm' }}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <TextField
                                            fullWidth
                                            label="Valor da Recarga"
                                            variant="outlined"
                                            placeholder="0,00"
                                            InputProps={{
                                                startAdornment: (
                                                    <Box component="span" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                                                        R$:
                                                    </Box>
                                                ),
                                                sx: { height: '40px', borderRadius: 0 }
                                            }}
                                            InputLabelProps={{ style: { fontSize: '12px', width: '100%' } }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            sx={{ backgroundColor: '#FF6600', borderRadius: 0, border: 'none', height: '40px' }}
                                            onClick={handleGenerateQRCode}
                                        >
                                            Gerar QR Code
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
            <LoadingModal open={loadingOpen} handleClose={() => setLoadingOpen(false)} />
            <QRCodeModal open={qrCodeModalOpen} handleClose={() => setQRCodeModalOpen(false)} base64String={base64String} />
        </>
    );
};

export default RechargeSaldoModal;

// import * as React from 'react';
// import { Box, Button, Grid, IconButton, Modal, TextField, Typography } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import LoadingModal from '../loadingModal/LoadingModal';
// import QRCodeModal from '../qrCodeModal/QRCodeModal'; // Certifique-se de que o caminho está correto
//
// interface RechargeSaldoModalProps {
//     open: boolean;
//     handleClose: () => void;
// }
//
// const RechargeSaldoModal: React.FC<RechargeSaldoModalProps> = ({ open, handleClose }) => {
//     const [loadingOpen, setLoadingOpen] = React.useState(false);
//     const [qrCodeModalOpen, setQRCodeModalOpen] = React.useState(false);
//
//     const handleGenerateQRCode = () => {
//         setLoadingOpen(true);
//         setTimeout(() => {
//             setLoadingOpen(false);
//             setQRCodeModalOpen(true);
//         }, 3000);
//     };
//
//     return (
//         <>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-title"
//                 aria-describedby="modal-description"
//                 sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     backdropFilter: 'opacity(70%)'
//                 }}
//             >
//                 <Box
//                     sx={{
//                         backgroundColor: 'white',
//                         padding: 2,
//                         borderRadius: 1,
//                         boxShadow: 24,
//                         maxWidth: 500,
//                         width: '100%',
//                         position: 'relative'
//                     }}
//                 >
//                     <IconButton
//                         onClick={handleClose}
//                         sx={{ position: 'absolute', top: 8, right: 8 }}
//                     >
//                         <CloseIcon />
//                     </IconButton>
//                     <Grid container spacing={2} sx={{ mt: 2 }}>
//                         <Grid item xs={12}>
//                             <Box>
//                                 <Typography id="modal-title" variant="h2" component="h2">
//                                     Recarregar de saldo
//                                 </Typography>
//                                 <Typography id="modal-subtitle" variant="h7" component="h7" sx={{ fontSize: '12px' }}>
//                                     Preencha o valor da sua recarga e gere o QR code para recarregar o saldo da Conta Troco Digital.
//                                 </Typography>
//                             </Box>
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Box sx={{ backgroundColor: '', padding: '0.7cm' }}>
//                                 <Grid container spacing={2} alignItems="center">
//                                     <Grid item>
//                                         <TextField
//                                             fullWidth
//                                             label="Valor da Recarga"
//                                             variant="outlined"
//                                             placeholder="0,00"
//                                             InputProps={{
//                                                 startAdornment: (
//                                                     <Box component="span" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
//                                                         R$:
//                                                     </Box>
//                                                 ),
//                                                 sx: { height: '40px', borderRadius: 0 }
//                                             }}
//                                             InputLabelProps={{ style: { fontSize: '12px', width: '100%' } }}
//                                         />
//                                     </Grid>
//                                     <Grid item>
//                                         <Button
//                                             fullWidth
//                                             variant="contained"
//                                             sx={{ backgroundColor: '#FF6600', borderRadius: 0, border: 'none', height: '40px' }}
//                                             onClick={handleGenerateQRCode}
//                                         >
//                                             Gerar QR Code
//                                         </Button>
//                                     </Grid>
//                                 </Grid>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Modal>
//             <LoadingModal open={loadingOpen} handleClose={() => setLoadingOpen(false)} />
//             <QRCodeModal open={qrCodeModalOpen} handleClose={() => setQRCodeModalOpen(false)} />
//         </>
//     );
// };
//
// export default RechargeSaldoModal;