import { Item, Paragraph, Section } from '@content/content_types';

const description = [
  new Paragraph([
    new Item(
      'This project is the result of an iterative design laboratory at Purdue University aimed at designing a microprocessor for the MIPS Instruction Set using System Verilog.  The design started with a basic single cycle datapath.  Following this, the datapath was split into Fetch, Decode, Execute, Memory, and Writeback stages for a simplified single core pipelined processor.  From there, the following upgrades where added to the design: Hazard Detection, Forwarding, Memory Arbitration, Caching with a 2 way set associative data cache with LRU replacement and a direct mapped instruction cache, Branch Prediction using a Branch Table Buffer with 2-bit entries.  At this point, the design branched from a single core to a multiprocessor with two identical cores.  The coherency model was based on the MSI protocol with slight alterations such as cache to cache transfer for better memory access times.  Furthermore, the multicore datapath was modified to include atomic Load-Linked and Store-Conditional operations.  Additionally, parallel assembly code was written to test this system against a MIPS simulator against various algorithms such as MergeSort, Fibonacci, Multiplication through repeated Additions, and thread safe acquire/release lock operations.'
    ),
  ]),
];

export const ece437_content = new Section(
  'Dual Core Microprocessor Designs',
  'Pipelined Dual Core with Instruction, Data Cache, and Branch Prediction through BTB',
  description,
  {
    photos: [
      { href: 'ece437/System_Block_Diagram.png', type: 'big' },
      { href: 'ece437/Datapath.png', type: 'small' },
      { href: 'ece437/D_Cache.png', type: 'small' },
      { href: 'ece437/I_Cache.png', type: 'small' },
      { href: 'ece437/BusTransitions.png', type: 'small' },
    ],
  }
);
