const Features = () => {
  const features = [
    {
      title: "Chat with PDF",
      desc: "Ask questions and get instant, accurate answers directly from your PDF documents using AI.",
      icon: "💬",
    },
    {
      title: "AI Summarization",
      desc: "Turn long documents into short, easy-to-read summaries within seconds.",
      icon: "📝",
    },
    {
      title: "Secure Storage",
      desc: "Your PDFs are encrypted and stored securely with privacy-first architecture.",
      icon: "🔒",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 sm:my-10 2xl:my-20">
          Powerful AI Features
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-left">
          Supercharge your productivity with AI-powered tools designed to help
          you understand documents faster and smarter.
        </p>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-20 xl:mt-32 2xl:mt-48">
          {features.map((fea, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center text-3xl rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white mb-6 mx-auto group-hover:scale-110 transition">
                {fea.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {fea.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{fea.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
