import * as React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface CopyInputQRCodeBoxProps {
    base64String: string | null;
}

const CopyInputQRCodeBox: React.FC<CopyInputQRCodeBoxProps> = ({ base64String }) => {
    const handleCopy = () => {
        if (base64String) {
            navigator.clipboard.writeText(base64String);
        }
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
                onClick={handleCopy}
                sx={{ backgroundColor: 'white', color: '#FF6600', borderRadius: 0, marginRight: 1 }}
            >
                <ContentCopyIcon />
            </IconButton>
            <TextField
                fullWidth
                value={base64String || ''}
                variant="outlined"
                InputProps={{
                    readOnly: true,
                    sx: { borderRadius: 0 }
                }}
            />
        </Box>
    );
};

export default CopyInputQRCodeBox;