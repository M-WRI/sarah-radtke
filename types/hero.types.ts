import { StaticImageData } from "next/image";

export interface IHeroProps {
  img: StaticImageData;
  title?: string;
  text?: string;
  isMain?: boolean;
}
