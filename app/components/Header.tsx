/** @format */

import SearchIcon from "@mui/icons-material/Search";
import styles from "../assets/css/components/Header.module.css";
import { CustomImage } from "./CustomImage";
import { CustomTextInput } from "./CustomTextInput";
import Image from "next/image";

export const Header = () => {
  return (
    <div className={styles.container}>
      <CustomImage
        src={"/fg_icon2.png"}
        alt="header image"
        className={styles["image-container"]}
        quality={10}
        objectFit="contain"
      />
      <div className={styles["sub-container"]}>
        <div className={styles["search-bar-container"]}>
          <SearchIcon
            style={{
              position: "absolute",
              color: "white",
              paddingLeft: "10px",
            }}
          />
          <input
            placeholder={"Search"}
            className={styles["search-bar-input"]}
          />
        </div>
        <div className={styles.iconContainer}>
          <Image
            src={"/bell.png"}
            alt={""}
            width={24}
            height={24}
            className={styles["icon"]}
          />
          <Image
            src={"/or_line.png"}
            alt={""}
            width={2}
            height={24}
            className={styles["icon"]}
          />
          <Image
            src={"/themeDark.png"}
            alt={""}
            width={24}
            height={24}
            className={styles.icon}
          />
        </div>

        <Image
          src={"/user.png"}
          alt={""}
          width={24}
          height={24}
          className={styles.profileImage}
        />
      </div>
    </div>
  );
};
