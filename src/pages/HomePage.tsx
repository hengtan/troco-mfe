// src/pages/HomePage.tsx
import * as React from 'react';
import { Box, Divider } from '@mui/material';
import Title from '../components/title/Title';
import BalanceCard from '../components/balancecard/BalanceCard';
import TransactionHistory from '../components/transactionHistory/TransactionHistory';
import TableExtratoLancamentos from '../components/tableExtratoLancamentos/TableExtratoLancamentos';

const HomePage = () => {
    return (
        <Box sx={{ mx: '10px', my: '20px' }}>
            <Title />
            <Divider />
            <Box sx={{ my: '20px' }}>
                <BalanceCard />
            </Box>
            <Box sx={{ my: '20px' }}>
                <TransactionHistory />
            </Box>
            <Box sx={{ my: '20px' }}>
                <TableExtratoLancamentos />
            </Box>
        </Box>
    );
};

export default HomePage;