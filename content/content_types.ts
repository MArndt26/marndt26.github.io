type ItemOptions = {
  bold?: boolean;
  link?: {
    href: string;
  };
};

export class Item {
  text: string;
  options?: ItemOptions;

  constructor(text: string, options?: ItemOptions) {
    this.text = text;
    this.options = options ?? {};
  }
}

export class Paragraph {
  items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }
}

export type PhotoType = {
  href: string;
  type: 'small' | 'big' | 'wide' | 'tall';
};

export type VideoType = {
  id: string;
};

export type SectionOptions = {
  link?: string;
  github?: string;
  photos?: PhotoType[];
  video?: VideoType;
};

export class Section {
  title: string;
  quote: string;
  description: Paragraph[];
  options: SectionOptions;

  constructor(
    title: string,
    quote: string,
    description: Paragraph[],
    options?: SectionOptions
  ) {
    this.title = title;
    this.quote = quote;
    this.description = description;
    this.options = options ?? {};
  }
}

export type SchoolType = {
  name: string;
  location: string;
  duration: string;
  degree: string;
  minors: string[];
  gpa: string;
};
