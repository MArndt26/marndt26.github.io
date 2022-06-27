import { Item, Paragraph, Section } from '@content/content_types';

const description = [
  new Paragraph([
    new Item(
      'The goal of this project is to create the most engaging and socially distanced version of Battleship, and our team has conceptualized a variety of ways to enhance the game experience while keeping its integrity. The first obstacle is to maintain social distancing. Our team plans to implement a connection between two battery-powered boards via WiFi from the ESP32 and web sockets, allowing for optimal and adjustable distancing. We will use a server to host the code for the gameplay logic, which validates legal plays on both boards. To reinvigorate gameplay, our team will engage with the players through touch, sight, and sound. Players will firmly place or lock-in, their boats on the boards at the beginning of the game and enter coordinates on a key pad to determine the attack location (depending on gameplay selection). For each “attack”, LEDs corresponding to hits or misses will flash on both players’ boards, creating a stronger visual appeal. When a boat is decimated, each setup will vibrate and audibly announce which boat has sunk, which will not only keep players interested but reproduce the incentive to win. Finally, to put a spin on the traditional playing style, we will create a variety of game modes. These different modes will allow players to play casually or competitively, quickly or for longevity. The various play options will further player interest simply by allowing the players to play towards an objective of their choice.'
    ),
  ]),
];

export const sink_or_be_sunk_content = new Section(
  'Sink or be Sunk Embedded Senior Design Project',
  'A WiFi Connected, electronic twist on the classic Battleship game',
  description,
  {
    link: 'https://sink-or-be-sunk.github.io/Team_Website',
    github: 'https://github.com/Sink-or-be-Sunk',
    photos: [
      { href: 'sink-or-be-sunk/Homepage.png', type: 'big' },
      { href: 'sink-or-be-sunk/led_rainbow_demo.gif', type: 'wide' },
      { href: 'sink-or-be-sunk/AccountPage.png', type: 'small' },
      { href: 'sink-or-be-sunk/DevicePairing.gif', type: 'small' },
      { href: 'sink-or-be-sunk/Final_ESP32_Render.png', type: 'big' },
      { href: 'sink-or-be-sunk/grid_demo.gif', type: 'wide' },
      { href: 'sink-or-be-sunk/cadBoat.jpeg', type: 'wide' },
    ],
    video: { id: 'ziMwrT-h9pU' },
  }
);
