import { TbBrandFlutter, TbBrandNextjs, TbBrandReact } from "react-icons/tb";

import { SiChakraui } from "react-icons/si";

const data = {
  name: "Yazid Zaidan Mujadid",
  photo: "/images/profile.png",
  photo_alt: "/images/profile-alt.jpg",
  about:
    "I started using Linux-distribution at 15 and fell in love using it, since then I pursue my study and career as a software engineer. Matcha is one of my favorite drink beside water, I stopped drinking coffe since my business trip at Palu. Currently, I am on my self-development journey and fighting programmer bad habits stereotype. I believe programmer could also have a strong healthy body and mind.",
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
