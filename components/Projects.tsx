import { Item, Paragraph, Section } from '@content/content_types';
import { Header, PhotoGallery, TextParser, Youtube } from '@components/Layout';
import { projects_content } from '@content/projects/index';

import { GitHubButton } from './Buttons';
import Link from 'next/link';

interface Props {}

export const Projects = ({}: Props) => {
  return (
    <div>
      <Header>Projects</Header>
      <div>
        {projects_content.map((section, i) => {
          return <Project key={i} data={section} />;
        })}
      </div>
    </div>
  );
};

export const Project = ({ data }: { data: Section }) => {
  return (
    <div className="py-8">
      <h3 className="pb-1 text-2xl font-semibold text-neutral-700 dark:text-neutral-300">
        {data.title}
      </h3>

      <GitHubButton link={data.options.github} />

      {data.options.link ? (
        <p className="mb-1">
          <Link href={data.options.link}>
            <a
              className="text-sm italic font-thin no-underline dark:hover:underline"
              target="_blank"
            >
              {data.options.link}
            </a>
          </Link>
        </p>
      ) : (
        <></>
      )}
      <h4 className="pb-4 text-sm italic">{data.quote}</h4>
      <TextParser className="text-justify" data={data.description} />
      <PhotoGallery photos={data.options.photos} />
      <Youtube data={data.options.video} />
    </div>
  );
};
