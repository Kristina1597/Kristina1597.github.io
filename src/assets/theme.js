import { createTheme } from '@mui/material';

export let theme = createTheme({
    typography: {
        fontFamily: [
            'Bai Jamjuree'
        ].join(','),
        allVariants: {
            color: '#161513',
        },
    },
    palette: {
        colorForBackground: '#eceaea',
        main: '#161513',
        orange: '#E94D35'
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }

});

theme.typography.h2 = {
    fontWeight: '400',
    fontSize: {
        lg: '56px',
        md: '50px',
        sm: '38px',
        sx: '30px',
    },
    textTransform: 'uppercase',
    lineHeight: '1.7'
};

theme.typography.h3 = {
    fontWeight: '400',
    fontSize: {
        lg: '31px',
        md: '25px',
        sm: '22px',
        sx: '18px',
    },
    lineHeight: '1.5'
};

theme.typography.h4 = {
    fontWeight: '400',
    fontSize: {
        lg: '23px',
        md: '20px',
        sm: '16px',
        sx: '12px',
    },
    lineHeight: '1.5'
};

theme.typography.body1 = {
    fontWeight: '400',
    fontSize: {
        lg: '18px',
        md: '16px',
        sm: '14px',
        sx: '12px',
    },

};

theme.typography.body2 = {
    fontWeight: '400',
    fontSize: '12px',
};