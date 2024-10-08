// src/components/transactionHistory/TransactionHistory.tsx
import * as React from 'react';
import {
    Box,
    Grid,
    Typography,
    MenuItem,
    Button,
    FormControl,
    TextField,
    Select,
    InputBase,
    Card, CardContent, Tooltip, IconButton, Menu, CircularProgress, Autocomplete, Snackbar, Alert, InputLabel
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import GetAppIcon from '@mui/icons-material/GetApp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { styled } from '@mui/material/styles';
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const CustomInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none',
        },
    },
}));

interface TransactionHistoryProps {
    containerWidth?: number;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ containerWidth }) => {
    const cnpjOptions = [
        "12.345.678/0001-90",
        "98.765.432/0001-10",
        "11.222.333/0001-44",
        "55.666.777/0001-88",
        "99.888.777/0001-66"
    ];

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [loading, setLoading] = React.useState(false);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const [snackbarSeverity, setSnackbarSeverity] = React.useState<'success' | 'error'>('success');

    const handleExportClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (format: string) => {
        setLoading(true);
        setAnchorEl(null);
        // Simulate a loading delay
        setTimeout(() => {
            setLoading(false);
            setSnackbarMessage(`Exported as ${format}`);
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
        }, 2000);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box sx={{ backgroundColor: '', marginTop: '0.5cm' }}>
            <Typography variant="h5" component="h2">
                Extrato de Lançamentos
            </Typography>
            <Grid container spacing={0} alignItems="center" sx={{ marginTop: '0.7cm' }}>
                <Grid item xs={12} sx={{ marginBottom: '0.7cm' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 2, flexGrow: 1 }}>
                            <FormControl variant="outlined" sx={{ minWidth: { xs: '100%', sm: 300 }, backgroundColor: 'white', flexGrow: 1 }}>
                                <Autocomplete
                                    options={cnpjOptions}
                                    renderInput={(params) => (
                                        <CustomTextField
                                            {...params}
                                            label="CNPJ"
                                        />
                                    )}
                                    freeSolo
                                />
                            </FormControl>
                            <FormControl variant="outlined" sx={{ minWidth: { xs: '100%', sm: 150 }, backgroundColor: 'white', flexGrow: 1 }}>
                                <InputLabel>Data do troco</InputLabel>
                                <Select
                                    label="Escolha de Dias"
                                    IconComponent={ArrowDropDownIcon}
                                    input={<CustomInput />}
                                >
                                    <MenuItem value={1}>1 dia</MenuItem>
                                    <MenuItem value={5}>5 dias</MenuItem>
                                    <MenuItem value={7}>7 dias</MenuItem>
                                    <MenuItem value={15}>15 dias</MenuItem>
                                    <MenuItem value={30}>30 dias</MenuItem>
                                    <MenuItem value="custom">Personalizado</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" sx={{ minWidth: { xs: '100%', sm: 200 }, backgroundColor: 'white', flexGrow: 1 }}>
                                <InputLabel>Tipo de Lançamentos</InputLabel>
                                <Select
                                    label="Tipo de Lançamentos"
                                    IconComponent={ArrowDropDownIcon}
                                    input={<CustomInput />}
                                >
                                    <MenuItem value="troco">Troco Digital</MenuItem>
                                    <MenuItem value="reembolso">Reembolso</MenuItem>
                                    <MenuItem value="estorno">Estorno</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 2, marginLeft: 'auto' }}>
                            <Button
                                variant="contained"
                                endIcon={<FilterListIcon />}
                                sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', borderRadius: 0, minWidth: { xs: '100%', sm: 120 }, height: 56, borderColor: 'white' }}
                            >
                                Filtro
                            </Button>
                            <Button
                                variant="contained"
                                endIcon={loading ? <CircularProgress size={24} /> : <GetAppIcon />}
                                sx={{ backgroundColor: '#FF6600', color: 'white', boxShadow: 'none', borderRadius: 0, minWidth: { xs: '100%', sm: 120 }, height: 56, borderColor: 'white' }}
                                onClick={handleExportClick}
                            >
                                {loading ? 'Exportando...' : 'Exportar'}
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={() => handleMenuItemClick('Excel')} sx={{ minWidth: 125 }}>Excel</MenuItem>
                                <MenuItem onClick={() => handleMenuItemClick('CSV')} sx={{ minWidth: 125 }}>CSV</MenuItem>
                                <MenuItem onClick={() => handleMenuItemClick('PDF')} sx={{ minWidth: 125 }}>PDF</MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', gap: 3, height: '130px' }}>
                        <Card sx={{ flex: 1 }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h6">Total de trocos digital</Typography>
                                    <Tooltip title="COLOCAR UMA MENSAGEM!">
                                        <IconButton>
                                            <HelpOutlineIcon sx={{ fontSize: '14px' }} />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Typography variant="h4">R$ 10.000.000,00</Typography>
                                <Typography variant="body2">600,03 trocos no período</Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ flex: 1 }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h6">Total de trocos digital</Typography>
                                    <Tooltip title="COLOCAR UMA MENSAGEM!">
                                        <IconButton>
                                            <HelpOutlineIcon sx={{ fontSize: '14px' }} />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Typography variant="h4">R$ 10.000.000,00</Typography>
                                <Typography variant="body2">600,03 trocos no período</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                sx={{ width: containerWidth ? `${containerWidth - 20}px` : 'calc(100% - 32px)', maxWidth: '1200px', margin: '0 auto' }}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={snackbarSeverity}
                    sx={{
                        width: '100%',
                        backgroundColor: snackbarSeverity === 'success' ? 'darkgreen' : 'darkred',
                        color: 'white'
                    }}
                    icon={snackbarSeverity === 'success' ? <CheckCircleIcon sx={{ color: 'white' }} fontSize="inherit" /> : <ErrorIcon sx={{ color: 'white' }} fontSize="inherit" />}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default TransactionHistory;