export default function CoverLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-10">
            {children}
        </div>
    );
}
