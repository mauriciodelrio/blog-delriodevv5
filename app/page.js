import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
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
]

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
]

export default function Main() {
  return (
    <>
      <div className="flex justify-center">
          <div className="flex justify-center w-4/5 tablet:w-full tablet:m-6 max-[1200px]:flex-col  max-w-[1440px] mobile:w-full mobile:inline-block mobile:m-4">
              <div className="w-1/4 max-[1200px]:w-full mt-4 mb-4 mobile:w-full tablet:w-1/3 desktop:mx-4">
                  <h1 className="text-4xl max-[1200px]:text-3xl font-bold font-sans mb-6">Mauricio Del Río Zorrilla</h1>
                  <p className="italic mb-2">Software developer, IT consultant and Human.</p>
                  <p><span className="font-bold">Open to work:</span> Working From Home (Global)</p>
                  <p className="font-bold">
                      +56 9 3333 9394
                  </p>
                  <p className="font-bold">
                      mauricio.delr@gmail.com
                  </p>
                  <div className="flex my-2">
                    <Link href="https://www.linkedin.com/in/mauricio-del-r%C3%ADo-a4b1a98b/" target="__blank">
                      <AiFillLinkedin size={'2em'}/>
                    </Link>
                    <Link href="https://github.com/mauriciodelrio" target="__blank">
                      <AiFillGithub size={'2em'}/>
                    </Link>
                    <Link href="https://gitlab.com/mauricio.delr" target="__blank">
                      <AiFillGitlab size={'2em'}/>
                    </Link>
                  </div>
                  <div className="border-b-2 border-gray-300"></div>
                  <div className="mt-4 mb-4">
                      <h2 className="text-3xl max-[1200px]:text-2xl font-bold font-sans mb-4">Skills</h2>
                      <ul className="py-1">
                          <li className="flex items-center py-1">
                              Javascript [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              React [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Redux [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Hooks [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Typescript [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Tailwind [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              UI Frameworks [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Next JS [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Node JS [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              HTML [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              CSS [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Express JS [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              JQuery [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Agile [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Leadership [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Storybook [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              PostgreSQL [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Jest [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              React Testing Library [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              TDD [ <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              MySQL [ <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Electron [ <FaStar/> <FaStar/> <FaStar/>]
                          </li>
                          <li className="flex items-center py-1">
                              Sequelize [ <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Python [ <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Django [ <FaStar/> <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Mongo DB [ <FaStar/> <FaStar/> <FaStar/>]
                          </li>
                          <li className="flex items-center py-1">
                              Mongoose [ <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              React Native [ <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              Prisma [ <FaStar/> <FaStar/> ]
                          </li>
                          <li className="flex items-center py-1">
                              AWS [ <FaStar/> <FaStar/> ]
                          </li>
                      </ul>
                  </div>
                  <div className="border-b-2 border-gray-300"></div>
                  <div className="mt-4 mb-4">
                      <h2 className="text-3xl max-[1200px]:text-2xl font-bold font-sans mb-4">Languages</h2>
                      <ul>
                        <li className="flex items-center">
                            Spanish [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> ] Native
                        </li>
                        <li className="flex items-center">
                            English [ <FaStar/> <FaStar/> <FaStar/> <FaStar/> ] IELTS B2
                        </li>
                      </ul>
                  </div>
                  <div className="border-b-2 border-gray-300"></div>
                  <div className="mt-4 mb-4">
                      <h2 className="text-3xl max-[1200px]:text-2xl font-bold font-sans mb-4">Education</h2>
                      <ul>
                          <li>
                              <h3 className="text-xl max-[1200px]:text-xl font-bold font-sans">Universidad Técnica Federico Santa María</h3>
                              <p>Ingeniería Civil Informática</p>
                              <p>2010 - 2015 (Incomplete)</p>
                          </li>
                          <li>
                              <h3 className="text-xl max-[1200px]:text-xl font-bold font-sans">Universidad de Santiago de Chile</h3>
                              <p>Bachelor Degree on Computer Science</p>
                              <p>2015 - 2020 (Incomplete)</p>
                          </li>
                      </ul>
                  </div>
                  <div className="border-b-2 border-gray-300"></div>
                  <div className="mt-4 mb-4">
                      <h2 className="text-2xl max-[1200px]:text-2xl font-bold font-sans mb-4">Salary Range</h2>
                      <p>USD 75,000 - USD 120,000 /Yr</p>
                  </div>
                  <div className="border-b-2 border-gray-300"></div>
                  <div className="mt-4 mb-4">
                      <h2 className="text-2xl max-[1200px]:text-2xl font-bold font-sans"> Posible Relocation</h2>
                      <p>Yes: CA, NZ (not mandatory)</p>
                  </div>
              </div>

              <div className="border-l-2 border-gray-300 h-[100%] max-[1200px]:hidden mobile:hidden"></div>
              <div className="border-b-2 border-gray-300 min-[1200px]:hidden mobile:hidden"></div>
              <div className="w-3/4 max-[1200px]:w-full mx-4 max-[1200px]:ml-0 mt-4 mb-4 mobile:m-0 mobile:w-full tablet:w-2/3">
                <h2 className="text-3xl max-[1200px]:text-2xl font-bold font-sans mb-4">Overview</h2>
                  <p className="mb-4">
                  Mauricio is an experienced software developer with over 8 years of experience in the industry. With a strong focus on Javascript technologies and frameworks, Mauricio has worked on challenging projects across various industries, including software factories, education products, streaming, and health and wellness.
                  <br></br>
                  <br></br>
                  In addition to their software development expertise, Mauricio is also a passionate instructor who has worked as a bootcamp teacher, sharing their knowledge and expertise with the next generation of professionals. Their dedication to teaching and mentoring demonstrates their commitment to helping others succeed in their careers.
                  <br></br>
                  <br></br>
                  Overall, Mauricio is a talented and dedicated individual with a wealth of experience in the software industry. Their passion for teaching and mentoring, combined with their desire for personal and professional growth, make them a valuable asset to any team.
                  </p>
                  <div className="border-b-2 border-gray-300"></div>
                  <h2 className="text-3xl max-[1200px]:text-2xl font-bold font-sans mt-4 mb-4">Experience</h2>
                  <ul>
                      {jobs.map((job, index) => (
                          <li key={index}>
                              <h3 className="text-2xl max-[1200px]:text-xl font-bold font-sans">{job.company}</h3>
                              <p>{job.title}</p>
                              <p className="italic">  {job.startDate} - {job.endDate}</p>
                              <p> <Link className="font-bold" href={job.url} target="__blank"> {job.url} </Link> </p>
                              <p className="mb-4">{job.description}</p>
                              <p className="font-bold">Technologies:</p>
                              <ul className="flex flex-wrap items-center justify-start mb-4">
                                  {job.technologies.map((technology, index) => (
                                      <li className="px-2 py-1 bg-gray-100 rounded-md mx-1 text-center" key={index}>{technology}</li>
                                  ))}
                              </ul>
                              <p className="font-bold">Metotology:</p>
                              <ul className="flex flex-wrap items-center justify-start mb-4"> 
                                  {job.metotology.map((metotology, index) => (
                                      <li className="px-2 py-1 bg-gray-100 rounded-md mx-1 text-center" key={index}>{metotology}</li>
                                  ))}
                              </ul>
                          </li>
                      ))}
                  </ul>
                  <div className="border-b-2 border-gray-300"></div>
                  <h2 className="text-3xl max-[1200px]:text-2xl font-bold font-sans mt-4 mb-4">Freelance Experiences</h2>
                  <div className="mb-4">
                    <ul>
                        {otherExperiences.map((experience, index) => (
                            <li key={index}>
                                <h3 className="text-2xl max-[1200px]:text-xl font-bold font-sans">{experience.company}</h3>
                                <p>{experience.title}</p>
                                <p className="italic">  {experience.startDate} - {experience.endDate}</p>
                                <p> <Link className="font-bold" href={experience.url} target="__blank"> {experience.url} </Link> </p>
                                <p className="mb-4">{experience.description}</p>
                                <p className="font-bold">Technologies:</p>
                                <ul className="flex flex-wrap items-center justify-start mb-4">
                                    {experience.technologies.map((technology, index) => (

                                        <li className="px-2 py-1 bg-gray-100 rounded-md mx-1 text-center" key={index}>{technology}</li>
                                    ))}
                                </ul>
                                <p className="font-bold">Metotology:</p>
                                <ul className="flex flex-wrap items-center justify-start mb-4">
                                    {experience.metotology.map((metotology, index) => (
                                        <li className="px-2 py-1 bg-gray-100 rounded-md mx-1 text-center" key={index}>{metotology}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                  </div>
                  <div className="border-b-2 border-gray-300"></div>
                  <h2 className="text-3xl max-[1200px]:text-2xl font-bold font-sans mt-4 mb-4">Learning Now</h2>
                <div className="mb-36">
                    <ul>
                        <li>
                            <h3 className="text-md font-sans">- AWS certified Cloud Practitioner </h3>
                        </li>
                        <li>
                            <h3 className="text-md font-sans">- GM Script for a personal project</h3>
                        </li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
    </>
)}