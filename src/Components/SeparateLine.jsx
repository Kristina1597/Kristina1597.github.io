import { stackTechnologies } from '../content/content';
import  {styled } from '@mui/material/styles';
import { Box, SvgIcon, Typography } from '@mui/material';
import { ReactComponent as MainIcon } from './../assets/mainIcon.svg';

export const SeparateLine = () => {
    const StyledEl = styled('div')({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        animation: 'marquee-infinite 100s linear infinite',

        '@keyframes marquee-infinite': {
            '0%': {
                transform: 'translateX(0%)'
            },
            '100%': {
                transform: 'translateX(-50%)'
            }
        }
    });

    return (
        <Box sx={{
            width: '120%',
            marginLeft: '-15px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#161513',
            height: '70px',
            transform: 'rotate(-4.93deg)'
        }}>
            <StyledEl>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    {stackTechnologies.map((i) =>
                        <Box key={i}
                             sx={{
                                 display: 'flex',
                                 flexDirection: 'row',
                                 alignItems: 'center',
                                 alignContent: 'center',
                                 margin: {
                                     md: '0 60px',
                                     sm: '0 40px',
                                     xs: '0 20px'
                                 }
                             }}>
                            <Typography sx={{
                                marginRight: {
                                    md: '10px',
                                    sm: '7px',
                                    xs: '4px'
                                },
                                fontSize: {
                                    md: '18px',
                                    sm: '15px',
                                    xs: '12px'
                                },
                                textTransform: 'uppercase',
                                color: '#ffffff'
                            }}>
                                {i}
                            </Typography>
                            <SvgIcon sx={{
                                width: {
                                    md: '24px',
                                    sm: '20x',
                                    xs: '17px'
                                }
                            }} component={MainIcon} inheritViewBox/>
                        </Box>)}
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    {stackTechnologies.map((i) =>
                        <Box key={i}
                             sx={{
                                 display: 'flex',
                                 flexDirection: 'row',
                                 alignItems: 'center',
                                 alignContent: 'center',
                                 margin: {
                                     md: '0 60px',
                                     sm: '0 40px',
                                     xs: '0 20px'
                                 }
                             }}>
                            <Typography sx={{
                                marginRight: {
                                    md: '10px',
                                    sm: '7px',
                                    xs: '4px'
                                },
                                fontSize: {
                                    md: '18px',
                                    sm: '15px',
                                    xs: '12px'
                                },
                                textTransform: 'uppercase',
                                color: '#ffffff'
                            }}>
                                {i}
                            </Typography>
                            <SvgIcon sx={{
                                width: {
                                    md: '24px',
                                    sm: '20x',
                                    xs: '17px'
                                }
                            }} component={MainIcon} inheritViewBox/>
                        </Box>)}
                </Box>
            </StyledEl>
        </Box>
    )
};