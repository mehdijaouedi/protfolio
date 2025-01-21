import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack  Developer",
      company_name: "JalyssCom",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2023 - august 2023",
      points: [
        "Worked as an intern on the development of Jalysscom, an e-commerce website.",
"Developed expertise in the following technologies and frameworks:",
"Front-end: Material-UI (MUI), Redux, React",
"Back-end: NestJS, PostgreSQL, Prisma",
"Database management: DBeaver",
"Real-time communication: Socket.io",
"Collaborated with a team to implement various features and enhance the overall functionality of the website.",
"Demonstrated exceptional dedication and commitment by working for extended hours, exceeding 14 hours per day, to meet project deadlines.",
"Displayed strong work ethic and resilience, working tirelessly day and night during the leadership period, prioritizing project success over personal rest.",
,
      ],
    },
    {
      title: "Instructor and HR ",
      company_name: "Sfectoria",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2023 - Feb 2024",
      points: [
       " Instructor (8/2023 - 10/2023):",
"Transitioned to an instructional role, providing free workshops for university students. Developed and delivered engaging sessions on HTML & CSS. Received positive feedback for fostering a collaborative learning environment.",
"HR (10/2023 - 02/2024):",
"Recruitment: Successfully recruited and onboarded more than 10 students for their PFE, ensuring a match between their skills and project requirements.",
"Onboarding: Facilitated smooth onboarding processes, providing necessary information and support to integrate students into the organization effectively.",
"Employee Relations: Cultivated positive relationships with students, addressing any concerns and fostering a conducive working environment for successful PFE completion.",

  ],
    },
    {
      title: "self-improvement",
      company_name: "Jobless",
      icon: shopify,
      iconBg: "#383E56",
      date: "Feb 2024 - August 202",
      points: [
        " I dedicated my time to self-improvement by working on my own projects to enhance my skills and deepen my knowledge in various technologies."  ],
    },
    {
      title: "Full stack Developer || Team leader",
      company_name: "Freelance",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "August 2024 - Present",
      points: [
        "Since August 2024, I have been working as a full-stack developer and team leader on various freelance projects. Due to the private nature of most of these projects, I cannot disclose all details. However, one notable project I worked on is Art Entre Nous, an exclusive e-commerce platform for a Swiss client. This project involved developing a private network for buying and selling rare art objects, featuring a secure admin dashboard built with Sanity, and leveraging technologies like React.js, NestJS, and PostgreSQL to ensure a seamless and elegant user experience.", ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };