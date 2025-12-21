export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 blur-3xl" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-24 left-10 text-gray-600 text-sm">Flutter</span>
        <span className="absolute bottom-32 left-16 text-gray-600 text-sm">Firebase</span>
        <span className="absolute top-32 right-16 text-gray-600 text-sm">AI</span>
        <span className="absolute bottom-24 right-10 text-gray-600 text-sm">API</span>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-28 sm:py-36 px-4 sm:px-6">
        
        {/* LEFT: TEXT */}
        <div className="text-center md:text-left">
          <span className="mb-4 inline-block rounded-full border border-gray-800 px-4 py-1 text-sm text-gray-400">
            AI-assisted mobile app development
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
            We build modern
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              mobile applications
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mb-10">
            BlackMagnet develops production-ready mobile apps by combining
            strong engineering practices with AI tools to deliver faster,
            smarter, and more reliable products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-10 py-3 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition">
              Start a Project
            </button>
            <button className="px-10 py-3 rounded-md border border-gray-700 text-white hover:border-gray-500 transition">
              View Services
            </button>
          </div>
        </div>

        {/* RIGHT: MOBILE APP VISUAL */}
        <div className="flex justify-center">
          <div className="relative h-[420px] w-[220px] rounded-[28px] border border-gray-700 bg-black shadow-xl">
            
            {/* Phone notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-2 w-16 rounded-full bg-gray-800" />

            {/* App screen */}
            <div className="mt-8 mx-4 h-[340px] rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 flex flex-col items-center justify-center gap-4">
              <div className="h-10 w-24 rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 opacity-80" />
              <div className="h-3 w-32 rounded bg-gray-700" />
              <div className="h-3 w-28 rounded bg-gray-700" />
              <div className="h-3 w-20 rounded bg-gray-700" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
