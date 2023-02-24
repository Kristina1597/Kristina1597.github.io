import { introDescription, position } from '../../content/content';
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Card,
    Link,
    Typography
} from '@mui/material';
import avatar from '../../assets/avatar.jpg'

export const Intro = () => {
    return (
        <Card sx={{
            display: 'flex',
            flexDirection: {
                sm: 'row',
                xs: 'column-reverse'
            },
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
            boxShadow: 0,
            alignItems: 'center',
            marginTop: {
                sm: '40px',
                xs: '20px'
            },
            marginBottom: '80px'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Box sx={{
                    marginBottom: '35px',
                    width: {
                        sm: '80%',
                        xs: '100%'
                    }
                }}>
                    <Typography sx={{
                        marginBottom: '4px',
                        fontSize: {
                            lg: '56px',
                            md: '50px',
                            sm: '38px',
                            xs: '30px'
                        },
                        textAlign: {
                            sm: 'start',
                            xs: 'center'
                        }
                    }}>
                        {introDescription}
                    </Typography>
                </Box>
                <Typography sx={{
                    marginBottom: '40px',
                    fontSize: {
                        lg: '23px',
                        md: '20px',
                        sm: '16px',
                        xs: '14px'
                    },
                    textAlign: {
                        sm: 'start',
                        xs: 'center'
                    }
                }}>
                    {position}
                </Typography>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Box sx={{
                        padding: '13px 33px',
                        backgroundColor: '#161513',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Typography sx={{
                            color: '#ffffff',
                            fontSize: '16px'
                        }}>
                            Got a project?
                        </Typography>
                    </Box>
                    <Button sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '13px 33px',
                        backgroundColor: 'transparent',
                        border: '1px solid #161513',
                        transition: 'backgroundColor .2s',
                        borderRadius: '0',
                        '&:hover': {
                            backgroundColor: '#ECEAEAFF',
                            cursor: 'pointer'
                        }
                    }}>
                        <Link href='https://t.me/Kristina_Filchenko' target='_blank' sx={{
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            color: '#161513'
                        }}>
                            Let's talk
                        </Link>
                    </Button>
                </ButtonGroup>
            </Box>
            <Avatar
                src={avatar}
                sx={{
                    marginBottom: {
                        sm: 0,
                        xs: '50px'
                    },
                    width: {
                        lg: '462px',
                        md: '362px',
                        sm: '262px',
                        xs: '200px'
                    },
                    height: {
                        lg: '462px',
                        md: '362px',
                        sm: '262px',
                        xs: '200px'
                    },
                }}/>
        </Card>
    )
};