/** @format */

import Image, { ImageProps } from "next/image";
import styles from "../assets/css/components/CustomImage.module.css";
interface Props extends ImageProps {
  imageClassName?: string;
}
export const CustomImage = (props: Props) => {
  const { imageClassName } = props;
  return (
    <div className={`${styles.imageContainer} ${props.className}`}>
      <Image {...props} className={imageClassName} fill />
    </div>
  );
};
