import * as React from 'react';
import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
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
            <TextField
                fullWidth
                // value={base64String || ''}
                value={'U29tZSBleGFtcGxlIHRleHQgdG8gYmUgZW5jb2RlZCBpbiBiYXNlNjQ='}
                variant="outlined"
                InputProps={{
                    readOnly: true,
                    sx: {
                        borderRadius: 2,
                        fontSize: '12px',
                        overflow: 'auto',
                        whiteSpace: 'nowrap'
                    }, // Borda arredondada, tamanho do texto, e scroll horizontal
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton
                                onClick={handleCopy}
                                sx={{ backgroundColor: 'white', color: '#FF6600' }} // Borda arredondada no IconButton
                            >
                                <ContentCopyIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </Box>
    );
};

export default CopyInputQRCodeBox;