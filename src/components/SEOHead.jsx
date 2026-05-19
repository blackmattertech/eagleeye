import { Helmet } from "react-helmet-async";
import { SITE_URL, KEYWORDS, DEFAULT_OG_IMAGE } from "../data/config";

export default function SEOHead({
  title,
  description,
  keywords = KEYWORDS,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
}) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes("Eagle Eye") ? title : `${title} | Eagle Eye Watch Security`;

  return (
    <Helmet>
      <title>{fullTitle.length > 60 ? title : fullTitle}</title>
      <meta name="description" content={description.slice(0, 155)} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description.slice(0, 155)} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Eagle Eye Watch Security & Services" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description.slice(0, 155)} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
