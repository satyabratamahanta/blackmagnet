import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata = {
    title: "Terms & Conditions | Black Magnet",
    description: "Terms and Conditions for Black Magnet services.",
};

export default function TermsPage() {
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
                        TERMS & CONDITIONS
                    </h1>
                    <p className="text-slate-500 text-lg">
                        Last Updated (IST): <span className="italic">{lastUpdatedIST}</span>
                    </p>
                </header>

                <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">

                    {/* 1. Introduction & Acceptance */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            1. Introduction & Acceptance
                        </h2>
                        <p className="mb-4">
                            These Terms and Conditions (“Terms”) govern the services provided by
                            <strong> Black Magnet</strong> (“we”, “our”, “us”). By accessing our
                            website, communicating with us, or availing any of our services, you
                            confirm that you have read, understood, and agreed to these Terms.
                        </p>
                        <p>
                            These Terms apply to all clients unless a separate written agreement
                            explicitly overrides specific clauses.
                        </p>
                    </section>

                    {/* 2. Types of Clients */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            2. Types of Clients
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-blue-500">
                            <li>
                                <strong>Individuals / Freelancers:</strong> Personal or independent
                                projects with limited scope.
                            </li>
                            <li>
                                <strong>Startups & Small Businesses:</strong> Commercial projects
                                requiring structured delivery.
                            </li>
                            <li>
                                <strong>Corporate / Enterprise Clients:</strong> Larger projects
                                involving formal processes or compliance.
                            </li>
                        </ul>
                        <p>
                            Unless otherwise agreed in writing, these Terms apply uniformly to all
                            client types.
                        </p>
                    </section>

                    {/* 3. Services Offered */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            3. Services Offered
                        </h2>
                        <ul className="list-disc pl-6 space-y-3 marker:text-blue-500">
                            <li>
                                <strong>Application Development:</strong> Design and development
                                based on agreed specifications.
                            </li>
                            <li>
                                <strong>Maintenance & Support:</strong> Ongoing support under a
                                defined scope.
                            </li>
                            <li>
                                <strong>App Store SEO & Optimization:</strong> Improving metadata,
                                keywords, and store presentation.
                            </li>
                            <li>
                                <strong>App Growth & Consulting:</strong> Strategic guidance and
                                performance analysis.
                            </li>
                        </ul>
                        <p className="mt-4">
                            Scope, timelines, and pricing are agreed separately and are not implied.
                        </p>
                    </section>

                    {/* 4. Application Development */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            4. Application Development (Development-Only Clients)
                        </h2>
                        <p className="mb-4">
                            For development-only engagements, Black Magnet’s responsibility is
                            limited to delivering the agreed functionality.
                        </p>
                        <p className="mb-4">
                            Delivery is deemed accepted if no written objections are raised within
                            a reasonable review period.
                        </p>
                        <ul className="list-disc pl-6 space-y-3 marker:text-blue-500">
                            <li>
                                We are not responsible for issues caused by platform updates,
                                third-party services, or client-side changes after delivery.
                            </li>
                            <li>
                                Ongoing support is excluded unless a maintenance agreement exists.
                            </li>
                            <li>
                                App store approval or rejection decisions are outside our control.
                            </li>
                        </ul>
                    </section>

                    {/* 5. Application Maintenance & Support */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            5. Application Maintenance & Support
                        </h2>
                        <p className="mb-4">
                            Maintenance services are provided only when explicitly agreed and
                            limited to the defined scope.
                        </p>
                        <ul className="list-disc pl-6 space-y-3 marker:text-blue-500">
                            <li>
                                Bug fixes apply only to issues within the original development scope.
                            </li>
                            <li>
                                Minor updates are handled based on feasibility and priority.
                            </li>
                        </ul>
                        <p className="mt-4">
                            Maintenance does not guarantee uninterrupted service or immunity from
                            third-party platform changes.
                        </p>
                    </section>

                    {/* 6. SEO & App Growth Services */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            6. SEO & App Growth Services
                        </h2>
                        <p className="mb-4">
                            SEO and growth services are provided on a best-effort basis.
                        </p>
                        <ul className="list-disc pl-6 space-y-3 marker:text-blue-500">
                            <li>
                                Rankings depend on app store algorithms and competition.
                            </li>
                            <li>
                                Downloads and revenue depend on user behavior and market demand.
                            </li>
                            <li>
                                No guarantees are made regarding monetization or visibility.
                            </li>
                        </ul>
                    </section>

                    {/* 7. Use of AI & Automated Tools */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            7. Use of AI & Automated Tools
                        </h2>
                        <ul className="list-disc pl-6 space-y-3 marker:text-blue-500">
                            <li>AI tools assist development and analysis.</li>
                            <li>They operate under human supervision.</li>
                            <li>Outputs may vary and are not guaranteed to be error-free.</li>
                        </ul>
                    </section>

                    {/* 8. Confidentiality */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            8. Confidentiality
                        </h2>
                        <p className="mb-4">
                            Both parties agree to maintain the confidentiality of any non-public,
                            proprietary, or sensitive business information shared during the
                            engagement.
                        </p>
                        <p>
                            Confidential information shall not be disclosed to third parties
                            without prior written consent, except where required by law.
                        </p>
                    </section>

                    {/* 9. Client Responsibilities */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            9. Client Responsibilities
                        </h2>
                        <ul className="list-disc pl-6 space-y-3 marker:text-blue-500">
                            <li>Provide accurate and lawful information.</li>
                            <li>Ensure ownership or rights to all provided content.</li>
                            <li>Comply with applicable laws and platform policies.</li>
                        </ul>
                    </section>

                    {/* 10. Indemnification */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            10. Indemnification
                        </h2>
                        <p>
                            Clients agree to indemnify and hold Black Magnet harmless from any
                            claims, losses, or damages arising from content, materials, or
                            instructions provided by the client that infringe on third-party
                            rights or violate applicable laws.
                        </p>
                    </section>

                    {/* 11. Misuse & Illegal Use Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            11. Misuse & Illegal Use Disclaimer
                        </h2>
                        <p>
                            Black Magnet is not responsible for misuse, illegal activity, or policy
                            violations committed by clients or end users after delivery.
                        </p>
                    </section>

                    {/* 12. Payments, Refunds & Cancellation */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            12. Payments, Refunds & Cancellation
                        </h2>
                        <ul className="list-disc pl-6 space-y-3 marker:text-blue-500">
                            <li>Advance payment may be required.</li>
                            <li>Payments are non-refundable once work has started.</li>
                            <li>Partial refunds apply only if work has not commenced.</li>
                            <li>Maintenance and SEO fees are non-refundable.</li>
                        </ul>
                    </section>

                    {/* 13. Intellectual Property Rights */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            13. Intellectual Property Rights
                        </h2>
                        <p>
                            Ownership of the final deliverables, including source code, designs, and related materials, shall transfer to the Client only upon receipt of full and final payment. Until such payment is received, Black Magnet retains all rights, title, and interest in the work.
                        </p>
                    </section>

                    {/* 14. Termination */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            14. Termination
                        </h2>
                        <p>
                            Either party may terminate the engagement by providing at least
                            <strong> 7 days’ written notice</strong>. Fees for completed or
                            ongoing work remain payable.
                        </p>
                    </section>

                    {/* 15. Data Protection */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            15. Data Protection
                        </h2>
                        <p>
                            Any collection, use, or processing of personal data is governed by our
                            Privacy Policy, which forms an integral part of these Terms.
                        </p>
                    </section>

                    {/* 16. Force Majeure */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            16. Force Majeure
                        </h2>
                        <p>
                            Black Magnet is not liable for delays or failures caused by events
                            beyond reasonable control, including natural disasters, platform
                            outages, regulatory changes, or third-party service failures.
                        </p>
                    </section>

                    {/* 17. No Legal or Financial Advice */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            17. No Legal or Financial Advice
                        </h2>
                        <p>
                            Black Magnet does not provide legal, financial, or regulatory advice
                            unless explicitly agreed in writing.
                        </p>
                    </section>

                    {/* 18. Governing Law & Jurisdiction */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            18. Governing Law & Jurisdiction
                        </h2>
                        <p>
                            These Terms are governed by the laws of India and subject to courts of
                            competent jurisdiction in India.
                        </p>
                    </section>

                    {/* 19. Contact Information */}
                    <section className="mb-12 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            19. Contact Information
                        </h2>
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
