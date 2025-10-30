'use client';

import { useState, useEffect } from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from 'next/link';

const jobs = [
    {
        company: "Perficient",
        url: "https://www.perficient.com/",
        title: "Senior Software Engineer",
        startDate: "2022-11-02",
        endDate: "Current",
        description: "Works as a senior software engineer, specializing in frontend development for a product that rewards automobile sellers across multiple companies in the USA and Europe. Their expertise in frontend development and experience in a complex product make them a skilled and reliable professional.",
        technologies: ["Javascript", "React", "Typescript", "Next JS", "Jest", "Storybook"],
        metotology: ["Agile", "Scrum"],
    },
    {
        company: "1Health",
        url: "https://www.1health.io/",
        title: "Technical Lead",
        startDate: "2021-04-01",
        endDate: "2022-10-31",
        description: "Worked as a technical lead for a team of five, responsible for ensuring quality and providing guidance in the delivery of health exam results. Their experience demonstrates strong leadership skills and attention to detail in a demanding industry.",
        technologies: ["Javascript", "React", "Jest", "Python", "Django", "AWS", "PostgreSQL", "Storybook"],
        metotology: ["Agile", "Kanban"],
    },
    {
        company: "1Health",
        url: "https://www.1health.io/",
        title: "Senior Software Engineer",
        startDate: "2019-07-15",
        endDate: "2021-03-31",
        description: "Worked as a senior software engineer in a product that specializes in genetic analysis and family tree tracking. Their expertise in using artificial intelligence for data analysis and creating intuitive user interfaces showcases their skills in software development. Their ability to create interactive and user-friendly visualizations for complex data sets demonstrates their attention to detail and dedication to delivering high-quality products.",
        technologies: ["Javascript", "React", "Jest", "Python", "Django", "AWS", "PostgreSQL"],
        metotology: ["Agile", "Kanban"],
    },
    {
        company: "Open Green Road",
        url: "https://www.opengreenroad.com/",
        title: "Software Engineer",
        startDate: "2017-09-01",
        endDate: "2019-07-02",
        description: "Worked on an educational platform for companies, specializing in developing interactive user interfaces. Their experience in creating engaging interfaces showcases their expertise in software development and dedication to delivering high-quality products.",
        technologies: ["Javascript", "React", "Jest", "JQuery", "Node JS", "Express JS", "MongoDB"],
        metotology: ["Agile", "Kanban"],
    },
    {
        company: "Nursoft",
        url: "https://www.nursoft.cl/",
        title: "Software Engineer",
        startDate: "2017-04-01",
        endDate: "2017-08-20",
        description: "Worked as a software developer on various agile projects catering to different clients, providing technical support to assigned developers. Their ability to work effectively in different teams and adapt to new challenges demonstrates their skills in software development.",
        technologies: ["Javascript", "React", "Jest", "JQuery", "React Native", "Electron"],
        metotology: ["Agile", "Scrum"],
    },
    {
        company: "Mediastream",
        url: "https://www.mediastream.co/",
        title: "Jr Software Engineer",
        startDate: "2016-09-22",
        endDate: "2017-03-25",
        description: "Worked as a Junior Developer in a streaming services company catering to clients throughout Latin America. Their primary role was to support the development team with various tasks related to the visualization of content through Over the Top (OTT) platforms. Their experience in this role showcases their knowledge in software development and their ability to work effectively within a team.",
        technologies: ["Javascript", "React", "Node JS", "Express JS", "JQuery", "MongoDB"],
        metotology: ["Agile", "Scrum", "Kanban"],
    },
];

const otherExperiences = [
    {
        company: "Aevum",
        title: "Senior Frontend Developer (freelance)",
        startDate: "2022-04-01",
        url: "https://www.aevum.cl/",
        endDate: "Current",
        description: "Works as a freelance analyst specializing in investment analysis for large companies. He provides economic projections and market analysis, with a focus on user interface design for end-users. His insights help clients make informed investment decisions.",
        technologies: ["Javascript", "React", "Storybook"],
        metotology: ["Agile", "Scrum"],
    },
    {
        company: "Digital Partners",
        url: "https://www.digitalpartners.ai/",
        title: "Senior Fullstack Developer (freelance)",
        startDate: "2022-03-01",
        endDate: "2022-09-05",
        description: "Worked on a startup that provided a platform to match suppliers with businesses in need of their services. The role was to develop and ensure the delivery of a minimum viable product for the platform.",
        technologies: ["Javascript", "Vue", "JQuery", "Python", "Django", "GraphQl", "PostgreSQL"],
        metotology: ["Agile", "Scrum"],
    },
    {
        company: "4Geeks Academy",
        url: "https://www.4geeksacademy.com/",
        title: "Teacher (freelance)",
        startDate: "2021-03-01",
        endDate: "2021-12-31",
        description: "I worked as a fullstack teacher, mainly teaching technologies such as Javascript, React, Python, and Flask.",
        technologies: ["Javascript", "React", "Python", "Flask", "PostgreSQL"],
        metotology: ["online sessions"],
    },
    {
        company: "Desafío Latam",
        url: "https://www.desafiolatam.com/",
        title: "Content Creator (freelance)",
        startDate: "2019-23-08",
        endDate: "2020-04-01",
        description: "I worked as a content creator for the Desafío Latam bootcamp, creating content for the Javascript and React courses.",
        technologies: ["Javascript", "React"],
        metotology: ["online sessions"],
    }
];

const AccordionSection = ({ id, title, children, isOpen, onToggle }) => {
  return (
    <section className="bg-gray-50 rounded-lg overflow-hidden">
      <button
        onClick={() => onToggle(id)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
      >
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 flex-1">
          {title}
        </h2>
        <div className="ml-4">
          {isOpen ? (
            <FaChevronUp className="text-gray-600" />
          ) : (
            <FaChevronDown className="text-gray-600" />
          )}
        </div>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-6 pb-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default function HomePage({ params, dictionary }) {
  const { locale } = params;

  // Estado para manejar qué acordeones están abiertos
  const [accordionState, setAccordionState] = useState({
    skills: false,
    languages: false,
    education: false,
    additionalInfo: false
  });

  // Estado para detectar si estamos en mobile
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Basado en tu breakpoint desktop
    };

    // Verificar al cargar
    checkIfMobile();

    // Escuchar cambios de tamaño
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Inicializar estado de acordeones basado en el tamaño de pantalla
  useEffect(() => {
    setAccordionState({
      skills: !isMobile, // En desktop abierto, en mobile cerrado
      languages: !isMobile,
      education: !isMobile,
      additionalInfo: !isMobile
    });
  }, [isMobile]);

  // Función para toggle de acordeones
  const toggleAccordion = (section) => {
    setAccordionState(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="mx-auto px-4 tablet:px-6 desktop:px-8 py-8" style={{maxWidth: '1440px'}}>
        {/* Header Section */}
        <header className="mb-12 flex flex-col items-center">
          <div className="text-center desktop:text-left mb-8">
            <h1 className="text-4xl desktop:text-5xl font-bold text-gray-900 mb-4">
              Mauricio Del Río Zorrilla
            </h1>
            <p className="text-xl text-center text-gray-600 italic mb-6">
              Software developer, IT consultant and Human.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col tablet:flex-row tablet:items-center gap-4 text-gray-700 mb-6 justify-center desktop:justify-start">
            <div className="flex items-center justify-center tablet:justify-start gap-2">
              <span className="font-semibold">Open to work:</span>
              <span>Working From Home (Global)</span>
            </div>
            <div className="hidden tablet:block text-gray-400">•</div>
            <div className="text-center tablet:text-left">+56 9 3333 9394</div>
            <div className="hidden tablet:block text-gray-400">•</div>
            <div className="text-center tablet:text-left">mauricio.delr@gmail.com</div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center desktop:justify-start gap-4">
            <Link 
              href="https://www.linkedin.com/in/mauricio-del-r%C3%ADo-a4b1a98b/" 
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <AiFillLinkedin size={32}/>
            </Link>
            <Link 
              href="https://github.com/mauriciodelrio" 
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <AiFillGithub size={32}/>
            </Link>
            <Link 
              href="https://gitlab.com/mauricio.delr" 
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <AiFillGitlab size={32}/>
            </Link>
          </div>
        </header>

        {/* Content Layout */}
        <div className="flex flex-col desktop:flex-row gap-12 items-start">
          {/* Sidebar */}
          <aside className="desktop:w-1/3 w-full desktop:sticky desktop:top-8 space-y-8">
            {/* Skills Section */}
            <AccordionSection 
              id="skills" 
              title="Skills" 
              isOpen={accordionState.skills}
              onToggle={toggleAccordion}
            >
              <div className="space-y-3">
                {[
                  { skill: "Javascript", rating: 5 },
                  { skill: "React", rating: 5 },
                  { skill: "Redux", rating: 5 },
                  { skill: "Hooks", rating: 5 },
                  { skill: "Typescript", rating: 5 },
                  { skill: "Tailwind", rating: 5 },
                  { skill: "UI Frameworks", rating: 5 },
                  { skill: "Next JS", rating: 5 },
                  { skill: "Node JS", rating: 5 },
                  { skill: "HTML", rating: 5 },
                  { skill: "CSS", rating: 5 },
                  { skill: "Express JS", rating: 5 },
                  { skill: "JQuery", rating: 5 },
                  { skill: "Agile", rating: 5 },
                  { skill: "Leadership", rating: 5 },
                  { skill: "Storybook", rating: 4 },
                  { skill: "PostgreSQL", rating: 4 },
                  { skill: "Jest", rating: 4 },
                  { skill: "React Testing Library", rating: 4 },
                  { skill: "TDD", rating: 3 },
                  { skill: "MySQL", rating: 3 },
                  { skill: "Electron", rating: 3 },
                  { skill: "Sequelize", rating: 3 },
                  { skill: "Python", rating: 3 },
                  { skill: "Django", rating: 3 },
                  { skill: "Mongo DB", rating: 3 },
                  { skill: "Mongoose", rating: 2 },
                  { skill: "React Native", rating: 2 },
                  { skill: "Prisma", rating: 2 },
                  { skill: "AWS", rating: 2 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">{item.skill}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-3 h-3 ${
                            i < item.rating ? 'text-gray-800' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionSection>

            {/* Languages Section */}
            <AccordionSection 
              id="languages" 
              title="Languages" 
              isOpen={accordionState.languages}
              onToggle={toggleAccordion}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Spanish</span>
                  <div className="flex items-center justify-end gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-3 h-3 text-gray-800" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">Native</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">English</span>
                  <div className="flex items-center justify-start gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`w-3 h-3 ${i < 4 ? 'text-gray-800' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">IELTS B2</span>
                  </div>
                </div>
              </div>
            </AccordionSection>

            {/* Education Section */}
            <AccordionSection 
              id="education" 
              title="Education" 
              isOpen={accordionState.education}
              onToggle={toggleAccordion}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Universidad Técnica Federico Santa María</h3>
                  <p className="text-gray-600 text-sm">Ingeniería Civil Informática</p>
                  <p className="text-gray-500 text-xs">2010 - 2015 (Incomplete)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Universidad de Santiago de Chile</h3>
                  <p className="text-gray-600 text-sm">Bachelor Degree on Computer Science</p>
                  <p className="text-gray-500 text-xs">2015 - 2020 (Incomplete)</p>
                </div>
              </div>
            </AccordionSection>

            {/* Additional Info */}
            <AccordionSection 
              id="additionalInfo" 
              title="Additional Info" 
              isOpen={accordionState.additionalInfo}
              onToggle={toggleAccordion}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Salary Range</h3>
                  <p className="text-gray-600">USD 75,000 - USD 120,000 /Yr</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Possible Relocation</h3>
                  <p className="text-gray-600">Yes: CA, NZ (not mandatory)</p>
                </div>
              </div>
            </AccordionSection>
          </aside>

          {/* Main Content */}
          <div className="desktop:w-2/3 w-full space-y-12">
            {/* Overview Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
                Overview
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mauricio is an experienced software developer with over 8 years of experience in the industry. 
                  With a strong focus on Javascript technologies and frameworks, Mauricio has worked on challenging 
                  projects across various industries, including software factories, education products, streaming, 
                  and health and wellness.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In addition to their software development expertise, Mauricio is also a passionate instructor who 
                  has worked as a bootcamp teacher, sharing their knowledge and expertise with the next generation 
                  of professionals. Their dedication to teaching and mentoring demonstrates their commitment to 
                  helping others succeed in their careers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Overall, Mauricio is a talented and dedicated individual with a wealth of experience in the software 
                  industry. Their passion for teaching and mentoring, combined with their desire for personal and 
                  professional growth, make them a valuable asset to any team.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
                Experience
              </h2>
              <div className="space-y-8">
                {jobs.map((job, index) => (
                  <article key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col tablet:flex-row tablet:items-start tablet:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{job.company}</h3>
                        <p className="text-lg text-gray-700 font-medium">{job.title}</p>
                        <p className="text-sm text-gray-500 italic">{job.startDate} - {job.endDate}</p>
                      </div>
                      <Link 
                        href={job.url} 
                        target="_blank" 
                        className="text-sm text-blue-600 hover:text-blue-800 underline mt-2 tablet:mt-0"
                      >
                        {job.url}
                      </Link>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">{job.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Methodology:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.metotology.map((method, methodIndex) => (
                            <span 
                              key={methodIndex} 
                              className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full"
                            >
                              {method}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Freelance Experience Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
                Freelance Experiences
              </h2>
              <div className="space-y-8">
                {otherExperiences.map((experience, index) => (
                  <article key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{experience.company}</h3>
                        <p className="text-lg text-gray-700 font-medium">{experience.title}</p>
                        <p className="text-sm text-gray-500 italic">{experience.startDate} - {experience.endDate}</p>
                      </div>
                      <Link 
                        href={experience.url} 
                        target="_blank" 
                        className="text-sm text-blue-600 hover:text-blue-800 underline mt-2 tablet:mt-0"
                      >
                        {experience.url}
                      </Link>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">{experience.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Methodology:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.metotology.map((method, methodIndex) => (
                            <span 
                              key={methodIndex} 
                              className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full"
                            >
                              {method}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Learning Now Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
                Learning Now
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    AWS certified Cloud Practitioner
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    GM Script for a personal project
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}