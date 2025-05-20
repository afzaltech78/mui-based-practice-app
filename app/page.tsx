/** @format */

import Image from "next/image";
import { TestComponents } from "./(practice)/components/TestComponents";
import { TabBarComp } from "./(practice)/components/TabBarComp";
import { TestComponents2 } from "./(practice)/components/TestComponents2";
import { GridComponents } from "./(practice)/components/GridComponents";
import RsponsiveAppBar from "./(practice)/components/RsponsiveAppBar";
import ImageListComp from "./(practice)/components/ImageListComp";
import DataGridComp from "./(practice)/components/DataGridComp";
import { StyledComponet } from "./(practice)/components/StyledComponet";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <TabBarComp /> */}
      {/* <TestComponents /> */}

      {/* includes cards */}
      {/* <TestComponents2 /> */}
      {/* <GridComponents /> */}
      <RsponsiveAppBar />
      <ImageListComp />
      {/* <DataGridComp /> */}
      {/* <StyledComponet /> */}
      {/* <Link href={"/login"}>Go To Login</Link>
       */}
      {/* <div
        style={{
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          height: "100vh",
        }}>
        {[1, 2, 3, 4].map((item) => (
          <div
            className={`${
              item % 2 == 0 ? "bg-slate-300" : "bg-slate-400"
            } h-[100vh]`}
            style={{
              scrollSnapAlign: "start",
              scrollMargin: 0,
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            Hello: {item}
          </div>
        ))}
      </div> */}
    </main>
  );
}
