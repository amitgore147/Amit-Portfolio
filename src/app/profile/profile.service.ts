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
        'The Portfolio is a web-based application built using Angular , HTML, CSS, TypeScript',
      desc: '',
      livedemo: 'https://amitgore147.github.io/Amit-Portfolio/',
      githurl: 'https://github.com/amitgore147/Amit-Portfolio',
      imgUrl: 'assets/images/Portfolio.png',
      tech: 'Angular , HTML, CSS, JavaScript, TypeScript',
    },
    {
      id: 2,
      title:
        'The E-Comm is a e-commerce website built using Angular , HTML, CSS, TypeScript',
      desc: '',
      livedemo: 'https://amitgore147.github.io/Angular-Ecomm/',
      githurl: 'https://github.com/amitgore147/Angular-Ecomm',
      imgUrl: 'assets/images/EcommProject.png',
      tech: 'Angular , HTML, CSS, JavaScript, TypeScript, JSON server',
    },

    {
      id: 3,
      title:
        'A simple and classic implementation of the Tic Tac Toe (X and O) game in HTML, CSS, JavaScript.',
      desc: '',
      livedemo: 'https://amitgore147.github.io/Tic-Tac-Toe/',
      githurl: 'https://github.com/amitgore147/Tic-Tac-Toe',
      imgUrl: 'assets/images/Tic-Tac-Toe-Github.png',
      tech: 'HTML, CSS, JavaScript                                                ',
    },

    {
      id: 4,
      title:
        'A landing page inspired by the design of Amazon. Built with HTML, CSS.',
      desc: '',
      livedemo: 'https://amitgore147.github.io/Amazon-Clone/',
      githurl: 'https://github.com/amitgore147/Amazon-Clone',
      imgUrl: 'assets/images/Amazon-Github.png',
      tech: 'HTML, CSS',
    },

    {
      id: 5,
      title:
        'The Rock Paper Scissors is a web-based application built using HTML, CSS, TypeScript',
      desc: '',
      livedemo: 'https://amitgore147.github.io/Rock-Paper-Scissors/',
      githurl: 'https://github.com/amitgore147/Rock-Paper-Scissors',
      imgUrl: 'assets/images/Rock-Paper-Scissors-Game.png',
      tech: 'HTML, CSS, JavaScript',
    },

    {
      id: 6,
      title:
        'The EmployeeCentral is a web-based application built using .NET Core and Angular',
      desc: '',
      livedemo: 'https://amitgore147.github.io/EmployeeCentral-Angular-Web/',
      githurl: 'https://github.com/amitgore147/EmployeeCentral-Angular-Web',
      imgUrl: 'assets/images/EmployeeCentral.png',
      tech: 'Angular 15 , ASP.NET Core, MSSQL',
    },
  ];

  about2 = `Software Developer with 2.2+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ versions, UI with Responsive Designs .
  Have good understanding of HTML, CSS, JavaScript, TypeScript, Bootstrap, Angular, MSSQL, AWS S3, Cloudfront, Git and GitHub`;

  about =
    'Lover of innovation and everything related to generate new knowledge. Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.';
  resumeurl =
    'https://drive.google.com/file/d/1dFzOdjLdLPPBNC6-7iqMMbi9d8Zc55ND/view?usp=drive_link';

  skillsData: any = [
    {
      id: '1',
      skill: 'MSSQL Server',
      progress: '85%',
    },
    {
      id: '2',
      skill: 'HTML',
      progress: '80%',
    },
    {
      id: '3',
      skill: 'CSS',
      progress: '80%',
    },
    {
      id: '4',
      skill: 'JavaScript',
      // progress: '75%',
    },
    {
      id: '5',
      skill: 'TypeScript',
      // progress: '75%',
    },
    {
      id: '6',
      skill: 'Angular',
      progress: '70%',
    },
    {
      id: '7',
      skill: 'Bootstrap',
      // progress: '75%',
    },
    {
      id: '8',
      skill: 'AWS S3',
      // progress: '75%',
    },
    {
      id: '9',
      skill: 'Cloudfront',
      progress: '70%',
    },
    {
      id: '10',
      skill: 'Git, GitHub',
      progress: '70%',
    },
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
      work: 'Working as a Angular developer . Responsible for handling the UI in Angular and Managing the api calls in DotNet Core.',
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
