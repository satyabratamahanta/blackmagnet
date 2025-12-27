import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata = {
    title: "Privacy Policy | Black Magnet",
    description:
        "Privacy Policy of Black Magnet – AI-powered mobile application development and technology services.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <Navbar />

            <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">

                {/* Page Header */}
                <header className="mb-16 border-b border-slate-200 pb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-500 text-lg">
                        Last updated: <span className="italic">{new Date().toLocaleDateString()}</span>
                    </p>
                </header>

                <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">

                    {/* 1. Introduction */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            1. Introduction
                        </h2>
                        <p className="mb-4">
                            Welcome to <strong>Black Magnet</strong> (“we”, “our”, “us”). We are
                            an AI-powered mobile application development and technology services
                            provider operating through our website{" "}
                            <strong className="text-blue-600">https://blackmagnet.tech</strong>.
                        </p>
                        <p>
                            This Privacy Policy is designed to help you understand what
                            information we collect, why we collect it, and how we protect it.
                            We respect your privacy and are committed to handling your data in
                            a transparent and responsible manner.
                        </p>
                    </section>

                    {/* 2. Information We Collect */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            2. Information We Collect
                        </h2>
                        <p className="mb-4">
                            The information we collect depends on how you interact with us,
                            such as visiting our website, contacting us, or using applications
                            and services developed by Black Magnet.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-blue-500">
                            <li>
                                <strong className="text-slate-800">Personal Information:</strong> Name, email address, and
                                phone number when you contact us or request our services.
                            </li>
                            <li>
                                <strong className="text-slate-800">Business & Project Information:</strong> Company details,
                                project requirements, technical specifications, and other
                                information necessary to deliver our services effectively.
                            </li>
                            <li>
                                <strong className="text-slate-800">Technical & Usage Information:</strong> Device details,
                                IP address, browser type, and interaction data used to analyze
                                performance and improve user experience.
                            </li>
                        </ul>
                    </section>

                    {/* 3. How We Collect Information */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            3. How We Collect Information
                        </h2>
                        <p className="mb-4">
                            Information is collected directly from you or automatically
                            through standard technologies when you interact with our website
                            or services.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                            <li>Website contact forms and inquiry submissions</li>
                            <li>Email, phone, or direct business communication</li>
                            <li>Client onboarding, discussions, and documentation</li>
                            <li>Website analytics, logs, and cookies</li>
                            <li>Usage data from applications we develop or maintain</li>
                        </ul>
                    </section>

                    {/* 4. Purpose of Data Usage */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            4. Purpose of Data Usage
                        </h2>
                        <p className="mb-4">
                            We use collected information strictly for legitimate business and
                            service-related purposes.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-blue-500">
                            <li>Responding to inquiries and communicating with clients</li>
                            <li>Planning, developing, and delivering projects</li>
                            <li>Testing, improving, and maintaining applications</li>
                            <li>Providing technical support and updates</li>
                            <li>Ensuring security, preventing misuse, and legal compliance</li>
                        </ul>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                            <p className="text-blue-800 font-medium">
                                Black Magnet does <strong>not</strong> sell, rent, or trade personal
                                information to third parties for marketing purposes.
                            </p>
                        </div>
                    </section>

                    {/* 5. AI Tools */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            5. Use of AI Tools & Automated Technologies
                        </h2>
                        <p className="mb-4">
                            As part of our modern development workflow, Black Magnet may use
                            AI-powered tools and automated technologies to assist with code
                            generation, optimization, testing, analysis, and performance
                            monitoring.
                        </p>
                        <p>
                            These tools are used responsibly to improve efficiency and quality
                            and do not independently make decisions that significantly affect
                            users. Personal data is handled only to the extent required for
                            service delivery.
                        </p>
                    </section>

                    {/* 6. Third-Party Services */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            6. Third-Party Services
                        </h2>
                        <p className="mb-4">
                            We may integrate or rely on trusted third-party services such as
                            hosting providers, analytics platforms, APIs, cloud services, and
                            app distribution platforms.
                        </p>
                        <p>
                            These third parties operate under their own privacy policies, and
                            Black Magnet does not control or assume responsibility for their
                            independent data handling practices.
                        </p>
                    </section>

                    {/* 7. Data Security */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            7. Data Storage & Security
                        </h2>
                        <p className="mb-4">
                            We take reasonable technical and organizational measures to protect
                            your information from unauthorized access, misuse, or disclosure.
                        </p>
                        <p>
                            While we follow industry-standard security practices, no system
                            can guarantee complete security, and users should also take
                            precautions when sharing information online.
                        </p>
                    </section>

                    {/* 8. Cookies */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            8. Cookies & Analytics
                        </h2>
                        <p className="mb-4">
                            Our website may use cookies and similar tracking technologies to
                            understand visitor behavior, improve performance, and enhance user
                            experience.
                        </p>
                        <p>
                            You may control or disable cookies through your browser settings,
                            though some website features may be affected.
                        </p>
                    </section>

                    {/* 9. User Rights */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            9. User Rights
                        </h2>
                        <p>
                            Subject to applicable laws, you may request access to, correction
                            of, or deletion of your personal information. Requests can be made
                            by contacting us using the details provided below.
                        </p>
                    </section>

                    {/* 10. Children */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            10. Children’s Privacy
                        </h2>
                        <p>
                            Our services are intended for a general audience and are not
                            directed toward children under the age of 13. We do not knowingly
                            collect personal information from children.
                        </p>
                    </section>

                    {/* 11. Updates */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            11. Policy Updates
                        </h2>
                        <p>
                            This Privacy Policy may be updated periodically to reflect changes
                            in our practices or legal requirements. Updated versions will be
                            posted on this page.
                        </p>
                    </section>

                    {/* 12. Contact */}
                    <section className="mb-12 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            12. Contact Information
                        </h2>
                        <p className="mb-4">
                            For questions or concerns regarding this Privacy Policy, you may
                            contact us at:
                        </p>
                        <div className="space-y-1 text-slate-800 font-medium">
                            <p className="text-xl font-bold mb-2">Black Magnet</p>
                            <p>Website: <a href="https://blackmagnet.tech" className="text-blue-600 hover:underline">https://blackmagnet.tech</a></p>
                            <p>Email: <a href="mailto:blackmagnet.tech@gmail.com" className="text-blue-600 hover:underline">blackmagnet.tech@gmail.com</a></p>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
}
