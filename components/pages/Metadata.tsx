import Head from 'next/head';
import { FC } from 'react';
import { MetadataProps } from 'types/pages/Metadata';

const Metadata: FC<MetadataProps> = ({ description, title }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default Metadata;
