import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import SEOHead from "../components/SEOHead";
import PageHero from "../components/PageHero";
import { blogPosts } from "../data/blogPosts";

const thumbBg = ["bg-primary", "bg-accent-yellow", "bg-accent-teal"];

export default function BlogPage() {
  return (
    <>
      <SEOHead
        title="Security Blog Bangalore | Tips & Guides"
        description="Expert security insights for Bangalore businesses — choosing agencies, guards vs CCTV, and corporate safety guides."
        path="/blog"
      />
      <PageHero
        title="Security Blog & Resources"
        subtitle="Expert guides on security services Bangalore property owners and businesses need."
        breadcrumb="Blog"
      />

      <main className="bg-neutral-100">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts
              .slice()
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((post, i) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className={`flex aspect-video items-center justify-center overflow-hidden ${thumbBg[i % thumbBg.length]}`}>
                    {post.image ? (
                      <img
                        src={post.image}
                        alt=""
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <Shield
                        className={`h-12 w-12 ${i === 1 ? "text-navy/30" : "text-white/40"}`}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </Link>
                <div className="p-6">
                  <time className="text-xs font-semibold uppercase tracking-wider text-primary" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 text-lg font-bold text-navy">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-600">{post.excerpt}</p>
                  <p className="mt-2 text-xs text-gray-400">{post.readTime}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-primary"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
