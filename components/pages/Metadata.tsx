import Head from 'next/head';
import { FC } from 'react';

type MetadataProps = {
  description: string;
  title: string;
};

const Metadata: FC<MetadataProps> = ({ description, title }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default Metadata;
