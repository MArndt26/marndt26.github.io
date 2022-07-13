import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

export const MetaTags = ({
  title = 'Mitchell Arndt | Purdue Electrical Engineer',
  description = "I am a Master's student at Purdue University studying Electrical Engineering with a focus in Computer Architecture. I am intensely curious about ASIC design and embedded system development.",
  image = '/banner.png',
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
    </Head>
  );
};
