import * as React from 'react';
import { Box, Modal, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import QRCodeBox from '../qRCodeBox/QRCodeBox'; // Certifique-se de que o caminho está correto
import CopyInputQRCodeBox from '../copyInputQRCodeBox/CopyInputBox';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface QRCodeModalProps {
    open: boolean;
    handleClose: () => void;
    base64String: string | null;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ open, handleClose, base64String }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="qr-code-modal-title"
            aria-describedby="qr-code-modal-description"
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
                    width: 684,
                    height: 731,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <IconButton
                    onClick={handleClose}
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                    <CloseIcon />
                </IconButton>
                <Box sx={{ width: '100%', height: '50px', backgroundColor: '', marginTop: 5 }} >
                    <Typography id="qr-code-modal-title" variant="h2" component="h2">
                        Recarga de saldo
                    </Typography>
                    <Typography id="qr-code-modal-description" variant="body1" component="p">
                        Aqui você pode adicionar a lógica para exibir o QR code gerado.
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', height: '50px', backgroundColor: '', marginTop: 10 }}>
                    <QRCodeBox base64String={base64String} />
                </Box>
                <Box sx={{ width: '100%', height: '50px', backgroundColor: '', marginTop: 25 }}>
                    <Typography id="qr-code-modal-description" variant="body1" component="p">
                        Copia e cola
                    </Typography>
                    <CopyInputQRCodeBox base64String={base64String} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
                    <Button onClick={handleClose}>Fechar</Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default QRCodeModal;


// interface QRCodeModalProps {
//     open: boolean;
//     handleClose: () => void;
//     base64String: string | null; // Adicione esta prop
// }
//
// const QRCodeModal: React.FC<QRCodeModalProps> = ({ open, handleClose, base64String }) => {
//     return (
//         <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="qr-code-modal-title"
//             aria-describedby="qr-code-modal-description"
//             sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backdropFilter: 'opacity(70%)'
//             }}
//         >
//             <Box
//                 sx={{
//                     backgroundColor: 'white',
//                     padding: 2,
//                     borderRadius: 1,
//                     boxShadow: 24,
//                     width: 684,
//                     height: 731,
//                     position: 'relative',
//                     display: 'flex',
//                     flexDirection: 'column'
//                 }}
//             >
//                 <IconButton
//                     onClick={handleClose}
//                     sx={{ position: 'absolute', top: 8, right: 8 }}
//                 >
//                     <CloseIcon />
//                 </IconButton>
//                 <Box sx={{ width: '100%', height: '50px', backgroundColor: '', marginTop: 5 }} >
//                     <Typography id="qr-code-modal-title" variant="h2" component="h2">
//                         Recarga de saldo
//                     </Typography>
//                     <Typography id="qr-code-modal-description" variant="body1" component="p">
//                         Aqui você pode adicionar a lógica para exibir o QR code gerado.
//                     </Typography>
//                 </Box>
//                 <Box sx={{ width: '100%', height: '50px', backgroundColor: '', marginTop: 10 }}>
//                     <QRCodeBox base64String={base64String} />
//                 </Box>
//                 <Box sx={{ width: '100%', height: '50px', backgroundColor: 'blue', marginTop: 25 }}>
//                     <Typography id="qr-code-modal-description" variant="body1" component="p">
//                         Copia e cola
//                     </Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
//                     <Button onClick={handleClose}>Fechar</Button>
//                 </Box>
//             </Box>
//         </Modal>
//     );
// };
//
// export default QRCodeModal;

// import * as React from 'react';
// import { Box, Modal, Typography, IconButton, Button } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
//
// interface QRCodeModalProps {
//     open: boolean;
//     handleClose: () => void;
// }
//
// const QRCodeModal: React.FC<QRCodeModalProps> = ({ open, handleClose }) => {
//     return (
//         <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="qr-code-modal-title"
//             aria-describedby="qr-code-modal-description"
//             sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backdropFilter: 'opacity(70%)'
//             }}
//         >
//             <Box
//                 sx={{
//                     backgroundColor: 'white',
//                     padding: 2,
//                     borderRadius: 1,
//                     boxShadow: 24,
//                     width: 684,
//                     height: 731,
//                     position: 'relative',
//                     display: 'flex',
//                     flexDirection: 'column'
//                 }}
//             >
//                 <IconButton
//                     onClick={handleClose}
//                     sx={{ position: 'absolute', top: 8, right: 8 }}
//                 >
//                     <CloseIcon />
//                 </IconButton>
//                 <Box sx={{ width: '100%', height: '50px', backgroundColor: '', marginTop: 5 }} >
//                     <Typography id="qr-code-modal-title" variant="h2" component="h2">
//                         Recarga de saldo
//                     </Typography>
//                     <Typography id="qr-code-modal-description" variant="body1" component="p">
//                         Aqui você pode adicionar a lógica para exibir o QR code gerado.
//                     </Typography>
//                 </Box>
//                 <Box sx={{ width: '100%', height: '50px', backgroundColor: 'green', marginTop: 2 }}>
//                     <Typography id="qr-code-modal-description" variant="body1" component="p">
//                         Aguardando pagamento...
//                     </Typography>
//                 </Box>
//                 <Box sx={{ width: '100%', height: '50px', backgroundColor: 'blue', marginTop: 2 }}>
//                     <Typography id="qr-code-modal-description" variant="body1" component="p">
//                         Copia e cola
//                     </Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
//                     <Button onClick={handleClose}>Fechar</Button>
//                 </Box>
//             </Box>
//         </Modal>
//     );
// };
//
// export default QRCodeModal;
//
//
// // import * as React from 'react';
// // import { Box, Modal, Typography, IconButton } from '@mui/material';
// // import CloseIcon from '@mui/icons-material/Close';
// //
// // interface QRCodeModalProps {
// //     open: boolean;
// //     handleClose: () => void;
// // }
// //
// // const QRCodeModal: React.FC<QRCodeModalProps> = ({ open, handleClose }) => {
// //     return (
// //         <Modal
// //             open={open}
// //             onClose={handleClose}
// //             aria-labelledby="qr-code-modal-title"
// //             aria-describedby="qr-code-modal-description"
// //             sx={{
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 backdropFilter: 'opacity(70%)'
// //             }}
// //         >
// //             <Box
// //                 sx={{
// //                     backgroundColor: 'white',
// //                     padding: 2,
// //                     borderRadius: 1,
// //                     boxShadow: 24,
// //                     width: 684,
// //                     height: 731,
// //                     position: 'relative'
// //                 }}
// //             >
// //                 <IconButton
// //                     onClick={handleClose}
// //                     sx={{ position: 'absolute', top: 8, right: 8 }}
// //                 >
// //                     <CloseIcon />
// //                 </IconButton>
// //                 <Typography id="qr-code-modal-title" variant="h2" component="h2">
// //                     QR Code Gerado
// //                 </Typography>
// //                 <Typography id="qr-code-modal-description" variant="body1" component="p">
// //                     Aqui você pode adicionar a lógica para exibir o QR code gerado.
// //                 </Typography>
// //             </Box>
// //         </Modal>
// //     );
// // };
// //
// // export default QRCodeModal;