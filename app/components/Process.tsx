import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-black text-white">
      <Reveal>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              How We Build Apps
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A clear, structured development process enhanced by AI tools
              and guided by experienced engineers.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="border border-gray-800 rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <span className="text-sm text-gray-500">01</span>
              <h4 className="text-xl font-semibold mt-2 mb-3">
                Understand the Problem
              </h4>
              <p className="text-gray-400 leading-relaxed">
                We start by understanding your idea, goals, and users to
                define the right technical and product approach.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <span className="text-sm text-gray-500">02</span>
              <h4 className="text-xl font-semibold mt-2 mb-3">
                Design & Architecture
              </h4>
              <p className="text-gray-400 leading-relaxed">
                We design user flows, UI/UX, and system architecture —
                ensuring scalability and long-term maintainability.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <span className="text-sm text-gray-500">03</span>
              <h4 className="text-xl font-semibold mt-2 mb-3">
                AI-Assisted Development
              </h4>
              <p className="text-gray-400 leading-relaxed">
                AI tools help accelerate coding, testing, and validation,
                while engineers review and control every decision.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <span className="text-sm text-gray-500">04</span>
              <h4 className="text-xl font-semibold mt-2 mb-3">
                Testing & Optimization
              </h4>
              <p className="text-gray-400 leading-relaxed">
                We test thoroughly, optimize performance, and ensure
                stability across devices and usage scenarios.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <span className="text-sm text-gray-500">05</span>
              <h4 className="text-xl font-semibold mt-2 mb-3">
                Launch & Support
              </h4>
              <p className="text-gray-400 leading-relaxed">
                After launch, we continue supporting, improving, and
                scaling your app as your product evolves.
              </p>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
