import { Item, Paragraph } from '@content/content_types';

export const about_content = [
  new Paragraph([
    new Item('I am a Masters student at '),
    new Item('Purdue University', { bold: true }),
    new Item(' studying '),
    new Item('Electrical Engineering', { bold: true }),
    new Item(
      ' with a focus in Computer Architecture. I am intensely curious about ASIC design and embedded system development. I have experience in '
    ),
    new Item('UVM Verification', { bold: true }),
    new Item(
      ' of a two-stage cache hierarchy as well as microcontroller development across multiple systems including '
    ),
    new Item('ESP32', { bold: true }),
    new Item(', '),
    new Item('STM32', { bold: true }),
    new Item(', '),
    new Item('Teensy', { bold: true }),
    new Item('.'),
  ]),
  new Paragraph([
    new Item(
      'I enjoy programming clean and intuitive applications for assisting in engineering projects, solving business problems, and sometimes just for fun! I have worked with many different languages including: '
    ),
    new Item('System Verilog', { bold: true }),
    new Item(', '),
    new Item('C', { bold: true }),
    new Item(', '),
    new Item('C++', { bold: true }),
    new Item(', '),
    new Item('Java', { bold: true }),
    new Item(', '),
    new Item('JavaFX', { bold: true }),
    new Item(', '),
    new Item('NodeJS', { bold: true }),
    new Item(', '),
    new Item('Typescript', { bold: true }),
    new Item(', '),
    new Item('Python', { bold: true }),
    new Item(', '),
    new Item('MatLab', { bold: true }),
    new Item('.'),
  ]),
  new Paragraph([
    new Item(
      'To assist in my electrical projects I use many engineering tools such as '
    ),
    new Item('QuestaSim', { bold: true }),
    new Item(', '),
    new Item('Cadence', { bold: true }),
    new Item(', '),
    new Item('Design Compiler', { bold: true }),
    new Item(', '),
    new Item('Git/GitHub', { bold: true }),
    new Item(', '),
    new Item('KiCAD', { bold: true }),
    new Item(', '),
    new Item('LTspice', { bold: true }),
    new Item('.'),
  ]),
  new Paragraph([
    new Item('To see my resume, '),
    new Item('click here', {
      link: {
        href: 'https://marndt26.github.io/Resume/Mitchell-Arndt-Resume.pdf',
      },
    }),
  ]),
];
