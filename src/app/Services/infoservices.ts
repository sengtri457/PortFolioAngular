import { Injectable } from '@angular/core';
import { about, edu, info, leftSide, service } from '../Models/info';

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
  public edu: edu[] = [
    {
      schoolName: 'Hun sen borey 100khanag',
      title: 'High School',
      date: '2017-2023',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, a quasi velit sint atque non saepe quaerat ducimus, nobis error cupiditate, nisi repudiandae dignissimos magnam? Dicta ab possimus tempora nobis.',
    },
    {
      schoolName: 'American NorthBridge',
      title: 'English Program',
      date: '2017-2023',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, a quasi velit sint atque non saepe quaerat ducimus, nobis error cupiditate, nisi repudiandae dignissimos magnam? Dicta ab possimus tempora nobis.',
    },
    {
      schoolName: 'Setec Institude',
      title: 'University',
      date: '2024-Now',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, a quasi velit sint atque non saepe quaerat ducimus, nobis error cupiditate, nisi repudiandae dignissimos magnam? Dicta ab possimus tempora nobis.',
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      subicon: 'fa fa-check me-2',
      subdescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
      ServiceName: 'Web Development',
      icon: 'fas fa-laptop-code fa-3x',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      subicon: 'fa fa-check me-2',
      subdescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
      ServiceName: 'Database Design',
      icon: 'fa-solid fa-database fa-3x',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      subicon: 'fa fa-check me-2',
      subdescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
  ];
}
