import { Item, Paragraph } from '@content/content_types';
import { Header, TextParser } from '@components/Layout';
import Image from 'next/image';
import { HeadShot } from './HeadShot';

import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import { ReactNode } from 'react';
import Link from 'next/link';

interface Props {}

export const Contact = ({}: Props) => {
  const email = [
    new Paragraph([
      new Item('Email: '),
      new Item('MitchAArndt@gmail.com', {
        link: {
          href: 'mailto:mitchaarndt@gmail.com',
        },
      }),
    ]),
  ];
  return (
    <div className="flex flex-wrap justify-center md:justify-between">
      <div className="flex flex-col justify-end py-2 text-center md:text-left min-w-fit">
        <h1 className="text-4xl font-semibold">Mitchell Arndt</h1>
        <h2 className="text-xl font-light">
          Purdue Honors Electrical Engineering
        </h2>
      </div>
      <div>
        <div className="flex flex-row justify-end py-4">
          <IconLink href="https://www.facebook.com/mitch.arndt.50">
            <BsFacebook size={30} />
          </IconLink>
          <IconLink href="https://github.com/MArndt26">
            <BsGithub size={30} />
          </IconLink>
          <IconLink href="https://www.instagram.com/mitcharndt/">
            <BsInstagram size={28} />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/mitch-arndt-383968165/">
            <BsLinkedin size={28} />
          </IconLink>
          <IconLink href="https://twitter.com/MitchArndt">
            <BsTwitter size={30} />
          </IconLink>
        </div>
        <TextParser className="text-center md:text-right" data={email} />
      </div>
    </div>
  );
};

export const IconLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <a
        className="relative z-10 flex items-center justify-center w-16 h-16 mx-1 rounded-full text-neutral-50 button--sacnite"
        target="_blank"
      >
        {children}
      </a>
    </Link>
  );
};
