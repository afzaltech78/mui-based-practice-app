/** @format */

import { Box } from "@mui/material";
import Image from "next/image";
import styles from "../assets/css/components/AuthHeader.module.css";
import { CustomImage } from "./CustomImage";

export const AuthHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles["sub-container"]} />
      <CustomImage
        src={"/authheader.png"}
        alt="Auth header images"
        className={styles["image-container"]}
        quality={10}
        objectFit="cover"
      />
      {/* <div className={styles["image-container"]}>
        <Image
          src={"/authheader.png"}
          alt={"Auth header images"}
          className={styles["header-image"]}
          layout="fill" // Fill the container size
          objectFit="cover" // Maintain aspect ratio and cover container
          objectPosition="center" // Center the image
          quality={10}
        />
      </div> */}
    </div>
  );
};
