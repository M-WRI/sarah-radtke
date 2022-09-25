import Image from "next/image";
// IMG
import TitleImg from "../img/title_img_sarah_radtke.jpeg";
import Cmd from "../img/cmd_img_sarah_radtke.jpeg";
import Acupuncture from "../img/acupuncture_img_sarah_radtke.jpeg";
import Massage from "../img/massage_img_sarah_radtke.jpeg";
import Manual from "../img/manual_therapy_img_sarah_radtke.jpeg";
import About from "../img/about_img_sarah_radkte.jpeg";
// TYPE
import { IImageProps, TImageType } from "../types/image.types";

export const ImageComponent = ({ type, alt }: IImageProps): JSX.Element => {
  const imageSwitch = (type: TImageType) => {
    switch (type) {
      case "title":
        return TitleImg;
      case "cmd":
        return Cmd;
      case "acupuncture":
        return Acupuncture;
      case "massage":
        return Massage;
      case "manual":
        return Manual;
      case "about":
        return About;
    }
  };

  const img = imageSwitch(type);

  return (
    <>
      {img && (
        <Image
          src={img}
          alt={alt}
          layout="fill"
          objectFit="cover"
          quality={40}
          priority
        />
      )}
    </>
  );
};
