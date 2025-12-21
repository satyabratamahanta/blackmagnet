import Reveal from "./Reveal";

export default function CallToAction() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-950 text-white">
      <Reveal>
        <div className="max-w-4xl mx-auto text-center border border-gray-800 rounded-2xl p-10 sm:p-14">
          
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            Let’s Build Your Mobile App — The Right Way
          </h3>

          <p className="text-gray-400 text-lg mb-10">
            From idea to production, we help you design, build, and scale mobile
            applications using AI-assisted development and solid engineering
            practices.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:hello@blackmagnet.tech"
              className="px-10 py-3 rounded-md bg-white text-black font-medium hover:bg-gray-200 hover:scale-[1.02] transition-transform"
            >
              Discuss Your Project
            </a>

            <a
              href="/services"
              className="px-10 py-3 rounded-md border border-gray-700 text-white hover:border-gray-500 transition"
            >
              View Our Services
            </a>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
