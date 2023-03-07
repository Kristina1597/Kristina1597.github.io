import * as React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import chartImage from '../assets/chart.png';
import modalCounterImage from '../assets/modalCounter.png';
import addressSearchImage from '../assets/addressSearch.png';
import memoryCardsImage from '../assets/memoryCards.png';
import socialMediaImage from '../assets/socialMedia.png';
import weatherImage from '../assets/weather.png';
import todoImage from '../assets/todo.png';
import snakeImage from '../assets/snake.png';
import activeBoxImage from '../assets/activeBox.png';
import mogoImage from '../assets/mogo.png';

export const languages = {
    ru: 'ruRU',
    en: 'enUS'
};

export const city = 'Antalya';
export const experience = '2';
export const companies = '2';
export const projectsNumber = '5';

export const introDescription = `Hi, I'm Kristina! A middle frontend developer based in Turkey`;
export const position = 'Frontend Developer';
export const stackTechnologies = ['React', 'TypeScript', 'Redux', 'Redux-Thunk', 'Redux-Saga', 'JavaScript', 'Ajax', 'WebSocket',
    'Gatsby.js', 'Formik', 'MaterialUI', 'ChakraUI', 'HTML', 'CSS', 'SASS', 'Jest', 'JQuery', 'Git', 'Figma'];

export const commonDescription = 'In my work, I am always open to learning new technologies, the opportunity to learn ' +
    'something new and improve my skills is important to me.';

export const experienceDescription = [
    'At my first job, I worked as a frontend developer in a team with a developer who had several projects. ' +
    'I was in charge of three projects: a real estate insurance website, a sports insurance website, and a listing of ' +
    'investment projects and investors. Then my task was to create a starter for future projects related to insurance. ' +
    'With the help of the starter, the creation of a new site began to take much less time, since now it is enough just ' +
    'to edit color theme and fill the site with information.',

    'At my last job, I was developing an application for the banking sector, with which you can make transfers. The application ' +
    'provides the ability to make online transfers, transfers using a QR code, invoicing.'
];

export const socialMediaLinks = [
    {
        name: `E-mail`,
        icon: <EmailIcon/>,
        link: 'mailto:filchenko.kristina.97@mail.ru'
    },
    {
        name: `What's up`,
        icon: <WhatsAppIcon/>,
        link: 'https://api.whatsapp.com/send?phone=79898168040'
    },
    {
        name: 'LinkedIn',
        icon: <LinkedInIcon/>,
        link: 'https://www.linkedin.com/in/kristina-filchenko/'
    },
    {
        name: 'Telegram',
        icon: <TelegramIcon/>,
        link: 'https://t.me/Kristina_Filchenko'
    },
];

export const projects = [
    {
        name: 'Bopp App',
        link: 'https://bopp.io/',
        description: 'money transfer application',
        responsibilities: ['adaptive and cross-browser layout layout in Figma', 'development of new functionality',
            'creating components, writing scripts', 'support and testing of the project', 'checking the functionality for cross-browser and cross-platform',
            'code refactoring'],
        stack: ['React', 'Redux', 'TypeScript', 'SCSS', 'WebSocket']
    },
    {
        name: 'CV Generator',
        link: '',
        description: 'internal project of the company for generating resumes of employees',
        responsibilities: ['development of new functionality', 'writing scripts', 'code refactoring'],
        stack: ['JavaScript', 'CSS', 'HTML', 'html2pdf.js.']
    },
    {
        name: 'Krysha',
        link: 'https://www.krysha.insure/',
        description: 'real estate insurance website',
        responsibilities: ['optimization and expansion of the functionality of the existing code', 'refinement of existing projects',
            'development of new functionality', 'writing scripts', 'code refactoring'],
        stack: ['React', 'Gatsby.js', 'GraphQl', 'Formik', 'MaterialUI', 'ChakraUI', 'Airtable']
    },
    {
        name: 'Moi Shlem',
        link: 'https://www.moishlem.ru/',
        description: 'sports insurance website',
        responsibilities: ['optimization and expansion of the functionality of the existing code', 'refinement of existing projects',
            'development of new functionality', 'writing scripts', 'code refactoring'],
        stack: ['React', 'Redux', 'Gatsby.js', 'GraphQl', 'Formik', 'MaterialUI', 'ChakraUI', 'Airtable']
    },
    {
        name: 'Project Starter',
        link: '',
        description: 'starter for the subsequent quick creation of insurance sites',
        responsibilities: ['development of new functionality', 'writing scripts', 'code refactoring'],
        stack: ['React', 'Redux', 'TypeScript', 'Gatsby.js', 'GraphQl', 'Formik', 'MaterialUI', 'ChakraUI', 'Airtable', 'ESLint']
    }
];

export const petProjects = [
    {
        name: 'Charts',
        links: {
            github: 'https://github.com/Kristina1597/statistics-counter',
            codesandbox: 'https://codesandbox.io/p/github/Kristina1597/statistics-counter/master?workspaceId=6a662633-ad5a-4fdd-a93f-d41b4a6142e0&file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522cldu3o6nb001afqg09s949e9i%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522cldu3o6go000x356hj58y7fxi%2522%253A%257B%2522key%2522%253A%2522cldu3o6go000x356hj58y7fxi%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clecvsmp700b1356igch2ka1t%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522clecvsj1l0057356in9mk52pj%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522cldu3o6go000x356hj58y7fxi%2522%252C%2522spacesOrder%2522%253A%255B%2522cldu3o6go000x356hj58y7fxi%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D'
        },
        description: `Chart of company's profits and conversion of views to clicks`,
        stack: ['React', 'Redux Saga', 'Router', 'Ajax', 'Material UI', 'Recharts'],
        screenshot: chartImage
    }, {
        name: 'Modal with counter',
        links: {
            github: 'https://github.com/Kristina1597/modal-counter',
            codesandbox: 'https://codesandbox.io/p/github/Kristina1597/test_task_modal/draft/heuristic-cherry?workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clctc715f000e356gl1rj24kh%2522%253A%257B%2522key%2522%253A%2522clctc715f000e356gl1rj24kh%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clda0bfhl000d356hleb7w2hz%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clda0bkgj0091356highq2z9g%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522clda0bg83005y356hra842j6t%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clctc715f000e356gl1rj24kh%2522%252C%2522spacesOrder%2522%253A%255B%2522clctc715f000e356gl1rj24kh%2522%255D%257D'
        },
        description: `Modal to confirm the user's action with the counter`,
        stack: ['React', 'TypeScript', 'Redux', 'Router', 'Ajax'],
        screenshot: modalCounterImage
    },
    {
        name: 'Smart address search',
        links: {
            github: 'https://github.com/Kristina1597/-search-engine-address',
            codesandbox: 'https://codesandbox.io/s/cold-breeze-zb9v8'
        },
        description: 'Forms for smart address lookup',
        stack: ['React', 'Redux', 'Ajax', 'Material UI'],
        screenshot: addressSearchImage
    },
    {
        name: 'game "Memory Cards"',
        links: {
            github: 'https://github.com/Kristina1597/Memore-Cards-Game',
            codesandbox: 'https://codesandbox.io/s/front-end-tiles-6n2dv'
        },
        description: 'Game where you need to find 2 same cards',
        stack: ['React', 'Redux', 'JavaScript'],
        screenshot: memoryCardsImage
    },
    {
        name: 'WebSpace',
        links: {
            github: 'https://github.com/Kristina1597/WebSpace',
        },
        description: 'social media that includes main page with posts, messages, list of users, registration and authorization',
        stack: ['React', 'Redux', 'Router', 'Ajax',],
        screenshot: socialMediaImage
    },
    {
        name: 'weather app',
        links: {
            github: 'https://github.com/Kristina1597/weather-app',
            codesandbox: 'https://codesandbox.io/p/github/Kristina1597/weather-app/master?workspaceId=6a662633-ad5a-4fdd-a93f-d41b4a6142e0&file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522cleebbjj40019g4ej46eh7l6n%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522cleebbl39000x356ifv4banbl%2522%253A%257B%2522key%2522%253A%2522cleebbl39000x356ifv4banbl%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522cleebbl39000y356iup9fdpjq%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522cleebbl39000x356ifv4banbl%2522%252C%2522spacesOrder%2522%253A%255B%2522cleebbl39000x356ifv4banbl%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D'
        },
        description: 'App displays the weather in the selected city',
        stack: ['JavaScript', 'Canvas', 'CSS', 'HTML'],
        screenshot: weatherImage
    },
    {
        name: 'To DO',
        links: {
            github: 'https://github.com/Kristina1597/to-do-app',
            codesandbox: 'https://codesandbox.io/p/github/Kristina1597/to-do-app/main?workspaceId=6a662633-ad5a-4fdd-a93f-d41b4a6142e0&file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clee08n9r000fg4h66qzpetb4%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clee08opn0015356jk1zamond%2522%253A%257B%2522key%2522%253A%2522clee08opn0015356jk1zamond%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clee08opn0016356j88dippb5%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clee08opn0015356jk1zamond%2522%252C%2522spacesOrder%2522%253A%255B%2522clee08opn0015356jk1zamond%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D'
        },
        description: 'Simple to do app',
        stack: ['React', 'Redux Saga', 'JavaScript'],
        screenshot: todoImage
    },
    {
        name: 'game Snake',
        links: {
            github: 'https://github.com/Kristina1597/Game-Snake-',
            codesandbox: 'https://codesandbox.io/p/github/Kristina1597/Game-Snake-/main?workspaceId=6a662633-ad5a-4fdd-a93f-d41b4a6142e0&workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522cleeb8d0h000e356jz0ciwbsu%2522%253A%257B%2522key%2522%253A%2522cleeb8d0h000e356jz0ciwbsu%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522cleeb8d0h000f356jpqjn7te2%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522cleeb8d0h000e356jz0ciwbsu%2522%252C%2522spacesOrder%2522%253A%255B%2522cleeb8d0h000e356jz0ciwbsu%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D'
        },
        description: 'Popular game where you give food to snake and score points',
        stack: ['JavaScript', 'Canvas', 'CSS', 'HTML'],
        screenshot: snakeImage
    },
    {
        name: 'Active Box',
        links: {
            github: 'https://github.com/Kristina1597/ActiveBox',
            codesandbox: 'https://codesandbox.io/p/github/Kristina1597/ActiveBox/main?workspaceId=6a662633-ad5a-4fdd-a93f-d41b4a6142e0&workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clecv2yxl000e356it39plqso%2522%253A%257B%2522key%2522%253A%2522clecv2yxl000e356it39plqso%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clecv2yxm000f356i7vzqvsim%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clecv2yxl000e356it39plqso%2522%252C%2522spacesOrder%2522%253A%255B%2522clecv2yxl000e356it39plqso%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D'
        },
        description: 'Adaptive landing page made according to the layout',
        stack: ['HTML', 'CSS', 'JS'],
        screenshot: activeBoxImage
    },
    {
        name: 'MoGo',
        links: {
            github: 'https://github.com/Kristina1597/MoGo',
            codesandbox: 'https://codesandbox.io/p/github/Kristina1597/MoGo/main?workspaceId=6a662633-ad5a-4fdd-a93f-d41b4a6142e0&workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clecv8b5s000g356if8gq18us%2522%253A%257B%2522key%2522%253A%2522clecv8b5s000g356if8gq18us%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clecv8b5s000h356isfjepzei%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clecv8b5s000g356if8gq18us%2522%252C%2522spacesOrder%2522%253A%255B%2522clecv8b5s000g356if8gq18us%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D'
        },
        description: 'Adaptive landing page made according to the layout',
        stack: ['HTML', 'CSS', 'JS'],
        screenshot: mogoImage
    }
];



