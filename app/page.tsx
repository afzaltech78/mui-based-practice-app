/** @format */

import Image from "next/image";
import { TestComponents } from "./components/TestComponents";
import { TabBarComp } from "./components/TabBarComp";
import { TestComponents2 } from "./components/TestComponents2";
import { GridComponents } from "./components/GridComponents";
import RsponsiveAppBar from "./components/RsponsiveAppBar";
import ImageListComp from "./components/ImageListComp";
import DataGridComp from "./components/DataGridComp";

export default function Home() {
  return (
    <main>
      {/* <TabBarComp /> */}
      {/* <TestComponents /> */}

      {/* includes cards */}
      {/* <TestComponents2 /> */}
      {/* <GridComponents /> */}
      {/* <RsponsiveAppBar /> */}
      {/* <ImageListComp /> */}
      <DataGridComp />
    </main>
  );
}
