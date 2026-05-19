import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Link2 } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import SEOHead from "../components/SEOHead";
import CTABanner from "../components/CTABanner";
import { getPostBySlug } from "../data/blogPosts";
import { SITE_URL } from "../data/config";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const url = `${SITE_URL}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Eagle Eye Watch Security & Services" },
    mainEntityOfPage: url,
  };

  const share = (platform) => {
    const encoded = encodeURIComponent(url);
    const text = encodeURIComponent(post.title);
    const links = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      twitter: `https://twitter.com/intent/tweet?url=${encoded}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
    };
    if (platform === "copy") {
      navigator.clipboard?.writeText(url);
      return;
    }
    window.open(links[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        path={`/blog/${post.slug}`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <article className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-16 md:pt-24">
          <header className="max-w-3xl border-b border-neutral-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              <Link to="/blog" className="hover:text-primary-dark">
                Blog
              </Link>{" "}
              / Article
            </p>
            <h1 className="mt-4 text-4xl font-bold text-navy md:text-5xl">{post.title}</h1>
            <p className="mt-4 text-gray-500">
              {post.author} · {post.readTime} ·{" "}
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
          </header>

          <div className="mt-12 grid gap-12 lg:grid-cols-[240px_1fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <nav aria-label="Table of contents" className="rounded-2xl border border-neutral-200 bg-neutral-100 p-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-primary">Contents</h2>
                <ol className="mt-4 space-y-2 border-l-2 border-primary/30 pl-4">
                  {post.sections.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="text-sm text-gray-600 hover:text-primary">
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Share</p>
                <div className="mt-2 flex gap-2">
                  {[
                    { platform: "facebook", Icon: FaFacebookF, label: "Facebook" },
                    { platform: "twitter", Icon: FaTwitter, label: "Twitter" },
                    { platform: "linkedin", Icon: FaLinkedinIn, label: "LinkedIn" },
                  ].map(({ platform, Icon, label }) => (
                    <button
                      key={platform}
                      type="button"
                      onClick={() => share(platform)}
                      className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-neutral-200 text-primary hover:bg-primary-light"
                      aria-label={`Share on ${label}`}
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => share("copy")}
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-neutral-200 text-primary hover:bg-primary-light"
                    aria-label="Copy link"
                  >
                    <Link2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </aside>

            <div className="max-w-3xl">
              <p className="text-lg leading-relaxed text-gray-600">{post.excerpt}</p>
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="mt-12 scroll-mt-28">
                  <h2 className="text-2xl font-bold text-navy md:text-3xl">{section.heading}</h2>
                  <div className="section-divider !mx-0 !mt-3 !mb-6" />
                  <p className="leading-relaxed text-gray-600">{section.content}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTABanner
        title="Need Professional Security in Bangalore?"
        subtitle="Speak with Eagle Eye Watch Security for a free site assessment."
      />
    </>
  );
}
