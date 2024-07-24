import { StaticImageData } from "next/image";

type Point = {
  key: string;
  copy: string;
};

export interface CanvaJob {
  key: string;
  title: string;
  points: Point[];
}

export interface Project {
  key: string;
  title: string;
  body: string;
  projImage: StaticImageData;
  imageAlt: string;
  htmlLink: string;
}

export interface Jobs {
  key: string;
  title: string;
  jobDescription: string;
  jobProjects: CanvaJob[];
  imageSrc: StaticImageData;
  imageAltText: string;
}
