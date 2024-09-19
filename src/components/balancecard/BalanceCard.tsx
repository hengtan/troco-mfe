import * as React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import WarningIcon from '@mui/icons-material/Warning';

const BalanceCard: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 1 }}>
            <Grid container spacing={1} direction="column">
                <Grid item xs={8}>
                    <Box sx={{ backgroundColor: 'white', margin: '3px', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            <Typography variant="h5" component="h2">
                                Saldo
                            </Typography>
                            <Typography variant="h5" component="h2">
                                R$ 100,00
                            </Typography>
                        </Box>
                        <Button variant="contained" sx={{ backgroundColor: '#FF6600', borderRadius: 0, border: 'none' }} endIcon={<AddIcon />}>
                            Recarregar
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ backgroundColor: '#F6F6F6', margin: '3px', padding: 2, height: '10px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                        <WarningIcon sx={{ color: 'orange', marginRight: '5px', fontSize: '12px' }} />
                        <Typography variant="h5" component="h2" sx={{ fontSize: '12px', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                            Seu Saldo está abaixo do recomendado! Efetue uma recarga para garantir seus trocos ;)
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BalanceCard;