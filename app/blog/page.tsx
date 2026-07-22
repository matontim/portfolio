import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";
 
export const metadata = {
  title: "Blog",
  description: "Writing about the broader impacts of science and technology",
};
 
export default function BlogPosts() {
  let allBlogs = getBlogPosts();
 
  return (
    <main className="main">
      <section className="panel" style={{ width: "100%" }}>
        <div className="panel-header">
          <h2>BLOG</h2>
        </div>
        <div>
          <p className="role text-sm mb-4">
            This is my personal blog where I write on the broader impacts and societal relevance of science and
            technology. Topics include drug discovery, emerging technologies, and public
            understanding of science.
          </p>
          <hr className="panel-divider" />
          <ul className="mt-4 space-y-0">
            {allBlogs
              .sort((a, b) =>
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
                  ? -1
                  : 1
              )
              .map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex flex-row justify-between items-baseline gap-4 py-3 px-1 hover:bg-[#F0EDE6] dark:hover:bg-[#1B3A5C] transition-colors duration-100"
                  >
                    <span className="font-bold text-sm" style={{ color: "var(--color-ink)" }}>
                      {post.metadata.title}
                    </span>
                    <span
                      className="text-xs tabular-nums flex-shrink-0"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {formatDate(post.metadata.publishedAt, false)}
                    </span>
                  </Link>
                  <hr className="panel-divider" />
                </li>
              ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
