import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";
 
export const metadata: Metadata = {
  title: "Projects",
  description: "Projects",
};
 
export default function Projects() {
  return (
    <main className="main">
      <section className="panel" style={{ width: "100%" }}>
        <div className="panel-header">
          <h2>PROJECTS</h2>
        </div>
        <ul className="space-y-0">
          {projects.map((project, index) => (
            <li key={index}>
              <Link
                href={`/projects/${project.slug}`}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-3 px-1 hover:bg-[#F0EDE6] dark:hover:bg-[#1B3A5C] transition-colors duration-100"
              >
                <span
                  className="font-bold text-sm flex-shrink-0 sm:w-48"
                  style={{ color: "var(--color-ink)" }}
                >
                  {project.title}
                </span>
                <span className="text-xs" style={{ color: "var(--color-muted)" }}>
                  {project.description}
                </span>
              </Link>
              <hr className="panel-divider" />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
