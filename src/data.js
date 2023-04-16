//  icons
import {
  FiLinkedin,
  FiGithub,
  FiTwitch,
  FiLayout,
  FiSettings,
  FiPenTool,
  // FiMousePointer,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import { SiUpwork } from "react-icons/si"

// companies icons
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverrBrandIcon from "./assets/img/brands/fiverr.png";

// projects images
// import WeatherApp from "./assets/img/projects/Weather.png";
import ChatApp from "./assets/img/projects/ChatApp.png";
import Password from "./assets/img/projects/Password.png";
// import AnimeList from "./assets/img/projects/AnimeList.png";
// import ComingSoon from "./assets/img/projects/ComingSoon.png";
import TicTacToe from "./assets/img/projects/TicTacToe.png";
import Todo from "./assets/img/projects/Todo.png";
import DogWalk from "./assets/img/projects/dogWalking.png";
// import Cleaners from "./assets/img/projects/Cleaners.png";
import SVG_Gen from "./assets/img/projects/SVG_Generator.png"

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
import JeffLedford from "./assets/img/testimonials/Jeff.png";

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
    icon: <SiUpwork />,
    href: "https://www.upwork.com/freelancers/~0118d13665becb65b5",
  },
  {
    icon: <FiTwitch />,
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
    image: TicTacToe,
    href:"https://freds-tic-tac-toe.netlify.app/",
    name: "Tic Tac Toe",
    description:"Play a game of Tic-Tac-Toe!",
    category: "Front End Projects",
  },
  {
    id: "2",
    image: DogWalk,
    href:"https://thedogwalker.netlify.app/",
    name: "Dog Walking Services",
    description:"This is a landing page made for a client who has their own dog walking service. Allowing them to promote their services via the web",
    category: "Front End Projects",
  },
  {
    id: "3",
    image: SVG_Gen,
    href:"https://github.com/fredkamm/SVG-Logo-Maker",
    name: "SVG Logo Generator",
    description:"Using shapes and colors, this app gives the users the ability to create a SVG through the terminal using node.js",
    category: "Back end Projects",
  },
  {
    id: "4",
    image: Todo,
    href:"https://fredstodoapp.netlify.app/",
    name: "Todo App",
    description:"This is a simple todo list used to keep track of things that i need to accomplish.",
    category: "Front End Projects",
  },
  {
    id: "5",
    image: ChatApp,
    href:"https://chat-app-a9849.firebaseapp.com/",
    name: "The Chat App",
    description:"With the use of Firebase as the database, users can sign in with their Google accounts through this messaging app.",
    category: "Full-Stack Projects",
  },
  {
    id: "6",
    image: Password,
    href:"https://fredspasswordgenerator.netlify.app/",
    name: "Password Generator",
    description:"An easy to use password generator that will quickly generate a safe and secure password for you.",
    category: "Front End Projects",
  },
];

// projects nav bar
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Full-Stack Projects",
  },
  {
    name: "Front End Projects",
  },
  {
    name: "Back End Projects",
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
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "I thrive on bringing ideas to life using React.JS and delivering eye-catching results ahead of schedule.",
  },
  {
    icon: <FiLayout />,
    name: "UI/UX Design",
    description:
      "I designing brand identities, mobile app UI & UX, design systems, websites and graphic design for advertising",
  },
  {
    icon: <FiPenTool />,
    name: "Logo Design",
    description:
      "My logos are designed to communicate instantly, at a glance, with the people you want to reach. A logo represents you, but it is intended for your target audience.",
  },
  // {
  //   icon: <FiMousePointer />,
  //   name: "Resume Design",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  // },
];

// testimonials
export const testimonials = [
  {
    authorImg: RyanDeLong,
    authorText:
      "Fred worked closely with me every step of the way, and I appreciated his creative input that exceeded my expectations",
    authorName: "Ryan DeLong",
    authorPosition: "General Manager, Outdoor Living Supply",
  },
  {
    authorImg: JoeLutz,
    authorText:
      "It is so nice to have someone so responsive and quick to get back to me if I have questions or need to make changes.",
    authorName: "Joseph Lutz",
    authorPosition: "General Dentist, Philadelphia",
  },
  {
    authorImg: JeffLedford,
    authorText:
      "Design is one of my favorite aspects of Fred's work, as is his willingness to dig deep into understanding my business and who I need to reach..",
    authorName: "Jeffrey Ledford",
    authorPosition: "Market Advisor, Sundae",
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
