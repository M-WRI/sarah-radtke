// TYPES
import { StaticImageData } from "next/image";
import { THeadlineType } from "./headline";

export interface IHeroProps {
  img: StaticImageData;
  title?: string;
  text?: string;
  isMain?: boolean;
  headType?: THeadlineType;
  center?: boolean;
}
