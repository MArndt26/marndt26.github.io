import { Item, Paragraph, Section } from '@content/content_types';

const description = [
  new Paragraph([
    new Item(
      "This project used multiple peripheral systems of a STM32 microcontroller to recreate the infamous flappy bird game. The system shows the main content through an LCD display controlled through SPI communication with the microcontroller. There is also an additional 7 segment display to update the user's score.  Finally, game music (the Tetris Theme Song) is output to the user by passing a variable duty cycle PWM signal through a hardware low pass filter."
    ),
  ]),
];

export const flappy_content = new Section(
  'Retro Game Console',
  'Microcontroller Controlled Flappy Bird Game Console',
  description,
  {
    github: 'https://github.com/MArndt26/MCU_Flappy_Bird',
    photos: [
      { href: 'flappy/full_board.jpg', type: 'big' },
      { href: 'flappy/screen.jpg', type: 'tall' },
      { href: 'flappy/score.jpg', type: 'small' },
    ],
    video: { id: 'S5TemZ1Fc4k' },
  }
);
