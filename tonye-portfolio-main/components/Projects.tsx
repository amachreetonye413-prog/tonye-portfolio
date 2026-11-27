
'use client';

function Projects() {
  // Add your projects here when they are ready
  const projects = [];

  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gray-900"></div>
        </div>

        {/* Show Coming Soon when there are no projects */}
        {projects.length === 0 ? (
          <div className="text-center py-20 px-6 border border-gray-200 rounded-lg bg-gray-50">
            <div className="mb-5">
              <span className="text-5xl">📊</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Projects Coming Soon
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
              I'm currently working on practical Data Science projects
              involving data analysis, data visualization, statistical
              analysis, and machine learning. Check back soon to explore
              my work and discoveries.
            </p>

            <div className="mt-8">
              <span className="inline-block px-5 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 font-medium">
                Currently Building
              </span>
            </div>
          </div>
        ) : (

          /* Display projects when available */
          <>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Project Image */}
                  {project.image && (
                    <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Project Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed text-base">
                      {project.description}
                    </p>

                    {/* Technology Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-600 transition-colors duration-200"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Projects */}
            <div className="mt-16 text-center">
              <a
                href="https://github.com/amachreetonye413-prog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200"
              >
                View GitHub Profile →
              </a>
            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default Projects;
