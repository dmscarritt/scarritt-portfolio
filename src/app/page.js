import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Head from 'next/head';

export default function Page() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Mason.Scarritt.io</title>
      </Head>
      <header className="bg-gray-800 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Mason Scarritt</h1>
        <p className="text-lg mt-2">DevOps Engineer | Cloud Architect | Security & Automation Enthusiast</p>
      </header>
      
      <main className="max-w-4xl mx-auto p-6">
        <section className="my-8">
          <h2 className="text-2xl font-semibold">Career Snapshot</h2>
          <p className="mt-2 text-gray-300">
            Over a decade of experience optimizing cloud environments, automating deployments, and securing infrastructure across AWS and Azure. Passionate about DevOps, security, and operational excellence.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold">Experience Timeline</h2>
          <ul className="mt-2 space-y-4">
            <li className="border-l-4 border-blue-400 pl-4 bg-gray-800 p-4 rounded">
              <strong>CACI | DevOps Engineer</strong> (2019 - Present) <br />
              Migrated development environments to cloud infrastructure, optimized security and automation.
            </li>
            <li className="border-l-4 border-blue-400 pl-4 bg-gray-800 p-4 rounded">
              <strong>ESN Inc. | Technical Analyst</strong> (2018) <br />
              Managed deployments and performance monitoring of production servers.
            </li>
            <li className="border-l-4 border-blue-400 pl-4 bg-gray-800 p-4 rounded">
              <strong>CACI | Programmer Analyst</strong> (2015 - 2017) <br />
              Implemented deployment processes and cloud infrastructure.
            </li>
            <li className="border-l-4 border-blue-400 pl-4 bg-gray-800 p-4 rounded">
              <strong>eVenture Technologies | Database Engineer</strong> (2011 - 2015) <br />
              Supported Microsoft SQL Server and Oracle databases, specialized in disaster recovery, performance tuning, and security analysis.
            </li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <span className="p-2 bg-gray-700 text-white rounded">AWS</span>
            <span className="p-2 bg-gray-700 text-white rounded">Azure</span>
            <span className="p-2 bg-gray-700 text-white rounded">CI/CD Pipelines</span>
            <span className="p-2 bg-gray-700 text-white rounded">Azure DevOps</span>
            <span className="p-2 bg-gray-700 text-white rounded">Nexus and Nexus IQ</span>
            <span className="p-2 bg-gray-700 text-white rounded">Security Hardening</span>
            <span className="p-2 bg-gray-700 text-white rounded">SQL Server</span>
            <span className="p-2 bg-gray-700 text-white rounded">Oracle</span>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <div className="flex space-x-4 mt-2">
            <a href="mailto:mason@scarritt.io" className="text-2xl text-gray-300 hover:text-gray-100">
              <FaEnvelope />
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center p-4 bg-gray-800 text-white">
        &copy; 2025 Mason Scarritt | All Rights Reserved
      </footer>
    </div>
  );
}