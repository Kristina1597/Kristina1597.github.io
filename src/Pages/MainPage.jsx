import { useRef } from 'react';
import useTranslation from '../CustomHooks/CustomHooks';
import { Header } from '../Components/Header/Header';
import { Intro } from '../Components/Intro/Intro';
import { Description } from '../Components/DescriptionBlock/Description';
import { Projects } from '../Components/Projects/Projects';
import { PetProjects } from '../Components/PetProjects/PetProjects';
import { Footer } from '../Components/Footer/Footer';
import { SeparateLine } from '../Components/SeparateLine';
import { Box } from '@mui/material';

export const MainPage = () => {
    const translation = useTranslation();

    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const petProjectsRef = useRef(null);

    const navMenuItemsKeys = translation.navMenuItems;
    const navMenuItemsKeysValues = [aboutRef, projectsRef, petProjectsRef];
    const navMenuItems = Object.assign(...navMenuItemsKeys.map((keys, i) => ({[keys]: navMenuItemsKeysValues[i]})));

    const executeScroll = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    };

    const handleScrollToPage = (page) => {
        executeScroll(navMenuItems[page]);
    };

    return (
        <Box>
            <Box sx={{
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: {
                    lg: '1060px',
                    md: '860px',
                    sm: '600px',
                    xs: '320px',
                }
            }}>
                <Header navMenuItems={Object.keys(navMenuItems)} handleScrollToPage={handleScrollToPage}/>
                <Intro/>
            </Box>
            <SeparateLine/>
            <Box sx={{
                margin: {
                    sm: '170px auto 0',
                    xs: '95px auto 0'
                },
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: {
                    lg: '1060px',
                    md: '860px',
                    sm: '600px',
                    xs: '320px',
                }
            }}>
                <Description ref={aboutRef} executeScroll={executeScroll}/>
                <Projects ref={projectsRef} executeScroll={executeScroll}/>
                <PetProjects ref={petProjectsRef} executeScroll={executeScroll}/>
            </Box>
            <Box sx={{
                backgroundColor: '#161513'
            }}>
                <Footer/>
            </Box>
        </Box>
    )
};