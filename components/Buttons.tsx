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
        className="relative z-10 flex items-center justify-center w-16 h-16 mx-1 rounded-full group text-neutral-50 dark:text-neutral-800 hover:text-neutral-800 dark:hover:text-neutral-50"
        target="_blank"
      >
        <span className="absolute w-full h-full transition-all duration-300 scale-90 rounded-full shadow-neutral-800 dark:shadow-neutral-50 -z-10 shadow-inner-full group-hover:scale-100 group-hover:shadow-inner-sm">
          {''}
        </span>
        {children}
      </a>
    </Link>
  );
};
