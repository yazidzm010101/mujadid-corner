
import { BsWindowDock, BsFiletypeHtml } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { IoLogoJavascript } from "react-icons/io";
import { BiBrain } from "react-icons/bi";
import { FaHandsHelping, FaChalkboardTeacher } from "react-icons/fa";
import { TbSettings2 } from "react-icons/tb";
import { SiPostman } from "react-icons/si";

const data = [
    {
        name: "Lepkom",
        image: "https://vm.lepkom.gunadarma.ac.id/assets/front/images/logo-lepkom.png",
        experiences: [
            {
                title: "Tutor Assistant",
                description:
                    "Assisting course tutor and helping the participants to learn and follow instructions during the session",
                skills: [
                    {
                        name: "Desktop Programming",
                        icon: BsWindowDock,
                        color: "green",
                    },
                    { name: "Web Programming", icon: MdWeb, color: "blue" },
                    {
                        name: "Helping Initiative",
                        icon: FaHandsHelping,
                        color: "pink",
                    },
                ],
            },
            {
                title: "Course Tutor",
                description:
                    "Giving guidance and instructions to course participants so they can learn from the subject and quiz during the sessions",
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
                title: "Course Coordinator",
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
        name: "Jojonomic",
        image: "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-banner-pic/45236c0777b6054b3421b85b7ede3367.png",
        experiences: [
            {
                category: "FWD Insurance",
                categoryColor: "orange",
                title: "Office Booking System",
                description:
                    "Develops office booking system on top Jojonomic Officeless Platform using javascript visual programming for FWD Issurance",
                skills: [
                    {
                        name: "Officeless",
                        icon: TbSettings2,
                        color: "blue",
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
                        name: "HTML & Officeless Report",
                        icon: BsFiletypeHtml,
                        color: "red",
                    },
                ],
            },
            {
                category: "PT. Geo Dipa Energi",
                categoryColor: "green",
                title: "Expense Management System",
                description:
                    "Builds expense management system on top Officeless Platform and directly taking role as developer also business consultant facing user requirements",
                skills: [
                    {
                        name: "Officeless",
                        icon: TbSettings2,
                        color: "blue",
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
                        name: "HTML & Officeless Report",
                        icon: BsFiletypeHtml,
                        color: "red",
                    },
                    {
                        name: "Business Consultant",
                        icon: BiBrain,
                        color: "pink",
                    },
                ],
            },
            {
                category: "PT. Indonesia Financial Group",
                categoryColor: "red",
                title: "Company KPI Ranking",
                description:
                    "Join development for IFG's child company ranking using officeless platform. Implement custom formulation and dynamic fields for KPI calculation. Help font-end team to consume statistical data by providing API",
                skills: [
                    {
                        name: "Officeless",
                        icon: TbSettings2,
                        color: "blue",
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
                category: "CIMB Niaga",
                categoryColor: "red",
                title: "SMART Expense",
                description:
                    "Join CIMB Niaga Smart Expense Management on Jojonomic Officeless Platform using Jojo Visual Programming.",
                skills: [
                    {
                        name: "Officeless",
                        icon: TbSettings2,
                        color: "blue",
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
                        name: "HTML & Officeless Report",
                        icon: BsFiletypeHtml,
                        color: "red",
                    },
                ],
            },
        ],
    },
]

export default data;