// src/components/ResponsiveLayout.tsx
import * as React from 'react';
import { ReactNode } from 'react';
import { Container, CssBaseline, Grid } from '@mui/material';
import Header from './Header';

interface ResponsiveLayoutProps {
    children: ReactNode;
}

const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({ children }) => {
    return (
        <>
            <CssBaseline />
            {/*<Header />*/}
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default ResponsiveLayout;