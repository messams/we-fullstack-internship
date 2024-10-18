const projectsData = [
    // HTML Projects
    {
        id: 1,
        title: "Sir Tim Berners Lee",
        category: ["HTML"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/html/SirTimBernersLee/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/html/SirTimBernersLee"
    },
    {
        id: 2,
        title: "My Favourite Cars",
        category: ["HTML"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/html/MyFavouriteCars/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/html/MyFavouriteCars"
    },
    {
        id: 3,
        title: "Video Loading Screen",
        category: ["HTML"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/html/VideoloadingScreen/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/html/VideoloadingScreen"
    },
    {
        id: 4,
        title: "Your Best Singer",
        category: ["HTML"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/html/YourbestSinger/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/html/YourbestSinger"
    },
    {
        id: 5,
        title: "The Godfather Film",
        category: ["HTML"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/html/TheGodfatherFilm/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/html/TheGodfatherFilm"
    },
    {
        id: 6,
        title: "Mobile Store",
        category: ["HTML"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/html/MobileStore/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/html/MobileStore"
    },
    {
        id: 7,
        title: "Form Validation",
        category: ["HTML"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/html/FormValidation/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/html/FormValidation"
    },

    // CSS Projects
    {
        id: 8,
        title: "Hello Css",
        category: ["HTML", "CSS"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/css/HelloCss/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/css/HelloCss"
    },
    {
        id: 9,
        title: "Text Style",
        category: ["HTML", "CSS"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/css/TextStyle/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/css/TextStyle"
    },
    {
        id: 10,
        title: "My Profile",
        category: ["HTML", "CSS"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/css/MyProfile/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/css/MyProfile"
    },
    {
        id: 11,
        title: "Shop",
        category: ["HTML", "CSS"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/css/Shop/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/css/Shop"
    },
    {
        id: 12,
        title: "ILLDY SECTION GRID",
        category: ["HTML", "CSS"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/css/ILLDYSECTIONGRID/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/css/ILLDYSECTIONGRID"
    },
    {
        id: 13,
        title: "Simple Landing Page",
        category: ["HTML", "CSS"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/css/SimplelandingPage/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/css/SimplelandingPage"
    },
    {
        id: 14,
        title: "Age Calculator",
        category: ["HTML", "CSS", "JavaScript"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/js/AgeCalculator/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/js/AgeCalculator"
    },
    {
        id: 15,
        title: "Q & A Game",
        category: ["HTML", "CSS", "JavaScript"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/js/Q&Agame/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/js/Q&Agame"
    },
    {
        id: 16,
        title: "Sum 2 num",
        category: ["HTML", "CSS", "JavaScript"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/js/SumTwoNum/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/js/SumTwoNum"
    },
    {
        id: 17,
        title: "Data Bind Task",
        category: ["HTML", "CSS", "JavaScript"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/js/DataBindTask/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/js/DataBindTask"
    },
    {
        id: 18,
        title: "Loop Problem Set",
        category: ["HTML", "CSS", "JavaScript"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/js/LoopProblemSet/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/js/LoopProblemSet"
    },
    {
        id: 19,
        title: "Fawrey Card Game",
        category: ["HTML", "CSS", "JavaScript"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/js/FawreyCardGame/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/js/FawreyCardGame"
    },
    {
        id: 20,
        title: "Print Data Table",
        category: ["HTML", "CSS", "JavaScript"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/js/PrintDataTable/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/js/PrintDataTable"
    },
    {
        id: 21,
        title: "Stop Watch",
        category: ["HTML", "CSS", "JavaScript"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/js/StopWatch/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/js/StopWatch"
    },
    {
        id: 22,
        title: "All users API | Dummy Json",
        category: ["HTML", "CSS", "JavaScript"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/js/AllusersAPI/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/js/AllusersAPI"
    },
    {
        id: 23,
        title: "Our Products DOM",
        category: ["HTML", "CSS", "JavaScript"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/js/OurProductsDOM/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/js/OurProductsDOM"
    },
    {
        id: 24,
        title: "Signature Website",
        category: ["HTML", "CSS", "JavaScript"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/js/SignatureWebsite/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/js/SignatureWebsite"
    },
    {
        id: 25,
        title: "Build a design with jQuery",
        category: ["HTML", "CSS", "JavaScript", "jQuery"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/tasks/jQuery/Build-a-design-with-jQuery/index.html",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev/tree/master/tasks/jQuery/Build-a-design-with-jQuery"
    },
    {
        id: 26,
        title: "Punny headline React Clone",
        category: ["React"],
        link: "https://punny-headline-react-clone.vercel.app/",
        source: "https://github.com/m-essam-s/punny-headline-react-clone"
    },
    {
        id: 27,
        title: "Training Journal Legacy",
        category: ["HTML", "CSS", "JavaScript"],
        link: "https://m-essam-s.github.io/We-FullStack-WebDev/",
        source: "https://github.com/m-essam-s/We-FullStack-WebDev"
    },
    {
        id: 29,
        title: "Training Journal React App",
        category: ["React"],
        link: "https://we-fullstack-internship.vercel.app/",
        source: "https://github.com/m-essam-s/we-fullstack-internship"
    }
];

export default projectsData;