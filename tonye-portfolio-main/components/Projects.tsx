'use client'

function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Featured Projects</h2>
          <div className="w-12 h-1 bg-gray-900"></div>
        </div>

        {/* Coming Soon Box */}
        <div className="border border-gray-200 rounded-lg px-6 py-20 md:py-28 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Coming Soon
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I&apos;m working on some projects. Check back soon.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
