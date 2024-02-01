"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { modifiedRotateArray } from "@/app/_lib";

const Section3 = () => {
  return (
    <div className="grid grid-cols-2 gap-24 pt-48 pb-48">
      <div className="w-[full] gap-8 gap-y-8 grid grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => {
          const rotateValue = modifiedRotateArray;
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: [0, 1, 1.05, 1],
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              key={index}
              className="h-full shadow-lg rounded-lg flex items-center justify-center cursor-pointer"
              whileHover={{
                rotate: rotateValue,
              }}
            >
              <Image
                width={256}
                height={12}
                src={"https://codekit.im/images/nexon.png"}
                alt="project-logo"
              />
            </motion.div>
          );
        })}
      </div>

      <h4 className="flex flex-col items-end text-[5rem] font-[900]">
        <motion.p
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="relative w-fit z-10"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="absolute left-0 h-1/2 bg-yellow-300 w-full translate-y-14 opacity-60 z-0"
          />
          다양한 경험을
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="relative w-fit"
        >
          바탕으로 아이디어를
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          className="relative w-fit"
        >
          완성합니다.
        </motion.p>
      </h4>
    </div>
  );
};

export default Section3;
