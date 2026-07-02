import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <main className="main">
      <section className="panel profile">
        <div className="panel-header">
          <h2>PROFILE</h2>
        </div>
        <div className="profile-body">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="profile-photo"
          style={{ aspectRatio: '1/1' }}
          unoptimized
          width={160}
          height={160}
          priority
        />
      <div className="profile-text">
      <h3 className="prose text-2xl tracking-tight font-bold mb-2">Madeline Matonti, C(ASCP)<sup>CM</sup></h3>
      <p className="role text-sm">Medical Laboratory Scientist at Massachusetts General Hospital</p>
      <p className="role text-sm">Bioinformatics Intern in the Balaj Lab at the Mass General Brigham Dept. of Neurosurgery</p>
      <p className="role text-sm mb-2">M.S. Bioinformatics Student at Boston University</p>
      <hr className="panel-divider" />
      <div className="prose dark:prose-invert max-w-none bio">
        <p>I am a Bioinformatics Master's student with experience in RNA-seq analysis, genomic data processing, statistical modeling, and scientific programming. Through independent projects and research experiences, I have developed computational workflows for biological data analysis and reproducible research.</p>
        <p>I am particularly interested in combining bioinformatics with full-stack web development to create user-friendly tools for data visualization, analysis, and scientific collaboration. My long-term interests include multi-omics data integration, machine learning, drug discovery, and building software that lowers barriers to computational research.</p>
      </div>
      </div>
      </div>
      </section>

      <section className="panel education">
        <div className="panel-header">
          <h2>EDUCATION</h2>
        </div>
        <ul>
          <li className="flex flex-col">
            <span className="font-bold text-sm">
              M.S. Bioinformatics | Boston University
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 text-xs">
              Expected 2027
            </span>
          </li>
          <hr className="panel-divider" />
          <li className="flex flex-col">
            <span className="font-bold text-sm">
              B.A. Biochemistry and Molecular Biology | Boston University
            </span>
            <span className="text-neutral-600 dark:text-neutral-400 text-xs">
              2024
            </span>
          </li>
        </ul>
      </section>

      <section className="panel certs">
        <div className="panel-header">
          <h2>LICENSES AND CERTIFICATIONS</h2>
        </div>
        <div className="not-prose space-y-3">
          <img width="100" height="100" alt="c-ascp-scientist-in-chemistry" src="https://github.com/user-attachments/assets/4ccde033-1a93-4e97-9ff8-8a62d2be002c" />
          <p className="font-bold mb-1 text-sm">Scientist in Chemistry, C(ASCP)<sup>CM</sup></p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs mb-1">ASCP Board of Certification</p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">Issued: [May 2026] – Expires: [May 2029]</p>
        </div>
      </section>

      <section className="panel tools">
        <div className="panel-header">
          <h2>LANGUAGES AND TOOLS</h2>
        </div>
        <div className="not-prose space-y-3">
          <div>
            <p className="font-bold mb-1">Bioinformatics & Data Science</p>
            <div className="pill-row">
              <span className="pill">Python</span>
              <span className="pill">R</span>
              <span className="pill">pandas</span>
              <span className="pill">numpy</span>
              <span className="pill">scipy</span>
              <span className="pill">statsmodels</span>
              <span className="pill">scikit-learn</span>
              <span className="pill">matplotlib</span>
              <span className="pill">ggplot2</span>
              <span className="pill">dplyr</span>
              <span className="pill">tidyr</span>
            </div>
          </div>
          <div>
            <p className="font-bold mb-1">Web Development</p>
            <div className="pill-row">
              <span className="pill">HTML</span>
              <span className="pill">CSS</span>
              <span className="pill">JavaScript</span>
              <span className="pill">TypeScript</span>
              <span className="pill">Next.js</span>
              <span className="pill">Tailwind CSS</span>
              <span className="pill">Vercel</span>
            </div>
          </div>
          <div>
            <p className="font-bold mb-1">Other</p>
            <div className="pill-row">
              <span className="pill">Git</span>
              <span className="pill">Linux</span>
              <span className="pill">MATLAB</span>
              <span className="pill">ProxmoxVE</span>
              <span className="pill">SSH</span>
              <span className="pill">LaTeX</span>
            </div>
          </div>
        </div>
      </section>

      <section className="panel contact">
        <div className="panel-header">
          <h2>CONTACT</h2>
        </div>
        <ul className="flex flex-row gap-4 justify-center">
          <li>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-button">GitHub
            </a>
          </li>
          <li>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-button">LinkedIn
            </a>
          </li>
          <li>
            <a
              href={socialLinks.email}
              className="nav-button">Email
            </a>
          </li>
        </ul>
      </section>
  </main>
  );
}
