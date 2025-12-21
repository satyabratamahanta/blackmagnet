import Reveal from "./Reveal";

export default function WhyBlackMagnet() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-black text-white">
      <Reveal>
        <div className="max-w-6xl mx-auto">
          
          {/* Section heading */}
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Why BlackMagnet
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine strong engineering fundamentals with modern AI tools
              to build reliable, scalable mobile applications.
            </p>
          </div>

          {/* Trust points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="border border-gray-800 rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-3">
                Human-Led, AI-Assisted
              </h4>
              <p className="text-gray-400 leading-relaxed">
                AI tools support our workflow, but every architectural decision,
                line of code, and release is guided by experienced developers.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-3">
                Production-Ready Code
              </h4>
              <p className="text-gray-400 leading-relaxed">
                We focus on clean architecture, scalability, and maintainability —
                not quick hacks or fragile solutions.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-3">
                Faster Delivery, Better Quality
              </h4>
              <p className="text-gray-400 leading-relaxed">
                AI-assisted workflows help us reduce development time while
                maintaining high standards of quality and reliability.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-3">
                Long-Term Partnership Mindset
              </h4>
              <p className="text-gray-400 leading-relaxed">
                We think beyond launch — offering support, improvements, and
                guidance as your product grows.
              </p>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
