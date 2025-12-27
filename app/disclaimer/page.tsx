import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata = {
    title: "Disclaimer | Black Magnet",
    description: "Disclaimer for Black Magnet - General information, guarantees, and liability limitations.",
};

export default function DisclaimerPage() {
    const lastUpdatedIST = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "long",
        timeStyle: "short",
    });

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <Navbar />

            <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">

                {/* Page Header */}
                <header className="mb-16 border-b border-slate-200 pb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        DISCLAIMER
                    </h1>
                    <p className="text-slate-500 text-lg">
                        Last Updated (IST): <span className="italic">{lastUpdatedIST}</span>
                    </p>
                </header>

                <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">

                    {/* 1. General Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            1. General Disclaimer
                        </h2>
                        <p className="mb-4">
                            The information provided by Black Magnet (“we”, “our”, “us”) on our website, communications, and services is for general informational and service-related purposes only.
                        </p>
                        <p>
                            While we strive to ensure accuracy and reliability, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, or suitability of any information, services, or materials provided.
                        </p>
                    </section>

                    {/* 2. No Guarantee of Results */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            2. No Guarantee of Results
                        </h2>
                        <p className="mb-4">
                            Black Magnet provides services including application development, maintenance, SEO, optimization, and growth consulting on a best-effort basis.
                        </p>
                        <p className="mb-4">
                            We do not guarantee:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-blue-500">
                            <li>Business success</li>
                            <li>Revenue generation</li>
                            <li>App rankings or downloads</li>
                            <li>App store approval or featuring</li>
                            <li>User engagement or monetization outcomes</li>
                        </ul>
                        <p>
                            Results depend on multiple external factors such as market conditions, competition, user behavior, and platform algorithms, which are beyond our control.
                        </p>
                    </section>

                    {/* 3. Technical & Platform Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            3. Technical & Platform Disclaimer
                        </h2>
                        <p className="mb-4">
                            Applications and digital products developed by Black Magnet may rely on third-party platforms, services, APIs, app stores, or infrastructure.
                        </p>
                        <p className="mb-4">
                            Black Magnet is not responsible for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                            <li>Downtime or failures caused by third-party platforms</li>
                            <li>Changes in app store policies or algorithms</li>
                            <li>Suspension, rejection, or removal of applications by platforms</li>
                            <li>Issues arising from external integrations or updates</li>
                        </ul>
                    </section>

                    {/* 4. No Legal, Financial, or Professional Advice */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            4. No Legal, Financial, or Professional Advice
                        </h2>
                        <p className="mb-4">
                            Black Magnet does not provide legal, financial, regulatory, or business advice unless explicitly agreed in writing.
                        </p>
                        <p>
                            Clients are responsible for seeking independent professional advice where required before making business, legal, or financial decisions.
                        </p>
                    </section>

                    {/* 5. Use at Your Own Risk */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            5. Use at Your Own Risk
                        </h2>
                        <p className="mb-4">
                            Any use of applications, code, recommendations, or services provided by Black Magnet is at the client’s own risk.
                        </p>
                        <p>
                            Black Magnet shall not be held liable for any loss, damage, or consequences resulting from the use or inability to use the delivered product or services.
                        </p>
                    </section>

                    {/* 6. External Links Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            6. External Links Disclaimer
                        </h2>
                        <p className="mb-4">
                            Our website or applications may contain links to third-party websites or services for convenience.
                        </p>
                        <p>
                            Black Magnet does not control, endorse, or assume responsibility for the content, policies, or practices of any third-party websites or services.
                        </p>
                    </section>

                    {/* 7. User & Client Responsibility */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            7. User & Client Responsibility
                        </h2>
                        <p className="mb-4">
                            Clients are solely responsible for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-blue-500">
                            <li>How their application is used after delivery</li>
                            <li>Compliance with applicable laws and regulations</li>
                            <li>Content published, stored, or distributed through their product</li>
                        </ul>
                        <p>
                            Black Magnet is not liable for misuse, illegal use, or policy violations carried out by clients or end users.
                        </p>
                    </section>

                    {/* 8. Limitation of Liability */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            8. Limitation of Liability
                        </h2>
                        <p>
                            To the fullest extent permitted by law, Black Magnet shall not be liable for any indirect, incidental, consequential, or special damages, including but not limited to loss of profits, data, or business opportunities.
                        </p>
                    </section>

                    {/* 9. Changes to Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            9. Changes to Disclaimer
                        </h2>
                        <p>
                            This Disclaimer may be updated from time to time.
                            Any changes will be effective immediately upon being published on this page.
                        </p>
                    </section>

                    {/* 10. Contact Information */}
                    <section className="mb-12 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            10. Contact Information
                        </h2>
                        <p className="mb-4">
                            For any questions regarding this Disclaimer, please contact:
                        </p>
                        <p className="text-xl font-bold text-slate-900">Black Magnet</p>
                        <p className="text-slate-600">Website: https://blackmagnet.tech</p>
                        <p className="text-slate-600">Email: blackmagnet.tech@gmail.com</p>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
}
