import { forwardRef } from 'react';
import useTranslation from '../../CustomHooks/CustomHooks';
import {
    Box,
    Link,
    List,
    ListItem,
    ListItemText,
    SvgIcon,
    Typography
} from '@mui/material';
import {ReactComponent as additionalIcon} from './../../assets/additionalIcon.svg';

export const Projects = forwardRef(({ executeScroll }, ref) => {
    const translation = useTranslation();

    const handleProjectClick = (e) => {
        e.stopPropagation();
    };

    return (
        <Box ref={ref}
             sx={{
                 width: '100%',
                 margin: '0 auto',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center'
             }}>
            <SvgIcon
                component={additionalIcon}
                inheritViewBox
                sx={{
                    marginBottom: '22px',
                    width: '40px',
                    height: '40px'
                }}
            />
            <Typography variant={'h2'}>
                {translation.projectsHeader.projects}
            </Typography>
            <Typography variant={'body1'}
                        sx={{
                            textTransform: 'uppercase',
                            marginBottom: {
                                sm: '61px',
                                xs: '30px'
                            }
                        }}>
                {translation.projectsHeader.projectsContributedTo}
            </Typography>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    lg: '1fr 1fr 1fr',
                    md: '1fr 1fr',
                    sm: '1fr',
                    xs: '1fr'
                },
                gridTemplateRows: {
                    lg: '1fr 1fr',
                    md: '1fr 1fr 1fr',
                    sm: '1fr 1fr 1fr 1fr 1fr',
                    xs: '1fr 1fr 1fr 1fr 1fr'
                },
                gap: '24px 24px',
                gridTemplateAreas: {
                    lg: `". . ."
                        ". . ."`,
                    md: `"."
                        "."
                        "."`,
                    sm: `"."
                        "."
                        "."
                        "."
                        "."`,
                    xs: `"."
                        "."
                        "."
                        "."
                        "."`
                }
            }}>
                {translation.projects.map((i) =>
                    <Box
                        key={i.name}
                        sx={{
                            padding: '38px 34px',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '2px solid #161513'
                        }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <Box sx={{
                                marginRight: '24px',
                                padding: '14px 18px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#E94D35',
                                maxWidth: '48px',
                                maxHeight: '48px'
                            }}>
                                <Typography variant={'body1'}
                                            sx={{
                                                color: '#ffffff'
                                            }}>
                                    {translation.projects.indexOf(i) + 1}
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography variant={'h4'}>
                                    {i.link ?
                                        <Link onClick={(e) => handleProjectClick(e)}
                                              target='_blank'
                                              color='#161513'
                                              href={i.link}>
                                            {i.name}
                                        </Link>
                                        : i.name
                                    }
                                </Typography>
                                <Typography variant={'body1'} sx={{whiteSpace: 'normal'}}>
                                    {i.description}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'transparent',
                            marginTop: '28px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography sx={{
                                    width: '20%',
                                    marginBottom: '15px'
                                }}
                                            variant={'body1'}>
                                    {translation.responsibilities}
                                </Typography>
                                <List sx={{width: '80%'}} disablePadding>
                                    {i.responsibilities.map((r) =>
                                        <ListItem key={r} disablePadding>
                                            <SvgIcon sx={{
                                                width: '10px',
                                                height: '10px',
                                                marginRight: '10px'
                                            }}
                                                     component={additionalIcon}
                                                     inheritViewBox/>
                                            <ListItemText sx={{marginTop: '0px'}} primary={r}/>
                                        </ListItem>
                                    )}
                                </List>
                            </Box>
                            <Box>
                                <Box sx={{
                                    marginTop: '25px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%'
                                }}>
                                    <Typography sx={{
                                        width: '20%'
                                    }} variant={'body1'}>
                                        Stack
                                    </Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        flexWrap: 'wrap'
                                    }}>
                                        {i.stack.map((s) => <Box key={s}>
                                                <Typography sx={{
                                                    color: '#E94D35',
                                                    textDecoration: 'underline',
                                                    marginRight: '5px'
                                                }}>
                                                    {s}
                                                </Typography>
                                            </Box>
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
});