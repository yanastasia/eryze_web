export default function Head() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eryze.io";
  const canonical = `${siteUrl}/anastasia`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anastasia Yakimovska",
    url: canonical,
    jobTitle: "Engineer, Product Builder, Creative Strategist",
    worksFor: {
      "@type": "Organization",
      name: "Eryze Studio",
      url: siteUrl,
    },
  };
  return (
    <>
      <title>Anastasia Yakimovska - Portfolio</title>
      <meta name="description" content="Engineer - Product Builder - Creative Strategist - Community Catalyst. Explore archetypes and projects across strategy, design, and technology." />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content="Anastasia Yakimovska - Portfolio" />
      <meta property="og:description" content="Engineer - Product Builder - Creative Strategist - Community Catalyst." />
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Anastasia Yakimovska - Portfolio" />
      <meta name="twitter:description" content="Engineer - Product Builder - Creative Strategist - Community Catalyst." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}