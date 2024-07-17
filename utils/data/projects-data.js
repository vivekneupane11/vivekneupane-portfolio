import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 3,
        name: 'Bamboo-Crypto Investing',
        description: 'An app that provide a simple and effortless way to start investing in crypto - one transaction at a time. I worked as Senior Software engineer. My role was mostly on front-end and  mobile app development using ReactJS and React Native.',
        tools: ['React', 'React Native', 'AWS Amplify', 'Customer IO','Intercom', 'EC2', 'React Query', 'Snow Flake', 'Jira', 'Cronjob','Firebase'],
        code: '',
        role: 'Senior Software Engineer',
        demo: ['https://www.getbamboo.io/'],
        image: realEstate,
    },
    {
        id: 1,
        name: 'Medicos PDF Apps',
        description: "This app was designed for medical students, as a social e-learning platform. I was responsible for product development of 4 mobile apps using react native. And a social learning platform website using React. I created a custom editor in React and platform to extract each pdf page as images.",
        tools: ['React', 'React Native', 'React Query','Firebase', 'Express', 'MongoDB',  'Redux', 'AWS', 'JS', 'Image Magik', 'NodeJs'],
        role: 'Chief Technology Officer',
        code: 'https://medicos-pdf-qr72-pndtuukob-vivekneupane11.vercel.app/',
        demo: ['https://play.google.com/store/apps/details?id=com.rjl.bookapp&hl=en','https://medicos-pdf-qr72-pndtuukob-vivekneupane11.vercel.app/'],
        image: crefin,
    },
    {
        id: 2,
        name: 'Jhigubazar',
        description: 'A free online marketplace that lets you buy, sell and donate a variety of new or used things. In Jhigubazar, I was mostly responsible for backend logic. For example deployment using AWS EC2, implementing cronjobs, indexing mongodb queries, implementing geospatical query and soon. ',
        tools: ['NextJS', 'Mongodb', "Google Maps", "NestJS", "TypeScript", "GeoSpatical Query", "AWS S3", "CronJobs", "SSR"],
        role: 'Full Stack Developer',
        code: '',
        demo: ['https://www.jhigubazar.com/tabs/explore'],
        image: travel,
    },
   
    {
        id: 4,
        name: 'REACTJS-EDITOR',
        description: "A cool npm package created for ReactJS. React package to highlight text,make text bold,add comment to text. I think this library can demonstrate my frontend skill.",
        tools: ['ReactJS','ts','javascript','html','css','nvm','npm'],
        code: '',
        demo: ['https://reactjs-editor-demo.vercel.app/','https://www.npmjs.com/package/reactjs-editor'],
        image: ayla,
        role: 'Author',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },