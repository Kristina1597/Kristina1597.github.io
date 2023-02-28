import { createTheme } from '@mui/material';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

export let theme = createTheme({
    typography: {
        fontFamily: [
            'BaiJamjuree',
        ].join(','),
        allVariants: {
            fontFamily: 'Bai Jamjuree',
            color: '#161513',
        },
    },
    palette: {
        colorForBackground: createColor('#eceaea'),
        main: createColor('#161513'),
        orange: createColor('#E94D35')
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
    fontFamily: 'Bai Jamjuree'
};

theme.typography.h3 = {
    fontWeight: '400',
    fontSize: {
        lg: '31px',
        md: '25px',
        sm: '22px',
        sx: '18px',
    },
    lineHeight: '1.5',
    fontFamily: 'Bai Jamjuree'
};

theme.typography.h4 = {
    fontWeight: '400',
    fontSize: {
        lg: '23px',
        md: '20px',
        sm: '16px',
        sx: '12px',
    },
    lineHeight: '1.5',
    fontFamily: 'Bai Jamjuree'
};

theme.typography.body1 = {
    fontWeight: '400',
    fontSize: {
        lg: '18px',
        md: '16px',
        sm: '14px',
        sx: '12px',
    },
    fontFamily: 'Bai Jamjuree'
};

theme.typography.body2 = {
    fontWeight: '400',
    fontSize: '12px',
    fontFamily: 'Bai Jamjuree'
};