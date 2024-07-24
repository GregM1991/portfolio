import { StaticImageData } from "next/image";

export interface Testimonial {
  key: string;
  img: StaticImageData;
  imgAltText: string;
  leadText: string;
  bodyText: string;
  name: string;
  role: string;
}
