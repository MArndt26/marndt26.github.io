import { Item, Paragraph, Section } from "@content/content_types";

const description = [
  new Paragraph([
    new Item(
      "The purpose of the Cache UVM Testbench project was to create a modular, reusable framework of testing components for the memory hierarchy for Purdue SoCET's RISCV Processor core. The main parts of the testbench can be split into the following components: Bus Agent, Bus Scoreboard/Predictor, and End2End Checker. The Bus Agent provides the core interfacing logic to communicate abstract cpu-transactions to the memory hierarchy. This involves reads, writes, and flush operations. The Bus Agent is extended to create a CPU Agent that drives these processor transactions to stress the various features of the RTL design. The Bus Scoreboard and Predictor pair to check the input side of any memory device (L1 cache, L2 cache, memory BFM). The End2End Checker ensures the proper translation of transactions as they propagate throughout the memory hierarchy."
    ),
  ]),
];

export const socet_content = new Section(
  "UVM Caches",
  "UVM Verification for Two-Stage Cache Hierarchy of RISCV Processor",
  description,
  {
    github:
      "https://github.com/Purdue-SoCET/RISCVBusiness/tree/Caches/verification/uvm/caches",
    photos: [
      { href: "socet/L2-Presentation-Top.png", type: "big" },
      { href: "socet/L2_UVM.png", type: "wide" },
      { href: "socet/Multicore_UVM.png", type: "wide" },
    ],
  }
);
