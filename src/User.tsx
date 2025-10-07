import {IconBrandX,IconBadgeCc , IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
import ugiImage from './assets/images/ugilogo.jpg';
import gyandeepImage from './assets/images/gyandeep.jpg';

import SortingImg from './assets/sorting.png';
import devtinder from './assets/Dev-Tinder.png';
import pizzastore from'./assets/pizzastore.png';

const Info = {
    name: "Priyanshu Mishra",
    stack: ["Full stack Developer", "Competitive Programmer", "Freelancer"],
    bio: "Full Stack Developer and B.Tech Computer Science student specializing in web development, competitive programming, and scalable application design. Skilled in MERN stack (MongoDB, Express.js, React.js, Node.js), RESTful API development, real-time communication (WebRTC, Socket.IO), and Agile practices. Proven record of top coding contest achievements and 100+ algorithmic problem solutions across global platforms."
}
const ProjectInfo = [
     {
        title: "DevTinder",
        desc: "DevTinder is a modern developer networking platform inspired by Tinder, designed to help programmers connect, chat, and collaborate. It features a beautiful, responsive UI, real-time chat, and a seamless video call experience powered by WebRTC and Socket.io. Users can create rich profiles, showcase their skills, swipe to connect etc.",
        image: devtinder, 
        live: false,

        technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "Socket.io", "WebRTC"],
        link: "",
        github: "https://github.com/priyanshum27/Dev-Tinder-UI"
    },
   
   {
        title:"Pizza Store",
        desc:"	Pizza store web application is to provide a seamless, user-friendly platform for online ordering, payment, real-time tracking, and efficient store management to enhance customer experience and business operations",
        image: pizzastore,
        live:false,
        technologies:["HTML","CSS","React"],
        link: "",
        github:"https://github.com/priyanshum27/Pizza-store"

    },
     {
        title: "Sorting Visualizer",
        desc: "The Sorting Visualizer is an interactive web application that demonstrates sorting algorithms, allowing users to visualize each algorithm in action.",
        image: SortingImg, 
        live: false,
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://sorting-visualizer-wb0d.onrender.com/",
        github: "https://github.com/priyanshum27/Sorting-visualizer"
    },
   
];

 const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Tailwind CSS", "GSAP", "Mantine Dev", "Tabler IO",]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MySQL", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: ["C", "Java","python", "JavaScript", "TypeScript","SQL"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code","Postman","MongoDB Compass","vercel","render"]
    }
];

const socialLinks = [
    { link: "https://github.com/priyanshum27", icon: IconBrandGithub },
    { link: "http://www.linkedin.com/in/priyanshu-mishra-49b6b6248", icon: IconBrandLinkedin },
    { link: "https://leetcode.com/u/priyanshum27/", icon: IconBrandLeetcode },
    { link: "https://x.com/Priyanshum_27?t=NeB4VFdVhmAvhskzPDTOUw&s=09", icon: IconBrandX  }
     
];


const ExperienceInfo = [

     {
        role: "United College of Engineering and Research",
        company: "Student",
        image: ugiImage,
        date: "Nov 2022 - Present",
        desc: "Pursuing a degree in Computer Science, gaining knowledge in programming and engineering principles.",
        skills: ["Programming", "Problem Solving", "Collaboration", "Communication", "Leadership", "Time Management"],
 
    },
    {
        role: "Gyandeep English School",
        company: "Student",
        image: gyandeepImage,
        date: "Apr 2015 - Aug 2021",
        desc: "Completed primary and secondary education, focusing on English language skills.",
        skills: ["English Language", "Communication", "Teamwork"],
  
       
    }
];




const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "mysql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
];

export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };