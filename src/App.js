import React from 'react';
import { MainPage } from './Pages/MainPage';
import { ThemeProvider } from '@mui/material';
import { theme } from './assets/theme';

export const App = () => {
  return (
      <ThemeProvider theme={theme}>
          <MainPage/>
      </ThemeProvider>
  );
};