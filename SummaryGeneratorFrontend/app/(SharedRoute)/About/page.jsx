const About = () => {
  return (
    <section
      id="about"
      className="h-full py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* About Content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full 2xl:my-32">
            Our Mission
          </span>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-10 2xl:mb-20 ">
            About PDF Summary AI
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5 text-justify ">
            We built PDF Summary AI to help students, researchers, and
            professionals save hours of reading time. Using advanced Large
            Language Models, we go beyond simple summaries — we understand your
            documents.
          </p>

          <p className="text-gray-600 leading-relaxed text-justify my-10 2xl:mb-20">
            Whether it’s a legal contract, academic research, or a textbook, our
            goal is simple: make information clear, accessible, and fast so you
            can focus on what truly matters.
          </p>
        </div>

        {/* Mission Highlights Row */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 2xl:my-20">
          <div className="p-6 rounded-2xl bg-white border shadow-sm hover:shadow-md transition ">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ⚡ Fast Understanding
            </h3>
            <p className="text-gray-600">
              Extract key insights from lengthy PDFs in seconds using AI.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🤖 AI-Powered Intelligence
            </h3>
            <p className="text-gray-600">
              Powered by modern Large Language Models for accurate results.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🔒 Privacy First
            </h3>
            <p className="text-gray-600">
              Your documents are processed securely and never shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
