import React from 'react';
import { MainPage } from './Pages/MainPage';
import LanguageContextProvider from './Contexts/LanguageContext';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './assets/theme';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <LanguageContextProvider>
                <MainPage/>
            </LanguageContextProvider>
        </ThemeProvider>
    );
};