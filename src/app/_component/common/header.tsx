"use client";
import Image from "next/image";
import LogoImage from "/logo.png";
import { Dispatch, SetStateAction, useContext } from "react";
import { MainContext } from "./main-contextApi";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const { pageScrollY } = useContext(MainContext) as {
    pageScrollY: number;
    setPageScrollY: Dispatch<SetStateAction<number>>;
  };

  const controls = useAnimation();

  const shakeAnimation = {
    scale: [1, 1.1, 1.05, 1.1, 1], // 확대/축소
    rotate: [0, 3, -3, 1, -1, 0], // 회전
    transition: { duration: 1 },
  };

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -100,
        paddingLeft: "100px",
        paddingRight: "100px",
      }}
      animate={{
        opacity: pageScrollY > 3 ? 0 : 1,
        y: pageScrollY > 3 ? -100 : 0,
        paddingLeft: pageScrollY > 3 ? "100px" : "0px",
        paddingRight: pageScrollY > 3 ? "100px" : "0px",
      }}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 0.4 }}
      className="w-full border-b h-24 fixed top-0"
    >
      <div className="flex items-center justify-between h-full px-8">
        <motion.h1
          className="cursor-pointer"
          whileHover={shakeAnimation}
          animate={controls}
          onMouseEnter={() => controls.start(shakeAnimation)}
          onMouseLeave={() => controls.start({ scale: 1, rotate: 0 })}
        >
          <Link href="/">
            <Image src="/logo.png" width={312} height={24} alt="logo" />
          </Link>
        </motion.h1>
        <ul className="flex items-center gap-8">
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </motion.header>
  );
};

export default Header;
