'use client';

import { useState, useEffect } from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from 'next/link';
import { getDictionary } from '../lib/i18n';

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
    frontendDev: false,
    backendDev: false,
    devTools: false,
    testing: false,
    otherTech: false,
    managementTools: false,
    leadership: false,
    AI: false,
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
      frontendDev: !isMobile, // En desktop abierto, en mobile cerrado
      backendDev: !isMobile,
      devTools: !isMobile,
      testing: !isMobile,
      otherTech: !isMobile,
      managementTools: !isMobile,
      leadership: !isMobile,
      AI: !isMobile,
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

  // Función helper para renderizar skills
  const renderSkills = (skillsArray) => (
    <div className="space-y-3">
      {skillsArray.map((item, index) => (
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
  );

  // Skills categorizadas
  const frontendSkills = [
    { skill: "Javascript", rating: 5 },
    { skill: "React", rating: 5 },
    { skill: "Redux", rating: 5 },
    { skill: "Zustand", rating: 5 },
    { skill: "Signals", rating: 5  },
    { skill: "Hooks", rating: 5 },
    { skill: "Typescript", rating: 5 },
    { skill: "HTML", rating: 5 },
    { skill: "CSS", rating: 5 },
    { skill: "Tailwind", rating: 5 },
    { skill: "Bootstrap", rating: 5 },
    { skill: "UI Frameworks", rating: 5 },
    { skill: "Next JS", rating: 5 },
    { skill: "JQuery", rating: 5 },
    { skill: "Preact", rating: 4 },
    { skill: "Vue JS", rating: 3 }
  ];

  const backendSkills = [
    { skill: "Node JS", rating: 5 },
    { skill: "Express JS", rating: 5 },
    { skill: "PostgreSQL", rating: 4 },
    { skill: "Redis", rating: 4 },
    { skill: "GraphQL", rating: 4 },
    { skill: "SQLLite", rating: 4 },
    { skill: "Apollo", rating: 4 },
    { skill: "MySQL", rating: 3 },
    { skill: "Mongo DB", rating: 3 },
    { skill: "Python", rating: 3 },
    { skill: "Django", rating: 3 },
    { skill: "Flask", rating: 3 },
    { skill: "FastAPI", rating: 3 },
    { skill: "Sequelize", rating: 3 },
    { skill: "Mongoose", rating: 2 },
    { skill: "Prisma", rating: 2 }
  ];

  const devToolsSkills = [
    { skill: "Git", rating: 5 },
    { skill: "SonarQube", rating: 4 },
    { skill: "Eslint", rating: 4 },
    { skill: "Snyk", rating: 4 },
    { skill: "CI/CD", rating: 4 },
    { skill: "Turbopack", rating: 4 },
    { skill: "CSP", rating: 4 },
    { skill: "Shell", rating: 4 },
    { skill: "Github Actions", rating: 4 },
    { skill: "Docker", rating: 3 },
  ];

  const testingSkills = [
    { skill: "Storybook", rating: 5 },
    { skill: "Jest", rating: 4 },
    { skill: "React Testing Library", rating: 4 },
    { skill: "TDD", rating: 3 },
    { skill: "Cypress", rating: 3 }
  ];

  const otherTechSkills = [
    { skill: "Electron", rating: 3 },
    { skill: "React Native", rating: 2 },
    { skill: "AWS", rating: 2 },
    { skill: "Firebase", rating: 2 },
    { skill: "GCP", rating: 2 }
  ];

  const managementTools = [
    { skill: "Jira", rating: 5 },
    { skill: "Confluence", rating: 5 },
    { skill: "Notion", rating: 5 },
    { skill: "Miro", rating: 5 },
    { skill: "UML", rating: 5 },
    { skill: "Figma", rating: 3 }
  ];

  const leadershipSkills = [
    { skill: "Agile", rating: 5 },
    { skill: "Leadership", rating: 5 },
    { skill: "Team Management", rating: 5 },
    { skill: "Project Planning", rating: 5 },
    { skill: "Strategic Thinking", rating: 5 },
    { skill: "Mentoring", rating: 5 },
    { skill: "Cross-functional Collaboration", rating: 5 },
    { skill: "Code Review", rating: 5 },
    { skill: "Stakeholder Management", rating: 4 },
    { skill: "Technical Architecture", rating: 4 },
    { skill: "Process Improvement", rating: 4 },
    { skill: "Risk Assessment", rating: 4 }
  ];

  const aiSkills = [
    { skill: "Copilot", rating: 5 },
    { skill: "GPT", rating: 5 },
    { skill: "Gemini", rating: 5 },
    { skill: "Agents", rating: 5 },
    { skill: "LLM", rating: 5 },
    { skill: "MCP", rating: 5 },
    { skill: "Cursor", rating: 5 },
    { skill: "Windsurf", rating: 5 },
    { skill: "Warp", rating: 5 },
    { skill: "API Integrations", rating: 5 },
    { skill: "Prompt Engineering", rating: 5 },
    { skill: "Ollama", rating: 5 },
    { skill: "Claude", rating: 5 },
    { skill: "Lensa", rating: 5 },
    { skill: "Midjourney", rating: 5 },
    { skill: "Dall-E", rating: 4 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="mx-auto px-4 tablet:px-6 desktop:px-8 py-8" style={{maxWidth: '1440px'}}>
        {/* Header Section */}
        <header className="mb-12 flex flex-col items-center">
          <div className="text-center desktop:text-left mb-8">
            <h1 className="text-4xl desktop:text-5xl font-bold text-gray-900 mb-4">
              {dictionary.home.title}
            </h1>
            <p className="text-xl text-center text-gray-600 italic mb-6">
              {dictionary.home.subtitle}
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col tablet:flex-row tablet:items-center gap-4 text-gray-700 mb-6 justify-center desktop:justify-start">
            <div className="flex items-center justify-center tablet:justify-start gap-2">
              <span className="font-semibold">{dictionary.home.contact.openToWork}</span>
              <span>{dictionary.home.contact.workLocation}</span>
            </div>
            <div className="hidden tablet:block text-gray-400">•</div>
            <div className="text-center tablet:text-left">+56 9 3333 9394 / +56 9 2917 6592</div>
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
          <aside className="desktop:w-1/3 w-full desktop:sticky desktop:top-8 desktop:max-h-[calc(100vh-4rem)] desktop:overflow-y-auto desktop:pr-2 space-y-8 desktop:scrollbar-thin desktop:scrollbar-track-gray-100 desktop:scrollbar-thumb-gray-300 desktop:hover:scrollbar-thumb-gray-400">
            {/* Frontend Development Section */}
            <AccordionSection 
              id="frontendDev" 
              title={dictionary.home.sidebar.frontendDev}
              isOpen={accordionState.frontendDev}
              onToggle={toggleAccordion}
            >
              {renderSkills(frontendSkills)}
            </AccordionSection>

            {/* Backend & Databases Section */}
            <AccordionSection 
              id="backendDev" 
              title={dictionary.home.sidebar.backendDev}
              isOpen={accordionState.backendDev}
              onToggle={toggleAccordion}
            >
              {renderSkills(backendSkills)}
            </AccordionSection>

            {/* Development Tools & DevOps Section */}
            <AccordionSection 
              id="devTools" 
              title={dictionary.home.sidebar.devTools}
              isOpen={accordionState.devTools}
              onToggle={toggleAccordion}
            >
              {renderSkills(devToolsSkills)}
            </AccordionSection>

            {/* Testing & Quality Section */}
            <AccordionSection 
              id="testing" 
              title={dictionary.home.sidebar.testing}
              isOpen={accordionState.testing}
              onToggle={toggleAccordion}
            >
              {renderSkills(testingSkills)}
            </AccordionSection>

            {/* Other Technologies Section */}
            <AccordionSection 
              id="otherTech" 
              title={dictionary.home.sidebar.otherTech}
              isOpen={accordionState.otherTech}
              onToggle={toggleAccordion}
            >
              {renderSkills(otherTechSkills)}
            </AccordionSection>

            {/* Management & Design Tools Section */}
            <AccordionSection 
              id="managementTools" 
              title={dictionary.home.sidebar.managementTools}
              isOpen={accordionState.managementTools}
              onToggle={toggleAccordion}
            >
              {renderSkills(managementTools)}
            </AccordionSection>

            {/* Leadership & Soft Skills Section */}
            <AccordionSection 
              id="leadership" 
              title={dictionary.home.sidebar.leadership}
              isOpen={accordionState.leadership}
              onToggle={toggleAccordion}
            >
              {renderSkills(leadershipSkills)}
            </AccordionSection>

            {/* AI Section */}
            <AccordionSection 
              id="AI" 
              title={dictionary.home.sidebar.aiTools}
              isOpen={accordionState.AI}
              onToggle={toggleAccordion}
            >
              {renderSkills(aiSkills)}
            </AccordionSection>

            {/* Languages Section */}
            <AccordionSection 
              id="languages" 
              title={dictionary.home.sidebar.languages}
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
                    <span className="text-xs text-gray-500">{dictionary.home.sidebar.native}</span>
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
                    <span className="text-xs text-gray-500">{dictionary.home.sidebar.ielts}</span>
                  </div>
                </div>
              </div>
            </AccordionSection>

            {/* Education Section */}
            <AccordionSection 
              id="education" 
              title={dictionary.home.sidebar.education}
              isOpen={accordionState.education}
              onToggle={toggleAccordion}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{dictionary.home.education.utfsm.university}</h3>
                  <p className="text-gray-600 text-sm">{dictionary.home.education.utfsm.degree}</p>
                  <p className="text-gray-500 text-xs">{dictionary.home.education.utfsm.period}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{dictionary.home.education.usach.university}</h3>
                  <p className="text-gray-600 text-sm">{dictionary.home.education.usach.degree}</p>
                  <p className="text-gray-500 text-xs">{dictionary.home.education.usach.period}</p>
                </div>
              </div>
            </AccordionSection>

            {/* Additional Info */}
            <AccordionSection 
              id="additionalInfo" 
              title={dictionary.home.sidebar.additionalInfo}
              isOpen={accordionState.additionalInfo}
              onToggle={toggleAccordion}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{dictionary.home.sidebar.salaryRangeTitle}</h3>
                  <p className="text-gray-600">{dictionary.home.contact.salaryRange}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{dictionary.home.sidebar.possibleRelocation}</h3>
                  <p className="text-gray-600">{dictionary.home.contact.relocation}</p>
                </div>
              </div>
            </AccordionSection>
          </aside>

          {/* Main Content */}
          <div className="desktop:w-2/3 w-full space-y-12">
            {/* Overview Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
                {dictionary.home.overview.title}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {dictionary.home.overview.paragraph1}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {dictionary.home.overview.paragraph2}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {dictionary.home.overview.paragraph3}
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
                {dictionary.home.experience.title}
              </h2>
              <div className="space-y-8">
                {dictionary.home.jobs.map((job, index) => (
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
                        <h4 className="font-semibold text-gray-900 mb-2">{dictionary.home.experience.technologies}</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.keywords.map((tech, techIndex) => (
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
                        <h4 className="font-semibold text-gray-900 mb-2">{dictionary.home.experience.methodology}</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.methodology.map((method, methodIndex) => (
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
                {dictionary.home.experience.freelanceTitle}
              </h2>
              <div className="space-y-8">
                {dictionary.home.freelanceExperiences.map((experience, index) => (
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
                        <h4 className="font-semibold text-gray-900 mb-2">{dictionary.home.experience.technologies}</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.keywords.map((tech, techIndex) => (
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
                        <h4 className="font-semibold text-gray-900 mb-2">{dictionary.home.experience.methodology}</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.methodology.map((method, methodIndex) => (
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
                {dictionary.home.learning.title}
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