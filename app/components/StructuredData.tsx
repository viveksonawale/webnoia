export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Webnoia",
    "url": "https://webnoia.com/",
    "logo": "https://webnoia.com/logos/webnoia-footer-logo.png",
    "telephone": "+91 9975558544",
    "email": "webnoiaofficial@gmail.com"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
