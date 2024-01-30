import React from "react";
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { MdAssessment, MdDashboard, MdGroup } from "react-icons/md";

const SidebarElementsData = [
  {
    title: "Home",
    icon: <AiFillHome />,

    link: "/",
  },
  {
    title: "MailBox",
    icon: <AiFillMail />,
    link: "/",
  },
  {
    title: "Assessment",
    icon: <MdAssessment />,
    link: "/",
  },
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    link: "/",
  },
  {
    title: "Group",
    icon: <MdGroup />,
    link: "/",
  },
];

export default SidebarElementsData;
