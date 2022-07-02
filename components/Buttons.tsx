import Link from 'next/link';
import { ReactNode } from 'react';
import { BsGithub } from 'react-icons/bs';

interface GHButtonProps {
  link?: string;
}

export const GitHubButton = ({ link }: GHButtonProps) => {
  if (link) {
    return (
      <div className="flex justify-center pb-1 cursor-pointer">
        <Link href={link}>
          <a
            className="flex items-center justify-center px-2 py-1 font-mono no-underline duration-75 rounded-full shadow-md text-neutral-800 bg-neutral-100 hover:scale-110 w-min"
            target="_blank"
          >
            <BsGithub size="18" />
            <p className="pl-1">source</p>
          </a>
        </Link>
      </div>
    );
  } else {
    return <></>;
  }
};

export const IconButton = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <a
        className="relative z-10 flex items-center justify-center w-16 h-16 mx-1 rounded-full text-neutral-50 before:duration-300 before:transition-all before:shadow-neutral-800 before:content-[''] before:absolute before:w-full before:shadow-inner-full before:hover:shadow-inner-sm before:h-full before:rounded-full before:-z-10 before:scale-90 hover:text-neutral-800 before:hover:scale-100"
        target="_blank"
      >
        {children}
      </a>
    </Link>
  );
};
