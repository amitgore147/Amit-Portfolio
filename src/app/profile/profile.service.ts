import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  projects: any = [
    {
      id: 1,
      title:
        'The Hotel Management is a web-based application built using Spring Boot',
      desc: '',
      livedemo: 'https://github.com/amitgore147/LakeSide-Hotel',
      githurl: 'https://github.com/amitgore147/LakeSide-Hotel',
      imgUrl: 'assets/images/LakeSide-Hotel.png',
      tech: 'MySQL, Java, Spring Boot, Spring Data JPA',
    },
    {
      id: 2,
      title:
        'The E-Commerce is a web-based application built using Spring Boot Micro-Services',
      desc: '',
      livedemo: 'https://github.com/amitgore147/Ecommerce-MicroServices',
      githurl: 'https://github.com/amitgore147/Ecommerce-MicroServices',
      imgUrl: 'assets/images/Product-Management-System.png',
      tech: 'MySQL, Java, Spring Boot, Spring Data JPA, Micro-Services',
    },
    {
      id: 3,
      title:
        'The Portfolio is a web-based application built using Angular , HTML, CSS, TypeScript',
      desc: '',
      livedemo: 'https://amitgore147.github.io/Amit-Portfolio/',
      githurl: 'https://github.com/amitgore147/Amit-Portfolio',
      imgUrl: 'assets/images/Portfolio.png',
      tech: 'Angular , HTML, CSS, JavaScript, TypeScript',
    },
    {
      id: 4,
      title:
        'The E-Comm is a e-commerce website built using Angular , HTML, CSS, TypeScript',
      desc: '',
      livedemo: 'https://amitgore147.github.io/Angular-Ecomm/',
      githurl: 'https://github.com/amitgore147/Angular-Ecomm',
      imgUrl: 'assets/images/EcommProject.png',
      tech: 'Angular , HTML, CSS, JavaScript, TypeScript, JSON server',
    },
    {
      id: 5,
      title:
        'A simple and classic implementation of the Tic Tac Toe (X and O) game in HTML, CSS, JavaScript.',
      desc: '',
      livedemo: 'https://amitgore147.github.io/Tic-Tac-Toe/',
      githurl: 'https://github.com/amitgore147/Tic-Tac-Toe',
      imgUrl: 'assets/images/Tic-Tac-Toe-Github.png',
      tech: 'HTML, CSS, JavaScript                                                ',
    },

    {
      id: 6,
      title:
        'A landing page inspired by the design of Amazon. Built with HTML, CSS.',
      desc: '',
      livedemo: 'https://amitgore147.github.io/Amazon-Clone/',
      githurl: 'https://github.com/amitgore147/Amazon-Clone',
      imgUrl: 'assets/images/Amazon-Github.png',
      tech: 'HTML, CSS',
    },

    {
      id: 7,
      title:
        'The Rock Paper Scissors is a web-based application built using HTML, CSS, TypeScript',
      desc: '',
      livedemo: 'https://amitgore147.github.io/Rock-Paper-Scissors/',
      githurl: 'https://github.com/amitgore147/Rock-Paper-Scissors',
      imgUrl: 'assets/images/Rock-Paper-Scissors-Game.png',
      tech: 'HTML, CSS, JavaScript',
    }
  ];

  about2 = `Java Developer with 3 years of experience in back-end development .
  Have good understanding of MySQL, Core Java, Spring Boot, Spring Data JPA, Micro-Services, JUnit, AWS, Git and GitHub .
  Experienced in collaborating with cross-functional teams to deliver high-quality code .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies`;

  about ='';
    // 'Lover of innovation and everything related to generate new knowledge. Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.';
  resumeurl =
    'https://drive.google.com/file/d/16wlRkf_ovxqVy4qGRIIfB_HWuu9QoVrg/view?usp=sharing';

  skillsData: any = [
    {
      id: '1',
      skill: 'MySQL',
      progress: '85%',
    },
    {
      id: '2',
      skill: 'Core Java',
      progress: '85%',
    },
    {
      id: '3',
      skill: 'Spring Boot',
      progress: '85%',
    },
    {
      id: '4',
      skill: 'Spring Data JPA',
      progress: '85%',
    },
    {
      id: '5',
      skill: 'Micro-Services',
      progress: '85%',
    },
    {
      id: '6',
      skill: 'REST APIs',
       progress: '85%',
    },
    {
      id: '7',
      skill: 'JUnit',
       progress: '85%',
    },
    {
      id: '8',
      skill: 'AWS',
       progress: '85%',
    },
    {
      id: '9',
      skill: 'Git',
      progress: '85%',
    },
    {
      id: '10',
      skill: 'GitHub',
      progress: '85%',
    },
    {
      id: '11',
      skill: 'Agile',
      progress: '85%',
    },
    {
      id: '11',
      skill: 'JIRA',
      progress: '85%',
    }
  ];

  educationData: any = [
    {
      id: '1',
      from_to_year: '2017 - 2021',
      education: "Bachelor's Degree",
      stream: 'Bachelor of Engineering',
      info: `
Completed B.E in Civil Engineering with 9.70 CGPA.`,
      institution: 'SVERI College of Engineering, Pandharpur',
    },
    {
      id: '2',
      from_to_year: '2015 - 2017',
      education: 'Higher Secondary',
      stream: 'Science and Mathematics',
      institution: 'Netaji College, Mohol',
      info: `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 83.69%.`,
    },
    {
      id: '3',
      from_to_year: '2014 - 2015',
      education: 'Secondary  School',
      stream: 'Science and Mathematics',
      institution: 'Jagadamba Vidyalaya, Pokharapur',
      info: `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84.60%.`,
    },
  ];
  exprienceData: any = [
    {
      id: 1,
      company: 'Infosys',
      location: 'Pune',
      timeline: 'Oct 2021 to Present',
      role: 'Software Developer',
      work: 'Working as a Java Backend Developer . Developed and maintained RESTful APIs using Spring Boot to facilitate communication between client applications and the server . Integrated MySQL for efficient data storage and retrieval, optimizing database queries and indexing . Developed and maintained microservices using Spring Cloud, ensuring modular and scalable architecture . Participated in Agile development processes, including sprint planning, daily standups, and retrospectives . Utilized Git and GitHub for version control and collaboration',
    },
  ];

  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    debugger
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
