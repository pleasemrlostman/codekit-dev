"use client";
import { ReactNode, createContext, useState } from "react";
import { scroll } from "framer-motion/dom";
import { useMotionValueEvent, useScroll } from "framer-motion";

export const MainContext = createContext({}); // 이렇게 만들어주고

const MainContextComponent = ({ children }: { children: React.ReactNode }) => {
  const [pageScrollY, setPageScrollY] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setPageScrollY(latest);
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
