"use client";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  return (
    <main className="h-[300vh] mt-24 px-36">
      <div className="flex flex-col pt-48">
        <h4 className="flex flex-col text-[5rem] font-[900]">
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
            홈 페이지부터
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
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "68%" }}
              transition={{
                duration: 0.6,
                delay: 1,
              }}
              className="absolute left-0 h-1/2 bg-yellow-300 w-full translate-y-14 opacity-60 z-0"
            />
            웹 크롤러까지
          </motion.p>
        </h4>
        <h4 className="self-end flex flex-col text-right text-[5rem] font-[900]">
          <motion.p
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="relative w-fit self-end"
          >
            아이디어
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="relative w-fit"
          >
            이제 기다리지 마세요!
          </motion.p>
        </h4>
      </div>
    </main>
  );
};

export default Main;
