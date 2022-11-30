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
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverrBrandIcon from "./assets/img/brands/fiverr.png";

// projects images
import Project1 from "./assets/img/projects/p1.webp";
import Project2 from "./assets/img/projects/p2.webp";
import Project3 from "./assets/img/projects/p3.webp";
import Project4 from "./assets/img/projects/p4.webp";
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
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
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
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverrBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    href:"",
    name: "project name 1",
    category: "UI/UX design",
  },
  {
    id: "2",
    image: Project2,
    href:"",
    name: "project name 2",
    category: "web development",
  },
  {
    id: "3",
    image: Project3,
    href:"",
    name: "project name 3",
    category: "UI/UX design",
  },
  {
    id: "4",
    image: Project4,
    href:"",
    name: "project name 4",
    category: "web development",
  },
  {
    id: "5",
    image: Project5,
    href:"",
    name: "project name 5",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    href:"",
    name: "project name 6",
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
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
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
