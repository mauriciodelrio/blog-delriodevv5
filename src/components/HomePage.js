'use client';

import { useState, useEffect } from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import { FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';
import { getDictionary } from '../lib/i18n';

const AccordionSection = ({ id, title, children, isOpen, onToggle }) => {
  return (
    <section className="bg-gray-50 rounded-lg overflow-hidden">
      <button
        onClick={() => onToggle(id)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
      >
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 flex-1">{title}</h2>
        <div className="ml-4">
          {isOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
      >
        <div className="px-6 pb-6">{children}</div>
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
    additionalInfo: false,
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
      additionalInfo: !isMobile,
    });
  }, [isMobile]);

  // Función para toggle de acordeones
  const toggleAccordion = (section) => {
    setAccordionState((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Función helper para renderizar skills como tags
  const renderSkillTags = (skillsArray) => (
    <div className="flex flex-wrap gap-2">
      {skillsArray.map((skill, index) => (
        <span
          key={index}
          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  );

  // Skills categorizadas (sin ratings, solo nombres)
  const frontendSkills = [
    'Javascript',
    'React',
    'Redux',
    'Zustand',
    'Signals',
    'Hooks',
    'Typescript',
    'HTML',
    'CSS',
    'Tailwind',
    'Bootstrap',
    'UI Frameworks',
    'Next JS',
    'JQuery',
    'Preact',
  ];

  const backendSkills = [
    'Node JS',
    'Express JS',
    'PostgreSQL',
    'Redis',
    'GraphQL',
    'SQLLite',
    'Apollo',
    'MySQL',
    'Mongo DB',
    'Python',
    'FastAPI',
    'Sequelize',
    'Mongoose',
    'Prisma',
  ];

  const devToolsSkills = [
    'Git',
    'SonarQube',
    'Eslint',
    'Snyk',
    'CI/CD',
    'Webpack',
    'Vite',
    'Turbopack',
    'CSP',
    'Shell',
    'Github Actions',
    'Docker',
  ];

  const testingSkills = ['Storybook', 'Jest', 'React Testing Library', 'TDD', 'Cypress'];

  const otherTechSkills = ['AWS', 'Firebase', 'GCP'];

  const managementTools = ['Jira', 'Confluence', 'Notion', 'Miro', 'Figma'];

  const leadershipSkills = [
    'Agile',
    'Leadership',
    'Team Management',
    'Project Planning',
    'Strategic Thinking',
    'Mentoring',
    'Cross-functional Collaboration',
    'Code Review',
    'Stakeholder Management',
    'Technical Architecture',
    'Process Improvement',
    'Risk Assessment',
  ];

  const aiSkills = [
    'Copilot',
    'GPT',
    'Gemini',
    'Agents',
    'LLM',
    'MCP',
    'Cursor',
    'Windsurf',
    'Warp',
    'API Integrations',
    'Prompt Engineering',
    'Ollama',
    'Claude',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="mx-auto px-4 tablet:px-6 desktop:px-8 py-8" style={{ maxWidth: '1440px' }}>
        {/* Header Section */}
        <header className="mb-12 flex flex-col items-center">
          <div className="text-center desktop:text-left mb-8">
            <h1 className="text-4xl desktop:text-5xl font-bold text-gray-900 mb-4">{dictionary.home.title}</h1>
            <p className="text-xl text-center text-gray-600 italic mb-6">{dictionary.home.subtitle}</p>
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
              <AiFillLinkedin size={32} />
            </Link>
            <Link
              href="https://github.com/mauriciodelrio"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <AiFillGithub size={32} />
            </Link>
            <Link
              href="https://gitlab.com/mauricio.delr"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <AiFillGitlab size={32} />
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
              {renderSkillTags(frontendSkills)}
            </AccordionSection>

            {/* Backend & Databases Section */}
            <AccordionSection
              id="backendDev"
              title={dictionary.home.sidebar.backendDev}
              isOpen={accordionState.backendDev}
              onToggle={toggleAccordion}
            >
              {renderSkillTags(backendSkills)}
            </AccordionSection>

            {/* Development Tools & DevOps Section */}
            <AccordionSection
              id="devTools"
              title={dictionary.home.sidebar.devTools}
              isOpen={accordionState.devTools}
              onToggle={toggleAccordion}
            >
              {renderSkillTags(devToolsSkills)}
            </AccordionSection>

            {/* Testing & Quality Section */}
            <AccordionSection
              id="testing"
              title={dictionary.home.sidebar.testing}
              isOpen={accordionState.testing}
              onToggle={toggleAccordion}
            >
              {renderSkillTags(testingSkills)}
            </AccordionSection>

            {/* Other Technologies Section */}
            <AccordionSection
              id="otherTech"
              title={dictionary.home.sidebar.otherTech}
              isOpen={accordionState.otherTech}
              onToggle={toggleAccordion}
            >
              {renderSkillTags(otherTechSkills)}
            </AccordionSection>

            {/* Management & Design Tools Section */}
            <AccordionSection
              id="managementTools"
              title={dictionary.home.sidebar.managementTools}
              isOpen={accordionState.managementTools}
              onToggle={toggleAccordion}
            >
              {renderSkillTags(managementTools)}
            </AccordionSection>

            {/* Leadership & Soft Skills Section */}
            <AccordionSection
              id="leadership"
              title={dictionary.home.sidebar.leadership}
              isOpen={accordionState.leadership}
              onToggle={toggleAccordion}
            >
              {renderSkillTags(leadershipSkills)}
            </AccordionSection>

            {/* AI Section */}
            <AccordionSection
              id="AI"
              title={dictionary.home.sidebar.aiTools}
              isOpen={accordionState.AI}
              onToggle={toggleAccordion}
            >
              {renderSkillTags(aiSkills)}
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
                        <FaStar key={i} className={`w-3 h-3 ${i < 4 ? 'text-gray-800' : 'text-gray-300'}`} />
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {dictionary.home.sidebar.salaryRangeTitle}
                  </h3>
                  <p className="text-gray-600">{dictionary.home.contact.salaryRange}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {dictionary.home.sidebar.possibleRelocation}
                  </h3>
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
                <p className="text-gray-700 leading-relaxed mb-4">{dictionary.home.overview.paragraph1}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{dictionary.home.overview.paragraph2}</p>
                <p className="text-gray-700 leading-relaxed">{dictionary.home.overview.paragraph3}</p>
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
                        <p className="text-sm text-gray-500 italic">
                          {job.startDate} - {job.endDate}
                        </p>
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
                            <span key={techIndex} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
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
                        <p className="text-sm text-gray-500 italic">
                          {experience.startDate} - {experience.endDate}
                        </p>
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
                            <span key={techIndex} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
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
