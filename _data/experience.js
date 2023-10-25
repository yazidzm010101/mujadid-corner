import {
  BsBootstrap,
  BsDatabase,
  BsFiletypeHtml,
  BsWindowDock,
} from "react-icons/bs";
import { DiJava, DiMaterializecss } from "react-icons/di";
import {
  FaChalkboardTeacher,
  FaHandsHelping,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { MdCss, MdWeb } from "react-icons/md";
import {
  SiAndroid,
  SiAntdesign,
  SiFirebase,
  SiGradle,
  SiJquery,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandLaravel, TbBrandMysql, TbSettings2 } from "react-icons/tb";

import { AiOutlineTeam } from "react-icons/ai";
import { BiBrain } from "react-icons/bi";
import { BiCodeBlock } from "react-icons/bi";
import { HiDocumentReport } from "react-icons/hi";
import { IoLogoJavascript } from "react-icons/io";

const data = [
  {
    name: "Lepkom",
    image:
      "https://vm.lepkom.gunadarma.ac.id/assets/front/images/logo-lepkom.png",
    experiences: [
      {
        categoryColor: "gray",
        category: "2018-2019",
        title: "Assistant",
        description:
          "Learn and practice the course material beforehand to be well-prepared for assisting both participants and the instructor",
        skills: [
          {
            name: "Desktop Programming",
            icon: BsWindowDock,
            color: "green",
          },
          { name: "Web Programming", icon: MdWeb, color: "blue" },
          { name: "DBMS", icon: BsDatabase, color: "orange" },
          {
            name: "Helping Initiative",
            icon: FaHandsHelping,
            color: "pink",
          },
        ],
      },
      {
        categoryColor: "gray",
        category: "2019-2020",
        title: "Instructor",
        description:
          "Guides participants based on course materials, assisting them to find the answers during practice, so they can complete quizzes and exams before grading",
        skills: [
          {
            name: "Desktop Programming",
            icon: BsWindowDock,
            color: "green",
          },
          { name: "Web Programming", icon: MdWeb, color: "blue" },
          {
            name: "Public Speaking",
            icon: FaChalkboardTeacher,
            color: "pink",
          },
        ],
      },
      {
        categoryColor: "gray",
        category: "2020-2022",
        title: "Supervisor",
        description:
          "Coordinates with tutor, assistant to ensure the course session executed by following the standarized producedure",
        skills: [
          {
            name: "Grade Reporting",
            color: "red",
            icon: HiDocumentReport,
          },
          {
            name: "Attendance Reporting",
            color: "red",
            icon: HiDocumentReport,
          },
          {
            name: "Team Collaboration",
            icon: AiOutlineTeam,
            color: "purple",
          },
        ],
      },
    ],
  },
  {
    name: "PT. PowerNET Indosolusi",
    image: "https://powernet.co.id/assets/img/logo1.png",
    experiences: [
      {
        categoryColor: "gray",
        category: "2019-2020",
        title: "Company Profile",
        description:
          "Redesign company profile for PT. PowerNet Indosolution at powernet.co.id using HTML, CSS, Bootstrap, Jquery, and AOS.js",
        skills: [
          {
            name: "HTML",
            icon: BsWindowDock,
            color: "green",
          },
          { name: "CSS", icon: MdCss, color: "blue" },
          { name: "Bootstrap", icon: BsBootstrap, color: "purple" },
          {
            name: "JQuery",
            icon: SiJquery,
            color: "blue",
          },
          {
            name: "AOS.js",
            icon: IoLogoJavascript,
            color: "orange",
          },
        ],
      },
      {
        categoryColor: "gray",
        category: "Jun-Jul 2020",
        title: "Object Research Indonesia - IQVIA",
        description:
          "2020 Hospital/laboratory revenue survey taking & monitoring",
        skills: [
          {
            name: "Laravel",
            icon: TbBrandLaravel,
            color: "red",
          },
          { name: "Bootstrap", icon: BsBootstrap, color: "blue" },
          {
            name: "SCSS",
            icon: FaSass,
            color: "pink",
          },
          {
            name: "JQuery",
            icon: SiJquery,
            color: "orange",
          },
        ],
      },
      {
        categoryColor: "gray",
        category: "Jul-Aug 2020",
        title: "Object Research Indonesia - IMS",
        description: "2020 Medical device revenue survey taking & monitoring",
        skills: [
          {
            name: "Laravel",
            icon: TbBrandLaravel,
            color: "red",
          },
          { name: "Materialize.css", icon: DiMaterializecss, color: "pink" },
          {
            name: "Chart.js",
            icon: IoLogoJavascript,
            color: "orange",
          },
          {
            name: "SCSS",
            icon: FaSass,
            color: "pink",
          },
          {
            name: "JQuery",
            icon: SiJquery,
            color: "orange",
          },
        ],
      },
    ],
  },
  {
    name: "Jojonomic",
    image:
      "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-banner-pic/45236c0777b6054b3421b85b7ede3367.png",
    experiences: [
      {
        category: "Feb-Mar 2022",
        categoryColor: "gray",
        title: "Dynamic Reporting",
        description:
          "Creates visual programming to generates various reports for Human Capital Management System at one of Bank Pembangunan Daerah in Indonesia",
        skills: [
          {
            name: "Officeless",
            icon: TbSettings2,
            color: "blue",
          },
          {
            name: "Visual Programming",
            icon: BiCodeBlock,
            color: "teal",
          },
          {
            name: "Javascript",
            icon: IoLogoJavascript,
            color: "yellow",
          },
          {
            name: "Postman",
            icon: SiPostman,
            color: "orange",
          },
        ],
      },
      {
        category: "May-Jul 2022",
        categoryColor: "gray",
        title: "Office Booking System",
        description:
          "Develops office booking system on top Jojonomic Officeless Platform using javascript visual programming at one of Insurance Company in Jakarta",
        skills: [
          {
            name: "Officeless",
            icon: TbSettings2,
            color: "blue",
          },
          {
            name: "Visual Programming",
            icon: BiCodeBlock,
            color: "teal",
          },
          {
            name: "Javascript",
            icon: IoLogoJavascript,
            color: "yellow",
          },
          {
            name: "Postman",
            icon: SiPostman,
            color: "orange",
          },
        ],
      },
      {
        category: "2022-2023",
        categoryColor: "gray",
        title: "Expense Management System",
        description:
          "Built, deliver, and maintain expense management system for Geothermal Energy Company in Java answering their different cases accross different units",
        skills: [
          {
            name: "Officeless",
            icon: TbSettings2,
            color: "blue",
          },
          {
            name: "Visual Programming",
            icon: BiCodeBlock,
            color: "teal",
          },
          {
            name: "Javascript",
            icon: IoLogoJavascript,
            color: "yellow",
          },
          {
            name: "Postman",
            icon: SiPostman,
            color: "orange",
          },
          {
            name: "Business Consultant",
            icon: BiBrain,
            color: "pink",
          },
        ],
      },
      {
        category: "May-Aug 2023",
        categoryColor: "gray",
        title: "Company KPI Ranking",
        description:
          "Join development for insurance, guarantee, and investment company group ranking system on top of officeless platform. Answering technical gap that natively had to store hundred columns into more simplified design by implementing dynamic fields. Implement custom user controlled formulation for KPI calculation. Help font-end team to consume statistical data by providing it's API",
        skills: [
          {
            name: "Officeless",
            icon: TbSettings2,
            color: "blue",
          },
          {
            name: "Visual Programming",
            icon: BiCodeBlock,
            color: "teal",
          },
          {
            name: "Javascript",
            icon: IoLogoJavascript,
            color: "yellow",
          },
          {
            name: "Postman",
            icon: SiPostman,
            color: "orange",
          },
          {
            name: "SQL",
            icon: TbBrandMysql,
            color: "blue",
          },
        ],
      },
    ],
  },
  {
    name: "Majujaya Karya Indonesia",
    image: "/images/experience-mki.png",
    experiences: [
      {
        categoryColor: "gray",
        category: "Jan-Apr 2022",
        title: "FibeArt Trans Network - GudangKita",
        description:
          "Develop mobile application for Inventory management and transport document for PT. FibeArt Trans Network",
        skills: [
          {
            name: "Android Studio",
            icon: SiAndroid,
            color: "green",
          },
          { name: "Java", icon: DiJava, color: "red" },
          { name: "Retrofit", icon: SiGradle, color: "blue" },
        ],
      },
      {
        categoryColor: "gray",
        category: "Feb-Mar 2022",
        title: "IMM Kemensos",
        description:
          "Contribute to maintain layout and chart components for Indonesia Media Monitoring Kemensos tendering project covering dashboard for news monitoring, scraping, and analytics",
        skills: [
          {
            name: "React.js",
            icon: FaReact,
            color: "blue",
          },
          { name: "Next.js", icon: SiNextdotjs, color: "gray" },
          { name: "AntDesign", icon: SiAntdesign, color: "red" },
          {
            name: "Chart.js",
            icon: IoLogoJavascript,
            color: "pink",
          },
          {
            name: "SWR",
            icon: IoLogoJavascript,
            color: "orange",
          },
        ],
      },
      {
        categoryColor: "gray",
        category: "May-Jul 2022",
        title: "TPQ Homepage",
        description:
          "Develop front-end application for Taman Pendidikan Al-Qur'an El-Rahmah Tangerang Selatan homepage including news, learning center, gallery, and activities",
        skills: [
          {
            name: "React.js",
            icon: FaReact,
            color: "blue",
          },
          { name: "Next.js", icon: SiNextdotjs, color: "gray" },
          { name: "AntDesign", icon: SiAntdesign, color: "pink" },
          { name: "Tailwind", icon: SiTailwindcss, color: "teal" },
          { name: "Firestore", icon: SiFirebase, color: "red" },
        ],
      },
    ],
  },
];

export default data;
