import Head from 'next/head';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mason Scarritt | DevOps Engineer</title>
        <meta name="description" content="Resume and portfolio of Mason Scarritt" />
      </Head>
      <header className="bg-gray-900 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Mason Scarritt</h1>
        <p className="text-lg mt-2">DevOps Engineer | Cloud Architect | Security & Automation Enthusiast</p>
      </header>
      
      <main className="max-w-4xl mx-auto p-6">
        <section className="my-8">
          <h2 className="text-2xl font-semibold">Career Snapshot</h2>
          <p className="mt-2 text-gray-700">
            Over a decade of experience optimizing cloud environments, automating deployments, and securing infrastructure across AWS and Azure. Passionate about DevOps, security, and operational excellence.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold">Experience Timeline</h2>
          <ul className="mt-2 space-y-4">
            <li className="border-l-4 border-blue-500 pl-4">
              <strong>CACI | DevOps Engineer</strong> (2019 - Present) <br />
              Migrated development environments to cloud infrastructure, optimized security and automation.
            </li>
            <li className="border-l-4 border-blue-500 pl-4">
              <strong>ESN Inc. | Technical Analyst</strong> (2018) <br />
              Managed deployments and performance monitoring of production servers.
            </li>
            <li className="border-l-4 border-blue-500 pl-4">
              <strong>CACI | Programmer Analyst</strong> (2015 - 2017) <br />
              Implemented deployment processes and cloud infrastructure.
            </li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <span className="p-2 bg-gray-200 rounded">AWS</span>
            <span className="p-2 bg-gray-200 rounded">Azure</span>
            <span className="p-2 bg-gray-200 rounded">CI/CD Pipelines</span>
            <span className="p-2 bg-gray-200 rounded">Terraform</span>
            <span className="p-2 bg-gray-200 rounded">Ansible</span>
            <span className="p-2 bg-gray-200 rounded">Security Hardening</span>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/yourgithub" className="text-2xl text-gray-700 hover:text-gray-900">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" className="text-2xl text-blue-700 hover:text-blue-900">
              <FaLinkedin />
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center p-4 bg-gray-900 text-white">
        &copy; 2024 Mason Scarritt | All Rights Reserved
      </footer>
    </div>
  );
}
