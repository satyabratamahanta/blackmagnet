import Reveal from "./Reveal";

export default function Portfolio() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-black text-white">
      <Reveal>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Selected Work
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A few examples of mobile applications and internal projects
              developed using AI-assisted workflows.
            </p>
          </div>

          {/* Portfolio cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Project 1 */}
            <div className="border border-gray-800 rounded-xl p-8 hover:border-gray-600 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-3">
                Education Mobile App
              </h4>
              <p className="text-gray-400 mb-4">
                A learning-focused mobile application designed for structured
                content delivery and offline access.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Flutter</li>
                <li>• Firebase</li>
                <li>• AI-assisted content structuring</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="border border-gray-800 rounded-xl p-8 hover:border-gray-600 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-3">
                Utility & Productivity App
              </h4>
              <p className="text-gray-400 mb-4">
                A mobile app focused on simplifying daily workflows and
                improving user efficiency.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Flutter / React Native</li>
                <li>• REST APIs</li>
                <li>• AI-assisted logic validation</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="border border-gray-800 rounded-xl p-8 hover:border-gray-600 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-3">
                Internal Demo Project
              </h4>
              <p className="text-gray-400 mb-4">
                An internal prototype built to experiment with AI-assisted
                development workflows and UI patterns.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Rapid prototyping</li>
                <li>• AI code assistance</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
