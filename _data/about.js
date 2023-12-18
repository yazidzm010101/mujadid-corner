import {
  SiAndroidstudio,
  SiBootstrap,
  SiChakraui,
  SiFirebase,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiSass,
} from "react-icons/si";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandLaravel,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
} from "react-icons/tb";

import { FaJava } from "react-icons/fa";

const data = {
  name: "Yazid Zaidan Mujadid",
  photo: "/images/profile.png",
  photo_dark: "/images/profile-dark.jpg",
  photo_alt: "/images/profile-alt.jpg",
  about:
    "I started using a Linux distribution at 15 and fell in love using it. Since then, I have pursued my studies and career as a software engineer. I stopped drinking coffee since my business trip to Palu and today matcha is one of my favorite drinks. I am on a self-development journey fighting against the bad habits of programmer-stereotype. I believe that programmers can also have a strong, healthy body, and mind.",
  latest_interest: [
    // my beginner experience
    {
      name: "HTML",
      icon: TbBrandHtml5,
      color: "red.500",
    },
    {
      name: "CSS",
      icon: TbBrandCss3,
      color: "blue.400",
    },
    {
      name: "Javascript",
      icon: TbBrandJavascript,
      color: "yellow.400",
    },
    {
      name: "jQuery",
      icon: SiJquery,
      color: "blue.400",
    },

    // css framework
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      color: "blue.400",
    },
    {
      name: "Materialize",
      color: "pink.400",
    },
    {
      name: "SCSS",
      icon: SiSass,
      color: "pink.400",
    },

    // first fullstack skills
    {
      name: "Laravel",
      icon: TbBrandLaravel,
      color: "red.400",
    },
    {
      name: "MySQL",
      icon: TbBrandMysql,
      color: "orange.400",
    },

    // frontend framework
    {
      name: "React.js",
      icon: TbBrandReact,
      color: "blue.400",
    },
    {
      name: "Tailwind",
      icon: TbBrandTailwind,
      color: "blue.400",
    },
    {
      name: "Chakra UI",
      icon: SiChakraui,
      color: "teal.500",
    },
    {
      name: "Next.js",
      icon: TbBrandNextjs,
      color: "black",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "green.400",
    },

    // mobile experience
    {
      name: "Android Studio",
      icon: SiAndroidstudio,
      color: "green.400",
    },
    {
      name: "Java",
      icon: FaJava,
      color: "red.400",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "orange.400",
    },
  ],
};

export default data;
