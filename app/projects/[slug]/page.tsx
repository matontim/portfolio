
Project slug page · TSX
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { getProjectPosts } from "app/lib/projects";
import { metaData } from "app/lib/config";
 
export async function generateStaticParams() {
  const projects = getProjectPosts();
  return projects.map((project) => ({ slug: project.slug }));
}
 
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const project = getProjectPosts().find((p) => p.slug === slug);
  if (!project) return;
 
  const { title, summary: description, image } = project.metadata;
  const ogImage = image
    ? image
    : `${metaData.baseUrl}/og?title=${encodeURIComponent(title)}`;
 
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${metaData.baseUrl}/projects/${project.slug}`,
      images: [{ url: ogImage }],
    },
  };
}
 
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectPosts().find((p) => p.slug === slug);
  if (!project) notFound();
 
  return (
    <main className="main">
      <section className="panel" style={{ width: "100%" }}>
        {/* Panel header — project title */}
        <div className="panel-header">
          <h2 className="title normal-case tracking-normal text-base font-bold">
            {project.metadata.title}
          </h2>
        </div>
 
        {/* Summary strip if present */}
        {project.metadata.summary && (
          <div
            className="px-5 py-2 text-sm font-semibold border-b-2"
            style={{
              color: "var(--color-teal)",
              borderColor: "var(--color-divider)",
            }}
          >
            {project.metadata.summary}
          </div>
        )}
 
        {/* Body */}
        <article className="prose prose-quoteless prose-neutral dark:prose-invert max-w-none">
          <CustomMDX source={project.content} />
        </article>
      </section>
    </main>
  );
}