import { Injectable } from '@angular/core';
import {
  about,
  contact,
  edu,
  info,
  leftSide,
  portfolio,
  service,
} from '../Models/info';

@Injectable({
  providedIn: 'root',
})
export class Infoservices {
  public leftSide: leftSide = {
    name: 'Bun sengtri',
    subtitle: 'Hello Im Bun sengtri',
    slogan: 'Creative Designer And Bring You perfect Work!',
  };

  public info: info = {
    titleWork: 'Frontend Development',
    description:
      'To leverage my skills in programming, graphic design, and management information systems to contribute to innovative projects that solve real-world problems. I aspire to grow as a professional in the technology and creative industries.',
    profile: '/assets/images/profiles.png',
  };

  // about

  public leftAbout: leftSide = {
    name: 'About Me',
    slogan: 'Looking For Internship...',
  };
  public about: about = {
    titleName: "Hello I'm Bun sengtri, Based in Cambodia",
    description:
      'I am a motivated and adaptable individual with a strong foundation in programming, graphic design, and communication. Currently pursuing a Bachelor’s degree in Management Information Systems (MIS), I bring creativity, problem-solving abilities, and a commitment to excellence in every project.',
    phone: '099706869',
    Nationality: 'Cambodian',
    Email: 'sengtri457@gmail.com',
    Freelancer: 'Available',
    Address: '123 Street Cambodia',
    profile: '/assets/images/pro.jpg',
    expText:
      'My experience includes developing websites, creating innovative designs, and collaborating effectively within teams to achieve goals. With a passion for technology and continuous learning, I aim to contribute my skills to drive impactful results in a dynamic work environment.',
  };
  public leftEdu: leftSide = {
    name: 'Education',
    slogan: 'My education qualification',
  };
  public leftexp: leftSide = {
    name: 'Experience',
    slogan: 'My university Experince',
  };
  public leftSkill: leftSide = {
    name: 'Skill',
    slogan: 'My expertise skills',
  };
  public leftService: leftSide = {
    name: 'My Servies',
    slogan: 'What I do for you',
  };
  public leftPortfolio: leftSide = {
    name: 'Portfolio',
    slogan: 'My Recent Works',
  };
  public leftContact: leftSide = {
    name: 'Contact Me',
    slogan: 'Let’s Start A New Project Together',
  };
  public edu: edu[] = [
    {
      schoolName: 'Hun sen borey 100khanag',
      title: 'High School',
      date: '2017-2023',
      description:
        'I completed my high school education here, where I built a strong foundation in science, math, and technology. This period also helped me develop discipline and teamwork through school projects and activities.',
    },
    {
      schoolName: 'American NorthBridge',
      title: 'English Program',
      date: '2017-2023',
      description:
        'I studied English to improve my communication and writing skills. The program focused on grammar, speaking, and comprehension, which helped me gain confidence in using English in both academic and real-life settings.',
    },
    {
      schoolName: 'Setec Institude',
      title: 'University',
      date: '2024-Now',
      description:
        'I’m currently pursuing my degree at Setec Institute, majoring in Information Technology. Here, I’m learning web development, database design, and project management to prepare for a future in tech.',
    },
  ];
  public exp: edu[] = [
    {
      schoolName: 'Setec Institude',
      title: 'Graphic Design',
      date: 'Year 1-2',
      description:
        'Design Many Poster Like: Smart Poster, Khmer New Years water Festival, Leaflet, UX/UI Phone ,Brochure ,Banner Name Card, Caltex Logo, Hotel Promotion Poster etc',
    },
    {
      schoolName: 'Setec Institude',
      title: 'Web Development',
      date: 'Year 1-2',
      description:
        'Building Ecommerce website using Modern Framework Angular (burger Coffee Shop Bread Car Shop),Portfolio Website And Clone University Website (Aupp) Loan-System.',
    },
    {
      schoolName: 'Setec Institude',
      title: 'Consolel System',
      date: 'Year 1-2',
      description:
        'Building POS-System Loan-System Consumption-System Student-Management All Using C++ And C#',
    },
    {
      schoolName: 'Setec Institude',
      title: 'API',
      date: 'Year 2',
      description: 'Building Fast API with .Net , NodeJS , ExpressJS',
    },
    {
      schoolName: 'Setec Institude',
      title: 'Databse',
      date: 'Year 2',
      description: 'Building Cargarage Management With MEAN STACK',
    },
  ];
  public srvice: service[] = [
    {
      ServiceName: 'Web Design',
      icon: 'fas fa-bezier-curve fa-3x',
      description:
        'We create clean, modern, and user-focused designs that bring your ideas to life. Our goal is to make every page visually appealing and easy to use.',
      subicon: 'fa fa-check me-2',
      subdescription: 'UI/UX Design',
      subdescription2: 'Visual Branding',
      subdescription3: 'Responsive Layouts',
    },
    {
      ServiceName: 'Web Development',
      icon: 'fas fa-laptop-code fa-3x',
      description:
        'We build fast, secure, and responsive websites using the latest technologies. From front-end to back-end, we make sure everything runs smoothly.',
      subicon: 'fa fa-check me-2',
      subdescription: 'Front-End Coding',
      subdescription2: 'Back-End Integration',
      subdescription3: 'Performance',
    },
    {
      ServiceName: 'Database Design',
      icon: 'fa-solid fa-database fa-3x',
      description:
        'We design efficient and scalable databases to store and manage your data safely. Our structure ensures speed, reliability, and easy access to information.',
      subicon: 'fa fa-check me-2',
      subdescription: 'Data Modeling',
      subdescription2: 'Query Optimization',
      subdescription3: 'Security & Backup',
    },
  ];

  public portfolio: portfolio[] = [
    {
      id: 1,
      projectName: 'Bread Shop',
      link: 'https://github.com/sengtri457/BreadShop',
      pic: '/assets/images/bakery.webp',
      desription:
        'we Integration With static website Just For Practice First Project.',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 2,
      projectName: 'Coffee Shop',
      link: 'https://github.com/sengtri457/CoffeeKtri.github.io',
      pic: '/assets/images/coffee-.webp',
      desription:
        'we Integration With static website Just For Practice Second Project.',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 3,
      projectName: 'Car Shop ',
      link: 'https://github.com/sengtri457/CarShop',
      pic: '/assets/images/car.webp',
      desription:
        'we Integration With static website Just For Practice Third Project.',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 4,
      projectName: 'water Shop ',
      link: 'https://github.com/sengtri457/WaterShop',
      pic: '/assets/images/drinking.webp',
      desription: 'More Dynamic With this Project For JS Functionality',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 5,
      projectName: 'Burger Shop ',
      link: 'https://github.com/sengtri457/BreadShop',
      pic: '/assets/images/food.webp',
      desription: 'Some Static website With Modern Design',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 6,
      projectName: 'Hospital Management System',
      link: 'https://github.com/sengtri457/hospital',
      pic: '/assets/images/hospital.webp',
      desription: 'Static website With Modern Design',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 7,
      projectName: 'Business Consultancy ',
      link: 'https://github.com/sengtri457/bussnieus.github.io',
      pic: '/assets/images/consultancy.webp',
      desription: 'Static website With Modern Design',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 8,
      projectName: 'Project 2',
      link: 'https://example.com/project1',
      pic: '/assets/images/vegetable.webp',
      desription: 'Description for Project 1',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 9,
      projectName: 'AI Project',
      link: 'https://github.com/sengtri457/AI',
      pic: '/assets/images/ai.webp',
      desription: 'Fully Responsive Website Using JS',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 10,
      projectName: 'Aupp Clone',
      link: 'https://github.com/sengtri457/AuppClone',
      pic: '/assets/images/aupp.png',
      desription: 'Clone Fully Responsive Website For Aupp University',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 11,
      projectName: 'Ecommerce Js',
      link: 'https://github.com/sengtri457/EcommerceJs',
      pic: '/assets/images/Ecomerce.png',
      desription: 'Fully Functional Ecommerce Website Using JS',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 12,
      projectName: 'Education website',
      link: 'https://github.com/sengtri457/WebTeam',
      pic: '/assets/images/CodeMaster.png',
      desription: 'Staic Website For Education Center',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 13,
      projectName: 'Loan System',
      link: 'https://github.com/sengtri457/LoanMidterm',
      pic: '/assets/images/Loan.png',
      desription: 'Dynamic Loan System Using Angular JS',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },

    {
      id: 14,
      projectName: 'Men Clothing Shop ',
      link: 'https://github.com/sengtri457/MenClothing',
      pic: '/assets/images/Men.png',
      desription:
        'Local Storage And Login Session With Fully orders And Integration Receipt with Telegram API',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 15,
      projectName: 'Portfolio CommandLine',
      link: 'https://github.com/sengtri457/PortfolioCommand',
      pic: '/assets/images/port.png',
      desription: 'Inspired From Command Line',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 16,
      projectName: 'POS Window Forms App',
      link: 'https://github.com/sengtri457/CsharpBackend_POS',
      pic: '/assets/images/Csharp.png',
      desription: 'Using C# Connected With SQL Server And Deployed',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 17,
      projectName: 'Car Garage Management',
      link: 'https://github.com/sengtri457/CareGarageManagement',
      pic: '/assets/images/CarMean.png',
      desription: 'Using MEAN STACK To Build Fullstack Car Garage Management',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
    {
      id: 18,
      projectName: 'API with .Net',
      link: 'https://github.com/sengtri457/API_SchoolManagementC-',
      pic: '/assets/images/API.png',
      desription: 'Building  RestFul API with .Net Intergration Swagger ',
      title: 'Title for Project 1',
      icon: 'fa-solid fa-eye',
    },
  ];

  public contactInfo: contact = {
    description:
      'I am available for freelance work. Connect with me via and call in to my account.',
    Address: '123 Street, Cambodia',
    Email: 'sengtri457@gmail.com',
    Phone: '+099 706 869',
    icon: 'fa-solid fa-envelope',
  };
}
