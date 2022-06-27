import { Item, Paragraph, Section } from '@content/content_types';

const description = [
  new Paragraph([
    new Item(
      "This Project is used to interface with the microcontroller for the Autonomous Motorsport Purdue go-kart. A key issue for the AMP team is the allocation of resources between the sub-teams.  Due to the tight integration of our systems, both Electrical and Software sub-teams require access to the kart's main computer (Nvidia Jetson) and the electrical controller (Arduino MCU) for development/debugging tasks.  To solve this issue, I created this Jetson Serial Simulator program.  This software takes the place of the Jetson which allows for full electrical integration testing, without the need to schedule time with the physical Jetson computer."
    ),
  ]),
];

export const jss_content = new Section(
  'AMP Jetson Serial Simulator',
  'Electron based serial simulator for testing serial communication between the Jetson and Arduino MCU',
  description,
  {
    github:
      'https://github.com/Autonomous-Motorsports-Purdue/AMP-Jetson-Serial-Sim',
    video: { id: 'daYhBjnEbTU' },
  }
);
