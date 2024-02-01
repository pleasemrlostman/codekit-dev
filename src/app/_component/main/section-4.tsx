"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useContext } from "react";
import { MainContext } from "../common/main-contextApi";

const shakeAnimation = {
  rotate: [0, 4, -6, 1, -2, 0], // 회전
  transition: { duration: 0.7 },
};

const Section4 = () => {
  const { pageScrollY } = useContext(MainContext) as {
    pageScrollY: number;
    setPageScrollY: Dispatch<SetStateAction<number>>;
  };
  const controls = useAnimation();

  return (
    <div className="h-lvh relative">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: pageScrollY > 90 ? 1 : 0,
          scale: pageScrollY > 90 ? [1, 1.2, 1.05, 1.1, 1] : 0,
        }}
        transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 0.4 }}
        className="w-52 h-52 absolute top-24 left-5"
      >
        <Image
          fill
          alt="object"
          src="https://codekit.im/icons/thorus_knot.png"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: pageScrollY > 90 ? 1 : 0,
          scale: pageScrollY > 90 ? [1, 1.2, 1.05, 1.1, 1] : 0,
        }}
        transition={{
          ease: [0.17, 0.67, 0.83, 0.67],
          duration: 0.4,
          delay: 0.8,
        }}
        className="w-52 h-52 absolute right-36 bottom-5"
      >
        <Image
          fill
          alt="object"
          src="https://codekit.im/icons/thorus_knot.png"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: pageScrollY > 90 ? 1 : 0,
          scale: pageScrollY > 90 ? [1, 1.2, 1.05, 1.1, 1] : 0,
        }}
        transition={{
          ease: [0.17, 0.67, 0.83, 0.67],
          duration: 0.4,
          delay: 0.5,
        }}
        className="w-52 h-52 absolute right-1/4 bottom-1/2"
      >
        <Image
          fill
          alt="object"
          src="https://codekit.im/icons/thorus_knot.png"
        />
      </motion.div>
      <motion.p className="absolute text-[5rem] font-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {textArray.map((value, index) => {
          return (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              key={index}
            >
              {value}
            </motion.span>
          );
        })}
      </motion.p>
      <motion.button
        initial={{
          opacity: 0,
          translateX: "-50%",
          translateY: "6rem",
          translateZ: 0,
        }}
        whileInView={{
          opacity: 1,
          translateX: "-50%",
          translateY: "6rem",
          translateZ: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.4,
        }}
        animate={controls}
        onMouseEnter={() => controls.start(shakeAnimation)}
        onMouseLeave={() => controls.start({ scale: 1, rotate: 0 })}
        className="bg-purple-700 rounded-2xl flex items-center justify-center py-4 text-white px-8 absolute cursor-pointer text-[2rem] font-bold top-1/2 left-1/2 -translate-x-1/2 translate-y-24"
      >
        시작하기
      </motion.button>
    </div>
  );
};

export default Section4;
const text = "지금 바로 시작해보세요!";
const textArray = Array.from(text);
