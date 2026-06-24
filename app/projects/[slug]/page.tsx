import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CustomMDX } from "app/components/mdx";
import { getProjectPosts } from "app/lib/projects";
import { metaData } from "app/lib/config";

export async function generateStaticParams() {
  const projects = getProjectPosts();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const project = getProjectPosts().find(
    (project) => project.slug === slug
  );

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
  const project = getProjectPosts().find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <section>
      <h1 className="prose title mb-3 font-medium text-2xl">
        {project.metadata.title}
      </h1>

      <article className="prose prose-quoteless prose-neutral max-w-none">
        <CustomMDX source={project.content} />
      </article>
    </section>
  );
}