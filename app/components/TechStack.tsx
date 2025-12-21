import Reveal from "./Reveal";

export default function TechStack() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-black text-white">
      <Reveal>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Tech Stack & Tools
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We use reliable, industry-proven technologies combined with
              modern AI tools to build high-quality mobile applications.
            </p>
          </div>

          {/* Tech categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Mobile */}
            <div className="border border-gray-800 rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-4">
                Mobile Development
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Flutter</li>
                <li>• Android (Kotlin)</li>
                <li>• iOS (Swift)</li>
                <li>• React Native</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="border border-gray-800 rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-4">
                Backend & Services
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Firebase</li>
                <li>• REST & GraphQL APIs</li>
                <li>• Cloud Functions</li>
                <li>• Authentication & Security</li>
              </ul>
            </div>

            {/* AI Tools */}
            <div className="border border-gray-800 rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-4">
                AI-Assisted Tools
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>• ChatGPT & AI Code Assistants</li>
                <li>• Gemini & LLM APIs</li>
                <li>• Automated Testing Support</li>
                <li>• Code Review & Optimization</li>
              </ul>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
