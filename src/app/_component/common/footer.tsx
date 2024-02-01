"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useContext } from "react";
import { MainContext } from "./main-contextApi";

const Footer = () => {
  const { pageScrollY } = useContext(MainContext) as {
    pageScrollY: number;
    setPageScrollY: Dispatch<SetStateAction<number>>;
  };

  console.log("pageScrollY", pageScrollY);

  return (
    <footer className="bg-slate-200 w-full">
      <div className="flex items-center h-14 gap-4 justify-center">
        <motion.h1
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            x: pageScrollY > 98 ? 0 : -100,
            opacity: pageScrollY > 98 ? 1 : 0,
          }}
          className="cursor-pointer h-6 flex items-center justify-center"
        >
          <Link href="/">
            <Image src="/logo.png" width={128} height={24} alt="logo" />
          </Link>
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            x: pageScrollY > 98 ? 0 : 100,
            opacity: pageScrollY > 98 ? 1 : 0,
          }}
        >
          © All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};
export default Footer;
