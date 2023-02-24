import { forwardRef, useState } from 'react';
import { petProjects } from '../../content/content';
import { ReactComponent as additionalIcon } from './../../assets/additionalIcon.svg';
import Image from 'mui-image';
import {
    Box,
    Button,
    Link,
    SvgIcon,
    Typography
} from '@mui/material';

export const PetProjects = forwardRef(({ executeScroll }, ref) => {
    const [showAll, setShowAll] = useState(false);

    const handleShowAllClick = () => {
        setShowAll(!showAll);
    };

    return <Box ref={ref} sx={{
        width: '100%',
        marginTop: '96px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
        <SvgIcon sx={{marginBottom: '22px', width: '40px', height: '40px'}} component={additionalIcon}
                 inheritViewBox/>
        <Typography variant={'h2'}>
            Portfolio
        </Typography>
        <Typography sx={{
            textTransform: 'uppercase',
            marginBottom: {
                sm: '61px',
                xs: '30px'
            }
        }} variant={'body1'}>my pet projects
        </Typography>
        {petProjects.map((i) => {
                if (!showAll) {
                    return petProjects.indexOf(i) < 3 && <Box
                        key={i.name}
                        sx={{
                            width: '100%',
                            marginBottom: '95px',
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            flexDirection: {
                                sm: 'row',
                                xs: 'column'
                            },
                            ':nth-of-type(2n)': {
                                flexDirection: {
                                    sm: 'row-reverse',
                                    xs: 'column'
                                }
                            }
                        }}>
                        <Box sx={{
                            width: 'min-content',
                            whiteSpace: 'nowrap',
                            margin: '0 auto',
                            display: {
                                sm: 'none',
                                xs: 'flex'
                            }
                        }}>
                            <Typography sx={{
                                marginBottom: '30px',
                                padding: '3px 12px',
                                backgroundColor: '#E94D35',
                                color: '#ffffff',
                                textTransform: 'uppercase',
                                textAlign: 'center',
                            }} variant={'body1'}>
                                {i.name}
                            </Typography>
                        </Box>
                        <Box sx={{
                            width: {
                                sm: 'auto',
                                xs: '100%'
                            },
                            marginRight: {
                                sm: '44px',
                                xs: 0
                            },
                            marginBottom: {
                                sm: 0,
                                xs: '25px'
                            },
                            height: '200px'
                        }}
                        >
                            <Image src={i.screenshot}
                                   height='100%'
                                   width='100%'
                                   duration={0}
                                   fit='cover'
                                   sx={{
                                       filter: 'brightness(45%)',
                                       transition: 'filter .2s',
                                       '&:hover': {
                                           filter: 'brightness(100%)'
                                       }
                                   }}/>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: {
                                sm: '50%',
                                xs: '100%'
                            },
                            justifyContent: 'space-between'
                        }}>
                            <Box>
                                <Box sx={{
                                    width: 'min-content',
                                    whiteSpace: 'nowrap',
                                    display: {
                                        sm: 'flex',
                                        xs: 'none'
                                    }
                                }}>
                                    <Typography sx={{
                                        marginBottom: '30px',
                                        padding: '3px 12px',
                                        backgroundColor: '#E94D35',
                                        color: '#ffffff',
                                        textTransform: 'uppercase',
                                        textAlign: 'center',
                                    }} variant={'body1'}>
                                        {i.name}
                                    </Typography>
                                </Box>
                                <Typography sx={{
                                    width: '100%',
                                    fontSize: {
                                        md: '35px',
                                        sm: '25px',
                                        xs: '20px'
                                    },
                                    marginBottom: '30px',
                                }}>
                                    {i.description}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    marginBottom: '10px',
                                    marginLeft: '-5px'
                                }}>
                                    {i.stack.map((s) =>
                                        <Typography
                                            key={s}
                                            sx={{
                                                marginRight: '5px',
                                                padding: '0 5px',
                                                color: '#E94D35',
                                                textDecoration: 'underline'
                                            }}>
                                            {s}
                                        </Typography>
                                    )}
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}>
                                    <Typography sx={{marginRight: '10px'}}>Links:</Typography>
                                    <Link color='#161513' sx={{
                                        marginRight: '10px',
                                    }} href={i.links.github} target='_blank'>GitHub</Link>
                                    {i.links.codesandbox &&
                                    <Link color='#161513' href={i.links.codesandbox} target='_blank'>Codesandbox</Link>}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                }
                return <Box sx={{
                    width: '100%',
                    marginBottom: '95px',
                    justifyContent: 'space-around',
                    display: 'flex',
                    flexDirection: {
                        sm: 'row',
                        xs: 'column'
                    },
                    ':nth-of-type(2n)': {
                        flexDirection: {
                            sm: 'row-reverse',
                            xs: 'column'
                        }
                    }
                }}>
                    <Box sx={{
                        width: 'min-content',
                        whiteSpace: 'nowrap',
                        margin: '0 auto',
                        display: {
                            sm: 'none',
                            xs: 'flex'
                        }
                    }}>
                        <Typography sx={{
                            marginBottom: '30px',
                            padding: '3px 12px',
                            backgroundColor: '#E94D35',
                            color: '#ffffff',
                            textTransform: 'uppercase',
                            textAlign: 'center',
                        }} variant={'body1'}>
                            {i.name}
                        </Typography>
                    </Box>

                    <Box sx={{
                        marginRight: {
                            sm: '44px',
                            xs: 0
                        },
                        marginBottom: {
                            sm: 0,
                            xs: '25px'
                        },
                        height: '200px'
                    }}
                    >
                        <Image src={i.screenshot}
                               height='100%'
                               width='100%'
                               duration={0}
                               fit='cover'
                               sx={{
                                   filter: 'brightness(45%)',
                                   transition: 'filter .2s',
                                   '&:hover': {
                                       filter: 'brightness(100%)'
                                   }
                               }}/>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: {
                            sm: '50%',
                            xs: '100%'
                        },
                        justifyContent: 'space-between'
                    }}>
                        <Box>
                            <Box sx={{
                                width: 'min-content',
                                whiteSpace: 'nowrap',
                                display: {
                                    sm: 'flex',
                                    xs: 'none'
                                }
                            }}>
                                <Typography sx={{
                                    marginBottom: '30px',
                                    padding: '3px 12px',
                                    backgroundColor: '#E94D35',
                                    color: '#ffffff',
                                    textTransform: 'uppercase',
                                    textAlign: 'center',
                                }} variant={'body1'}>
                                    {i.name}
                                </Typography>
                            </Box>
                            <Typography sx={{
                                width: '100%',
                                fontSize: {
                                    md: '35px',
                                    sm: '25px',
                                    xs: '20px'
                                },
                                marginBottom: '30px',
                            }}>
                                {i.description}
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                marginBottom: '10px',
                                marginLeft: '-5px'
                            }}>
                                {i.stack.map((s) =>
                                    <Typography
                                        key={s}
                                        sx={{
                                            marginRight: '5px',
                                            padding: '0 5px',
                                            color: '#E94D35',
                                            textDecoration: 'underline'
                                        }}>
                                        {s}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <Typography sx={{marginRight: '10px'}}>Links:</Typography>
                                <Link color='#161513' sx={{
                                    marginRight: '10px',
                                }} href={i.links.github} target='_blank'>GitHub</Link>
                                {i.links.codesandbox &&
                                <Link color='#161513' href={i.links.codesandbox} target='_blank'>Codesandbox</Link>}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            }
        )}
        <Button onClick={handleShowAllClick} variant='contained' sx={{
            marginBottom: '100px',
            backgroundColor: '#E94D35',
            '&:hover': {
                backgroundColor: '#c53d2a'
            }
        }}>
            <Typography variant={'body1'} sx={{
                fontFamily: 'sans-serif'
            }}>
                {showAll ? 'Hide' : 'Show all'}
            </Typography>
        </Button>
    </Box>
})