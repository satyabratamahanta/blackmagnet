export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-6 bg-black text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm">
          © {new Date().getFullYear()} BlackMagnet. All rights reserved.
        </p>

        <p className="text-sm">
          Mobile App Development using AI Tools
        </p>

      </div>
    </footer>
  );
}
