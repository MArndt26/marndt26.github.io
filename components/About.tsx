import { Paragraph } from '@content/content_types';
import { Header, TextParser } from '@components/Layout';
import Image from 'next/image';
import { HeadShot } from './HeadShot';
import { about_content } from '@content/about';

interface Props {}

export const About = ({}: Props) => {
  return (
    <div>
      <Header>About Me</Header>
      <div className="grid py-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <HeadShot />
        <TextParser className="text-justify" data={about_content} />
      </div>
    </div>
  );
};
