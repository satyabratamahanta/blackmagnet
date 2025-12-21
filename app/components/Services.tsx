import Reveal from "./Reveal";

export default function Services() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-black text-white">
      <Reveal>
        <div className="max-w-6xl mx-auto">
          
          <h3 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-14 text-center">
            What We Do
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">

            <div className="border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-gray-600 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Mobile App Development
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                High-quality Android and iOS apps built with clean architecture,
                performance, and long-term scalability in mind.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-gray-600 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                AI-Assisted Engineering
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                AI tools accelerate development, improve quality, and reduce
                time-to-market — always guided by human expertise.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-gray-600 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                UI / UX Design
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Intuitive, modern designs focused on usability, clarity,
                and real user behavior.
              </p>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
