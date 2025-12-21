export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
        <h1 className="text-lg sm:text-xl font-semibold tracking-tight text-white">
          BlackMagnet
        </h1>

        <nav className="hidden sm:flex space-x-8 text-sm text-gray-400">
  <a href="/" className="hover:text-white transition">Home</a>
  <a href="/services" className="hover:text-white transition">Services</a>
  <a href="/contact" className="hover:text-white transition">Contact</a>
</nav>

      </div>
    </header>
  );
}
