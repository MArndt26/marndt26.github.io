import { Paragraph, PhotoType, VideoType } from '@content/content_types';
import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  children?: ReactNode | ReactNode[];
}

export const HTMLContainer = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col items-center pt-8 m-0 overflow-x-hidden text-center bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-50 shadow-neutral-50">
      <div className="mx-6 space-y-5 min-h-content lg:max-w-screen-lg md:max-w-screen-md md:mx-10">
        {children}
      </div>
    </div>
  );
};

export const TextParser = ({
  data,
  className = '',
}: {
  data: Paragraph[];
  className?: string;
}) => {
  return (
    <div className={`sm:col-span-1 md:col-span-2 lg:col-span-3 ${className}`}>
      {data.map((p, i) => {
        return (
          <p key={i} className="pb-2">
            {p.items.map((item, j) => {
              if (item.options?.bold) {
                return <mark key={j}>{item.text}</mark>;
              } else if (item.options?.link) {
                const link = item.options.link;
                return (
                  <Link key={j} href={link.href}>
                    <a target="_blank">{item.text}</a>
                  </Link>
                );
              } else {
                return item.text;
              }
            })}
          </p>
        );
      })}
    </div>
  );
};

export const Header = ({ children }: Props) => {
  return (
    <h2 className="pb-4 text-3xl font-thin border-neutral-800 border-b-1/2 dark:border-neutral-50">
      {children}
    </h2>
  );
};

interface PhotoGalleryProps {
  photos: PhotoType[] | undefined;
}

export const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  if (photos) {
    return (
      <div className="pb-4">
        <p className="pb-2 text-2xl font-semibold text-left">Photo Gallery</p>
        <div className="photo-grid">
          {photos.map((photo, i) => {
            return (
              <Link key={i} href={`/img/${photo.href}`}>
                <div
                  className={`cursor-pointer dark:opacity-90 card card-${photo.type}`}
                  // background image style is basically a lazy load
                  style={{ backgroundImage: `url('/img/${photo.href}')` }}
                ></div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

interface YoutubeProps {
  data?: VideoType;
}

export const Youtube = ({ data }: YoutubeProps) => {
  if (data) {
    return (
      <div className="video dark:opacity-90">
        <iframe
          src={`https://www.youtube.com/embed/${data.id}`}
          allowFullScreen
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    );
  } else {
    return <></>;
  }
};
