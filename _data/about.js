import { SiChakraui } from "react-icons/si";
import { TbBrandNextjs, TbBrandFlutter, TbBrandReact } from "react-icons/tb";

const data = {
  name: "Yazid Zaidan Mujadid",
  photo: "/images/profile.png",
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
