import * as React from 'react';
import { socialMediaLinks } from '../../content/content';
import { Box, IconButton, SvgIcon, Typography } from '@mui/material';
import { ReactComponent as additionalIconWhite } from '../../assets/additionalIconWhite.svg';

export const Footer = () => {

    const handleActionClick = (link) => {
        window.open(link, '_blank');
    };

    return <Box sx={{
        margin: '0 auto',
        width: '100%',
        maxWidth: {
            lg: '1060px',
            md: '860px',
            sm: '620px',
            xs: '340px'
        },
    }}>
        <Box sx={{
            paddingTop: '15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <SvgIcon sx={{margin: '10px 0 10px', width: '32px', height: '32px'}}
                     component={additionalIconWhite}
                     inheritViewBox/>
            <Box>
                {socialMediaLinks.map((i) => (
                    <IconButton
                        sx={{
                            color: '#ffffff',
                            padding: {
                                sm: '15px',
                                xs: '5px'
                            },
                            marginLeft: '10px'
                        }}
                        key={i.name}
                        onClick={() => handleActionClick(i.link)}
                    >
                        {i.icon}
                    </IconButton>
                ))}
            </Box>
        </Box>
        <Typography padding='15px 0' color='#F2F1EF' fontSize='14px'>
            © Made by Kristina Filchenko
        </Typography>
    </Box>
};