// src/App.tsx
import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import ResponsiveLayout from './components/ResponsiveLayout';
import HomePage from './pages/HomePage';
import theme from './theme';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <ResponsiveLayout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </ResponsiveLayout>
            </Router>
        </ThemeProvider>
    );
};

export default App;