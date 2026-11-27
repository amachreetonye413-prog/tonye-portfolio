'use client'

function Publications() {
  return (
    <section id="publications" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Publications</h2>
          <div className="w-12 h-1 bg-gray-900"></div>
          <p className="text-lg text-gray-600 mt-4">
            Research papers, articles, and technical publications
          </p>
        </div>

        {/* Coming Soon Box */}
        <div className="bg-white border border-gray-200 rounded-lg px-6 py-20 md:py-28 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Coming Soon
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I&apos;m working on some publications. Check back soon.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-600 mb-6">
            Interested in collaboration or research opportunities?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Get In Touch →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Publications;
