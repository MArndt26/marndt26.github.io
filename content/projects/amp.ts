import { Item, Paragraph, Section } from '@content/content_types';

const description = [
  new Paragraph([
    new Item(
      "The purpose of this project is to implement a serial parsing microcontroller system to operate the steering, throttle, and braking functionality of the Autonomous Motorsport Purdue (AMP) go-kart. Autonomous racing has grown in popularity as more teams work to solve the unique problem of autonomous decision making at very high speeds. Our sub-team is working with the low-level electrical hardware on our modified go-kart, mainly focusing on parsing data from the onboard computer and distributing signals to other electronics such as the motor controller, linear actuator, and servos. To do this, the microcontroller receives custom serial packets from the go kart's computer to enable and then control the steering angle, throttle intensity, and brake position. The steering angl  is set with a pulse width modulated (PWM) signal from the microcontroller. The throttle is controlled via the digital to analog converter (DAC) and the braking is set via digital signals. To reduce processing time the serial structure was designed to use byte long data instead of floating-point values because the microcontroller does not have dedicated floating-point hardware. Furthermore, we implemented various error handling methods for packet transmission such as cyclic redundancy check. This project is currently in its initial testing phase. We are testing the integration of our subsystems by controlling the serial input using a custom javascript-based simulator. The ultimate goal of this project is to have a fully autonomous go-kart that can navigate any track environment at the maximum speed possible."
    ),
  ]),
];

export const amp_content = new Section(
  'Hardware Control with Serial Parsing Microcontroller for Autonomous Racing',
  'Arduino based embedded system for controlling low level electronics of autonomous go kart',
  description,
  {
    link: 'https://web.ics.purdue.edu/~elgamala/AMP-VIP',
    github: 'https://github.com/ Autonomous-Motorsports-Purdue/AMP_MCUv1',
    photos: [
      { href: 'amp/AMP_Group.png', type: 'big' },
      { href: 'amp/AMP_Kart.jpg', type: 'wide' },
      { href: 'amp/AMP_PCB.png', type: 'small' },
      { href: 'amp/AMP_Expo_Certificate.png', type: 'small' },
    ],
    video: { id: 'CATtHCXGsZI' },
  }
);
