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

export default {
    name: 'Кристина',
    surname: 'Фильченко',
    city: 'Анталия',
    introDescription: `Привет, я Кристина! Миддл фронтенд разрабочик из Турции`,
    position: 'Фронтенд разработчик',
    years: 'года',
    liveIn: 'Город',
    dateOfBirth: 'Дата рождения',
    experienceYears: 'года опыта',
    dateOfBirthValue: '30 Октября 1997',
    experience: 'Опыт',
    projectsCount: 'проектов',
    companiesCount: 'компаний',
    commonDescription: 'В работе я всегда открыта к изучению новых технологий, так как возможность ' +
        'узнать что-то новое и улучшить свои навыки очень важна для меняю',
    experienceDescription: [
        'На первом месте работы Я работала frontend-разработчиком в команде с разработчиком, у которого было ' +
        'несколько проектов. В моем ведении было три проекта: сайт по страхованию недвижимости, сайт по оформлению ' +
        'спортивных страховок и листинг инвестиционных проектов и инвесторов. Затем моей задачей было создание ' +
        'стартера для будущих проектов, связанных со страхованием. С помощью стартера создание нового сайта стало ' +
        'занимать намного меньше времени, так как теперь достаточно только создать новую тему и наполнить сайт информацией.',

        'На последнем месте работы я занималась разработкой приложения для банковской сферы, с помощью которого можно ' +
        'осуществлять переводы. Приложение предоставляет возможность осуществления онлайн переводов, переводов с помощью ' +
        'QR-кода, выставления инвойсов'
    ],
    navMenuItems: ['О себе', 'Проекты', 'Домашние проекты'],
    introGotProject: 'Есть предложение?',
    introLetsTalkButton: 'Давай обсудим',
    projectsHeader: {
        projects: 'Проекты',
        projectsContributedTo: 'в которых я участвовала',
    },
    responsibilities: 'Обязанности',
    projects: [
        {
            name: 'Bopp App',
            link: 'https://bopp.io/',
            description: 'приложение для денежных переводов',
            responsibilities: ['адаптивная и кросс-браузерная верстка по макету в Figma', 'разработка нового функционала',
                'создание компонентов, написание скриптов', 'сопровождение и тестирование проекта',
                'проверка функционала на кроссбраузерность и кроссплатформенность',
                'рефакторинг кода'],
            stack: ['React', 'Redux', 'TypeScript', 'SCSS', 'WebSocket']
        },
        {
            name: 'CV Generator',
            link: '',
            description: 'внутренний проект компании для генерации резюме сотрудников',
            responsibilities: ['разработка нового функционала', 'написание скриптов', 'рефакторинг кода'],
            stack: ['JavaScript', 'CSS', 'HTML', 'html2pdf.js.']
        },
        {
            name: 'Крыша',
            link: 'https://www.krysha.insure/',
            description: 'Сайт по страхованию недвижимости',
            responsibilities: ['оптимизация и расширение функционала имеющегося кода', 'доработка существующего проекта',
                'создание новых компонентов', 'написание скриптов', 'рефакторинг кода'],
            stack: ['React', 'Gatsby.js', 'GraphQl', 'Formik', 'MaterialUI', 'ChakraUI', 'Airtable']
        },
        {
            name: 'Мой шлем',
            link: 'https://www.moishlem.ru/',
            description: 'Сайт по оформлениб спортивных страховок',
            responsibilities: ['оптимизация и расширение функционала имеющегося кода', 'доработка существующего проекта',
                'создание новых компонентов', 'написание скриптов', 'рефакторинг кода'],
            stack: ['React', 'Redux', 'Gatsby.js', 'GraphQl', 'Formik', 'MaterialUI', 'ChakraUI', 'Airtable']
        },
        {
            name: 'Стартер для будущих проектов',
            link: '',
            description: 'стартер для быстрого создания сайтов, связанных со страхованием',
            responsibilities: ['создание новых компонентов', 'написание скриптов', 'оптимизация и расширение функционала имеющегося кода','рефакторинг кода'],
            stack: ['React', 'Redux', 'TypeScript', 'Gatsby.js', 'GraphQl', 'Formik', 'MaterialUI', 'ChakraUI', 'Airtable', 'ESLint']
        }
    ],
    portfolio: 'Портфолио',
    petProjectsName: 'мои домашние проекты',
    petProjects: [
        {
            name: 'Диаграмма',
            links: {
                github: 'https://github.com/Kristina1597/statistics-counter',
                codesandbox: 'https://codesandbox.io/p/github/Kristina1597/statistics-counter/master?workspaceId=6a662633-ad5a-4fdd-a93f-d41b4a6142e0&file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522cldu3o6nb001afqg09s949e9i%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522cldu3o6go000x356hj58y7fxi%2522%253A%257B%2522key%2522%253A%2522cldu3o6go000x356hj58y7fxi%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clecvsmp700b1356igch2ka1t%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522clecvsj1l0057356in9mk52pj%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522cldu3o6go000x356hj58y7fxi%2522%252C%2522spacesOrder%2522%253A%255B%2522cldu3o6go000x356hj58y7fxi%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D'
            },
            description: `Диаграмма прибыли компании за выбранный период и конверсии просмотров в клики`,
            stack: ['React', 'Redux Saga', 'Router', 'Ajax', 'Material UI', 'Recharts'],
            screenshot: chartImage
        }, {
            name: 'Модальное окно со счетчиком',
            links: {
                github: 'https://github.com/Kristina1597/modal-counter',
                codesandbox: 'https://codesandbox.io/p/github/Kristina1597/test_task_modal/draft/heuristic-cherry?workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clctc715f000e356gl1rj24kh%2522%253A%257B%2522key%2522%253A%2522clctc715f000e356gl1rj24kh%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clda0bfhl000d356hleb7w2hz%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clda0bkgj0091356highq2z9g%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522clda0bg83005y356hra842j6t%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clctc715f000e356gl1rj24kh%2522%252C%2522spacesOrder%2522%253A%255B%2522clctc715f000e356gl1rj24kh%2522%255D%257D'
            },
            description: `Модальное окно для подтверждения действия пользователя со счетчиком`,
            stack: ['React', 'TypeScript', 'Redux', 'Router', 'Ajax'],
            screenshot: modalCounterImage
        },
        {
            name: 'Формы для умного поиска адреса',
            links: {
                github: 'https://github.com/Kristina1597/-search-engine-address',
                codesandbox: 'https://codesandbox.io/s/cold-breeze-zb9v8'
            },
            description: 'Формы, обеспечивающие правильное введение адреса с подсказками',
            stack: ['React', 'Redux', 'Ajax', 'Material UI'],
            screenshot: addressSearchImage
        },
        {
            name: 'игра "Memory Cards"',
            links: {
                github: 'https://github.com/Kristina1597/Memore-Cards-Game',
                codesandbox: 'https://codesandbox.io/s/front-end-tiles-6n2dv'
            },
            description: 'Игра, в которой нужно найти 2 одинаковых карточки',
            stack: ['React', 'Redux', 'JavaScript'],
            screenshot: memoryCardsImage
        },
        {
            name: 'WebSpace',
            links: {
                github: 'https://github.com/Kristina1597/WebSpace',
            },
            description: 'Социальная сеть, включающая в себя главную страницу и посты, диалоги, список пользователей, регистрацию и авторизацию',
            stack: ['React', 'Redux', 'Router', 'Ajax',],
            screenshot: socialMediaImage
        },
        {
            name: 'Приложение "Прогноз погоды"',
            links: {
                github: 'https://github.com/Kristina1597/weather-app',
                codesandbox: 'https://codesandbox.io/p/github/Kristina1597/weather-app/master?workspaceId=6a662633-ad5a-4fdd-a93f-d41b4a6142e0&file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522cleebbjj40019g4ej46eh7l6n%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522cleebbl39000x356ifv4banbl%2522%253A%257B%2522key%2522%253A%2522cleebbl39000x356ifv4banbl%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522cleebbl39000y356iup9fdpjq%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522cleebbl39000x356ifv4banbl%2522%252C%2522spacesOrder%2522%253A%255B%2522cleebbl39000x356ifv4banbl%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D'
            },
            description: 'Приложение, отобрающие погоду и другие показатели в выбранном городе',
            stack: ['JavaScript', 'Canvas', 'CSS', 'HTML'],
            screenshot: weatherImage
        },
        {
            name: 'To DO',
            links: {
                github: 'https://github.com/Kristina1597/to-do-app',
                codesandbox: 'https://codesandbox.io/p/github/Kristina1597/to-do-app/main?workspaceId=6a662633-ad5a-4fdd-a93f-d41b4a6142e0&file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clee08n9r000fg4h66qzpetb4%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clee08opn0015356jk1zamond%2522%253A%257B%2522key%2522%253A%2522clee08opn0015356jk1zamond%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clee08opn0016356j88dippb5%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clee08opn0015356jk1zamond%2522%252C%2522spacesOrder%2522%253A%255B%2522clee08opn0015356jk1zamond%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D'
            },
            description: 'Классический To-DO лист',
            stack: ['React', 'Redux Saga', 'JavaScript'],
            screenshot: todoImage
        },
        {
            name: 'Игра "Змейка"',
            links: {
                github: 'https://github.com/Kristina1597/Game-Snake-',
                codesandbox: 'https://codesandbox.io/p/github/Kristina1597/Game-Snake-/main?workspaceId=6a662633-ad5a-4fdd-a93f-d41b4a6142e0&workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522cleeb8d0h000e356jz0ciwbsu%2522%253A%257B%2522key%2522%253A%2522cleeb8d0h000e356jz0ciwbsu%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522cleeb8d0h000f356jpqjn7te2%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522cleeb8d0h000e356jz0ciwbsu%2522%252C%2522spacesOrder%2522%253A%255B%2522cleeb8d0h000e356jz0ciwbsu%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D'
            },
            description: 'Популярна игра со змейкой, где нужно собирать еду и заработывать очки',
            stack: ['JavaScript', 'Canvas', 'CSS', 'HTML'],
            screenshot: snakeImage
        },
        {
            name: 'Active Box',
            links: {
                github: 'https://github.com/Kristina1597/ActiveBox',
                codesandbox: 'https://codesandbox.io/p/github/Kristina1597/ActiveBox/main?workspaceId=6a662633-ad5a-4fdd-a93f-d41b4a6142e0&workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clecv2yxl000e356it39plqso%2522%253A%257B%2522key%2522%253A%2522clecv2yxl000e356it39plqso%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clecv2yxm000f356i7vzqvsim%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clecv2yxl000e356it39plqso%2522%252C%2522spacesOrder%2522%253A%255B%2522clecv2yxl000e356it39plqso%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D'
            },
            description: 'Адаптивный одностраничный сайт, сверстанный по макету в Figma',
            stack: ['HTML', 'CSS', 'JS'],
            screenshot: activeBoxImage
        },
        {
            name: 'MoGo',
            links: {
                github: 'https://github.com/Kristina1597/MoGo',
                codesandbox: 'https://codesandbox.io/p/github/Kristina1597/MoGo/main?workspaceId=6a662633-ad5a-4fdd-a93f-d41b4a6142e0&workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clecv8b5s000g356if8gq18us%2522%253A%257B%2522key%2522%253A%2522clecv8b5s000g356if8gq18us%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clecv8b5s000h356isfjepzei%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clecv8b5s000g356if8gq18us%2522%252C%2522spacesOrder%2522%253A%255B%2522clecv8b5s000g356if8gq18us%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D'
            },
            description: 'Адаптивный одностраничный сайт, сверстанный по макету в Figma',
            stack: ['HTML', 'CSS', 'JS'],
            screenshot: mogoImage
        }
    ],
    showAllButton: 'Показать все',
    hideButton: 'Свернуть'
};