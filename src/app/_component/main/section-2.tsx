"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const rotateArray = [0, 3, -3, 1, -1, 0];

const Section2 = () => {
  return (
    <div className="flex justify-between pt-48 pb-48">
      <h4 className="flex w-3/5 flex-col text-[5rem] font-[900] self-center">
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
            whileInView={{ width: "68%" }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="absolute left-0 h-1/2 bg-yellow-300 w-full translate-y-14 opacity-60 z-0"
          />
          최적의 기술로
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
          당신의 아이디어를
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
          구현합니다
        </motion.p>
      </h4>
      <motion.ul
        initial="hidden"
        animate="visible"
        className="w-2/5 grid grid-cols-4 gap-4 w-1/2 self-end"
      >
        {Array.from({ length: 24 }).map((_, index) => {
          const modifiedArray = rotateArray.map((value) => {
            if (value !== 0) {
              const randomValue = Math.floor(Math.random() * 10) - 2;
              return randomValue;
            }
            return value;
          });

          return (
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: [0, 1, 1.05, 1],
                rotate: modifiedArray, // 회전
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              key={index}
            >
              <div className="w-full h-full relative before:content-[''] before:pb-[100%] before:block">
                <Image
                  src="https://codekit.im/icons/react-js.png"
                  alt="stack"
                  fill
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Section2;
