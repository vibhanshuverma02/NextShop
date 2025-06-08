// components/SEO.tsx
import Head from 'next/head';

const SEO = () => {
  const title = 'Vibesta';
  const description='An eCommerce website showcasing a dynamic, SEO-friendly, responsive, and scalable web and mobile application';
  const keywords = 'Vibesta, ecommerce, nextjs online stoe, SEO, online stores ';
  const image = '/vibhanshuverma.png'; // Place this in your public folder
  const url = 'https://vibesta.netlify.app';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Vibhanshu Verma" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;
