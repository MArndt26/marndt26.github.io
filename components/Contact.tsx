import { Item, Paragraph } from '@content/content_types';
import { Header, TextParser } from '@components/Layout';

import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import { IconButton } from '@components/Buttons';

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
          <IconButton href="https://www.facebook.com/mitch.arndt.50">
            <BsFacebook size={30} />
          </IconButton>
          <IconButton href="https://github.com/MArndt26">
            <BsGithub size={30} />
          </IconButton>
          <IconButton href="https://www.instagram.com/mitcharndt/">
            <BsInstagram size={28} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/mitch-arndt-383968165/">
            <BsLinkedin size={28} />
          </IconButton>
          <IconButton href="https://twitter.com/MitchArndt">
            <BsTwitter size={30} />
          </IconButton>
        </div>
        <TextParser className="text-center md:text-right" data={email} />
      </div>
    </div>
  );
};
