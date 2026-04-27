'use client';

import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const statusStyles = {
  active: 'bg-green-100 text-green-700',
  beta: 'bg-amber-100 text-amber-700',
  openSource: 'bg-blue-100 text-blue-700',
};

export default function ProjectsPage({ dictionary }) {
  const dict = dictionary.projects;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900">{dict.title}</h1>
        <p className="mt-2 text-gray-600">{dict.subtitle}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {dict.items.map((project) => (
          <div
            key={project.name}
            className="w-full md:w-[calc(50%-12px)] bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col gap-4 hover:bg-white hover:shadow-sm transition-all duration-200"
          >
            {/* Name + status badge */}
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl font-bold text-gray-900">{project.name}</h2>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0 ${statusStyles[project.status]}`}
              >
                {dict.status[project.status]}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed flex-1">{project.description}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 mt-auto pt-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <FiExternalLink />
                {dict.visitProject}
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
                >
                  <FaGithub />
                  {dict.viewOnGitHub}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
