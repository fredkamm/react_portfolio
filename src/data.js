//  icons
import {
  FiLinkedin,
  FiGithub,
  FiYoutube,
  FiInstagram,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// companies icons
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverrBrandIcon from "./assets/img/brands/fiverr.png";

// projects images
import WeatherApp from "./assets/img/projects/Weather.png";
import ChatApp from "./assets/img/projects/ChatApp.png";
import Password from "./assets/img/projects/Password.png";
import AnimeList from "./assets/img/projects/AnimeList.png";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";

// skills images
import HTML from "./assets/img/skills/html.png";
import CSS from "./assets/img/skills/css.png";
import JavaScript from "./assets/img/skills/javascript.png";
import Mongo from "./assets/img/skills/mongo.png";
import Reactjs from "./assets/img/skills/react.png";
import Nodejs from "./assets/img/skills/node.png";
import Tailwind from "./assets/img/skills/tailwind.png";


// testimonial images
import RyanDeLong from "./assets/img/testimonials/RyanDeLong.png";
import JoeLutz from "./assets/img/testimonials/Lutz.png";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/fred-kamm-370070244/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/fredkamm",
  },
  {
    icon: <FiYoutube />,
    href: "",
  },
  {
    icon: <FiInstagram />,
    href: "",
  },
];

// companies
export const brands = [
  {
    img: UpworkBrandIcon,
    href: "https://www.upwork.com/freelancers/~0118d13665becb65b5?viewMode=1",
  },
  {
    img: FiverrBrandIcon,
    href: "https://www.fiverr.com/fred_kamm?up_rollout=true",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: WeatherApp,
    href:"https://fredkammweatherapp.netlify.app/",
    name: "Weather App",
    description:"A basic weather application that retrieves information about the local weather in any city in the world.",
    category: "UI/UX design",
  },
  {
    id: "2",
    image: ChatApp,
    href:"https://chat-app-a9849.firebaseapp.com/",
    name: "The Chat App",
    description:"With the use of Firebase as the database, users can sign in with their Google accounts through a messaging app.",
    category: "web development",
  },
  {
    id: "3",
    image: Password,
    href:"https://fredspasswordgenerator.netlify.app/",
    name: "Password Generator",
    description:"An easy to use password generator that will quickly generate a safe and secure password for you.",
    category: "web development",
  },
  {
    id: "4",
    image: AnimeList,
    href:"https://aaansari123.github.io/Anime-List/",
    name: "Anime List",
    description:"This application allows users to search for any anime they want and display important information about it so that users can determine if it is worth watching.",
    category: "web development",
  },
  {
    id: "5",
    image: Project5,
    href:"",
    name: "project name 5",
    description:"",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    href:"",
    name: "project name 6",
    description:"",
    category: "web development",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
];

// skills
export const skills = [
  {
    image: HTML,
  },
  {
    image: CSS,
  },
  {
    image: JavaScript,
  },
  {
    image: Reactjs,
  },
  {
    image: Tailwind,
  },
  {
    image: Nodejs,
  },
  {
    image: Mongo,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: RyanDeLong,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Ryan DeLong",
    authorPosition: "General Manager, Outdoor Living Supply",
  },
  {
    authorImg: JoeLutz,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Joseph Lutz",
    authorPosition: "General Dentist, Philadelphia",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at fred.kamm95@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Bucks County, Pennsylvania",
    description: "Serving clients nationwide",
  },
];
