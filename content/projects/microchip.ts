import { Item, Paragraph, Section } from '@content/content_types';

const description = [
  new Paragraph([
    new Item(
      'The Serial Management Interface (SMI) Controller Project walks through the digital workflow from RTL to synthesis.  The design is based on the IEEE 802.3 ethernet standard.  More specifically, it implements Clause 22 direct (IEEE 802.3 section 22.2.4.5), Clause 45 direct (IEEE 802.3 section 45.3), and Clause 22 Access to Clause 45 Registers (explained in detail '
    ),
    new Item('here', {
      link: {
        href: 'https://www.ieee802.org/3/efm/public/nov02/oam/pannell_oam_1_1102.pdf',
      },
    }),
    new Item(
      ').  Further information about the communication protocol can be found '
    ),
    new Item('here', {
      link: {
        href: 'https://www.totalphase.com/support/articles/200349206-MDIO-Background',
      },
    }),
    new Item('.'),
  ]),
  new Paragraph([
    new Item(
      'After the RTL implementation, the next stage was to verify the design.  The initial strategy was to use a directed test bench for specific transaction sequences.  To increase the coverage of the input space, UVM was used to conduct constrained, randomized testing of the SMI controller.  The UVM structure contained a serial agent to generate a high level transaction, parse this transaction into mdio packets based on the protocol, and drive the serial channel to the device.'
    ),
  ]),
  new Paragraph([
    new Item(
      'The final stage of this project was to synthesize the design.  This was done using the DC NXT synthesis tool.  The design was timing constrained to match the requirements of the production chip from Microchip.'
    ),
  ]),
];

export const microchip_content = new Section(
  'SMI Core',
  'RTL Design, UVM Verification, and DCNXT Synthesis for SMI Controller',
  description,
  {
    // github:'https://github.com/Purdue-SoCET/RISCVBusiness/tree/Caches/verification/uvm/caches',
    photos: [
      // FIXME: REMOVE IMG IF NOT BEING USED
      { href: 'microchip/smi_core_syn_top.png', type: 'small' },
      { href: 'microchip/smi_fsm.png', type: 'tall' },
      { href: 'microchip/smi_uvm_top.png', type: 'wide' },
      { href: 'microchip/smi_sch.png', type: 'small' },
      { href: 'microchip/smi_waves.png', type: 'small' },
      { href: 'microchip/fpga.png', type: 'small' },
      // { href: 'microchip/fifo_sch.png', type: 'small' },
      // { href: 'microchip/cpu.png', type: 'small' },
    ],
  }
);
//
