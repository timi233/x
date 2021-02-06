import Head from 'next/head';
import type { MetadataProps } from 'types/components/pages/Metadata';

const Metadata: React.FC<MetadataProps> = ({ description, title }) => (
  <Head>
    <meta name="description" content={description} />
    <title>{title}</title>
  </Head>
);

export default Metadata;
