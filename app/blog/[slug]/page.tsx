import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { metaData } from "app/lib/config";
 
export async function generateStaticParams() {
  let posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
 
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) return;
 
  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
 
  let ogImage = image
    ? image
    : `${metaData.baseUrl}/og?title=${encodeURIComponent(title)}`;
 
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${metaData.baseUrl}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
  };
}
 
export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) notFound();
 
  return (
    <main className="main">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${metaData.baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${metaData.baseUrl}/blog/${post.slug}`,
            author: { "@type": "Person", name: metaData.name },
          }),
        }}
      />
 
      <section className="panel" style={{ width: "100%" }}>
        {/* Panel header — post title */}
        <div className="panel-header">
          <h2 className="title normal-case tracking-normal text-base font-bold">
            {post.metadata.title}
          </h2>
        </div>
 
        {/* Dateline */}
        <div
          className="flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-widest border-b-2"
          style={{
            color: "var(--color-muted)",
            borderColor: "var(--color-divider)",
          }}
        >
          <span>Published</span>
          <span style={{ color: "var(--color-teal)" }}>
            {formatDate(post.metadata.publishedAt)}
          </span>
        </div>
 
        {/* Body */}
        <article className="prose prose-quoteless prose-neutral dark:prose-invert max-w-none">
          <CustomMDX source={post.content} />
        </article>
      </section>
    </main>
  );
}