"use client";
import { ReactNode, createContext, useState } from "react";
import { scroll } from "framer-motion/dom";
import { useMotionValueEvent, useScroll } from "framer-motion";

interface MyObjectType {
  version: string;
  canTrackVelocity: boolean;
  events: Record<string, never>; // 또는 Record<string, any> 으로 변경 가능
  hasAnimated: boolean;
  current: number;
  updatedAt: number;
  prevFrameValue: number;
  prevUpdatedAt: number;
  prev: number;
}

export const MainContext = createContext({}); // 이렇게 만들어주고

const MainContextComponent = ({ children }: { children: React.ReactNode }) => {
  const [pageScrollY, setPageScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPageScrollY(latest * 100);
  });

  return (
    <MainContext.Provider
      value={{
        pageScrollY,
        setPageScrollY,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextComponent;
