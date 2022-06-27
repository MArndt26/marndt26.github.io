import { Item, Paragraph, Section } from '@content/content_types';

const description = [
  new Paragraph([
    new Item(
      ' Purdue Neurological Group (PNG) is involved in many different research projects, one of which involves measuring the effects of head trauma in athletes. More specifically, football helmet collisions. The goal of the project in regards to this repository is to design and implement high-speed data collection circuitry to measure the forces that take place  during one of these football impacts (tackles). "Data collection circuitry" refers to the following:'
    ),
    new Item('A microcontroller to read in analog inputs through an ADC'),
    new Item('Variable resistance strain gauges to measure forces'),
    new Item(
      'Analog multiplexers to route 6 different signals into the microcontroller'
    ),
    new Item(
      'Differential amplifier / Wheatstone bridge to convert the sensor resistance changes into changes in voltage.'
    ),
    new Item(
      'SD card to record the data My contribution to this effort involves designing and programming the force collecting circuitry.'
    ),
    //FIXME: NEED TO CREATE LIST ITEM
  ]),
];

export const png_content = new Section(
  'High Speed Force Sensor Datalogger',
  'Datalogger for PNG Research using the Teensy 4.1 development board',
  description,
  {
    github: 'https://github.com/MArndt26/PNG_Datalogger',
    photos: [
      { href: 'png/helmet_closeup.jpg', type: 'small' },
      { href: 'png/bend_device.jpg', type: 'small' },
      { href: 'png/breadboard.jpg', type: 'big' },
      { href: 'png/helmet_setup.jpg', type: 'big' },
      { href: 'png/strain_gauge_plot.jpg', type: 'small' },
      { href: 'png/Data_Processed.jpg', type: 'small' },
    ],
  }
);
