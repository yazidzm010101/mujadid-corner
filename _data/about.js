import { TbBrandFlutter, TbBrandNextjs, TbBrandReact } from "react-icons/tb";

import { SiChakraui } from "react-icons/si";

const data = {
  name: "Yazid Zaidan Mujadid",
  photo: "/images/profile.png",
  photo_alt: "/images/profile-alt.jpg",
  simple_about_description:
    "I started using Linux-distribution at 15 and fell in love using it, since than I pursue my study and career as a software engineer. Matcha is one of my favorite drink beside water, i stopped drinking coffe since my business trip at Palu. Currently, I am on my self-development journey and fighting programmer bad habits stereotype. I believe programmer can also have a strong healthy body and mind.",
  about: `Already has an interest in information technology since
    high school and graduated from Gunadarma University in
    2021. During college, contributed to a computer
    laboratory and learned web programming from PHP to
    Javascript. Gained first work experience at Pt. Jojo
    Nomic Indonesia and are now looking for a new
    opportunity as a Front-end Web Developer.`,
  latest_interest: [
    {
      name: "React.js",
      icon: TbBrandReact,
      color: "blue.500",
    },
    {
      name: "Chakra UI",
      icon: SiChakraui,
      color: "teal.500",
    },
    {
      name: "Next.js",
      icon: TbBrandNextjs,
      color: "black.400",
    },
    {
      name: "Flutter",
      icon: TbBrandFlutter,
      color: "blue.400",
    },
  ],
};

export default data;
