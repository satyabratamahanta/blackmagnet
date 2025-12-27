import Link from "next/link";
import { FaMagnet } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-8 animate-pulse">
                <FaMagnet className="text-6xl text-blue-600 rotate-180" />
            </div>

            <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">404</h1>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Field Detached.</h2>

            <p className="text-slate-500 max-w-md mb-10 text-lg">
                The page you are looking for has drifted out of our magnetic field.
            </p>

            <Link
                href="/"
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 flex items-center gap-2"
            >
                Return to Source
            </Link>
        </div>
    );
}
