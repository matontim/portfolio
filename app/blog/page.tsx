import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Writing about the broader impacts of science and technology",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="prose mb-8 text-2xl font-medium">Blog for Scientific and Research Insight</h1>
      <div className="prose prose-neutral mb-10 max-w-none">
        <p>
          Here I write about the broader impacts and societal relevence of science and technology. Topics include recent breakthroughs in drug discovery, the societal implications of emerging technologies,
          and public understanding of science.
        </p>
      </div>
      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <h2 className="prose">
                  {post.metadata.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
