import { Item, Paragraph, Section } from '@content/content_types';

const description = [
  new Paragraph([
    new Item(
      'This Project is used to create a control pad and scale to dispense adhesive until a weight limit is reached. E3 Displays uses various manufacturing processes when fabricating the customized display stacks for its customers. One of these processes involves using precise amounts of adhesive for bonding displays to cover glass. In the past, this has been a manual process, requiring operators to spend large amounts of time preparing the adhesive for the bonding process.  This project automates this by bundling all the prep work into one location, controlled electronically.'
    ),
  ]),
];

export const e3_content = new Section(
  'E3 Auto Adhesive Dispenser',
  'Automated Control System for Display Adhesive Dispenser',
  description,
  {
    github: 'https://github.com/MArndt26/E3-Auto-Dispenser',
    photos: [
      { href: 'e3/cart.jpg', type: 'tall' },
      { href: 'e3/box_internal.jpg', type: 'big' },
      { href: 'e3/pump.jpg', type: 'tall' },
    ],
    video: { id: 'TZbIzYgnOPE' },
  }
);
