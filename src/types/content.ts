import { StaticImageData } from "next/image";

export type Screen = {
  key: string;
  src: StaticImageData;
  alt: string;
  imageDescription: string;
};

export type Paragraph = {
  key: string;
  copy: string;
};

type Contribution = {
  heading: string;
  body: Paragraph[];
};

export type SpotlightContent = {
  heading: string;
  description: string;
  screens?: Screen[];
  contribution: Contribution;
  tldr: string;
};
