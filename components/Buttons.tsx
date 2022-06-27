import { BsGithub } from 'react-icons/bs';

interface GHButtonProps {
  link?: string;
}

export const GitHubButton = ({ link }: GHButtonProps) => {
  if (link) {
    return (
      <div className="flex justify-center pb-1 cursor-pointer">
        <a
          href={link}
          className="flex items-center justify-center px-2 py-1 font-mono text-gray-800 no-underline duration-75 bg-gray-100 rounded-full shadow-md hover:scale-110 w-min"
          target="_blank"
        >
          <BsGithub size="18" />
          <p className="pl-1">source</p>
        </a>
      </div>
    );
  } else {
    return <></>;
  }
};
