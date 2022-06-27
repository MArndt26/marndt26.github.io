import { Item, Paragraph, Section } from '@content/content_types';

const description = [
  new Paragraph([
    new Item(
      'In the era of COVID and distance friendships, people need a method of connecting with individuals musically. Even in the absence of COVID, it is difficult to meet people with similar music tastes willing to attend a  concert together. With Harmonize users will be able to easily connect with people and explore their music tastes.  Unlike the vanilla services provided by Spotify, this will allow users to share their personal music style with the world and foster new friendships along the way. Harmonize is a one-stop-shop for online music socialization.'
    ),
  ]),
];

export const harmonize_content = new Section(
  'Harmonize',
  'Social media application aimed at connecting individuals with similar musical interests',
  description,
  {
    // link: "https://web.ics.purdue.edu/~elgamala/AMP-VIP", //TODO: create heroku version of app and add link, may require spotify creds (may not be worth it...)
    github: 'https://github.com/MArndt26/Harmonize',
    photos: [
      { href: 'harmonize/navbar.png', type: 'tall' },
      { href: 'harmonize/user_homepage.png', type: 'big' },
      { href: 'harmonize/recommendation_dashboard.png', type: 'big' },
      { href: 'harmonize/music_groups_page.png', type: 'tall' },
    ],
  }
);
