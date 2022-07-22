import Head from 'next/head';

export interface IMetaLayout {
  title?: string;
  description?: string;
  keywords?: string[];
}

const MetaLayout: React.FC<IMetaLayout> = ({
  title = 'NextJS TypeScript Tailwind Application',
  description = 'Welcome to NextJS TypeScript and Tailwind Web Applcation!',
  keywords = ['NextJS', 'TailwindCSS', 'TypeScript'],
}) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <title>{title}</title>
    </Head>
  );
};

export default MetaLayout;
