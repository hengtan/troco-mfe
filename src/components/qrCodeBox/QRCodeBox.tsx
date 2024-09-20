import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';

interface QRCodeBoxProps {
    base64String: string | null;
}

const QRCodeBox: React.FC<QRCodeBoxProps> = ({ base64String }) => {
    return (
        <Box sx={{ width: '100%', height: '200px', backgroundColor: '', marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {
                    <QRCodeSVG value={base64String} size={200} />}
                <Typography id="qr-code-modal-description" variant="body1" component="p" sx={{ marginTop: 2 }}>
                    Aguardando pagamento...
                </Typography>
            </Box>
        </Box>
    );
};

export default QRCodeBox;