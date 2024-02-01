import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const rotateArray = [0, 3, -3, 1, -1, 0];
export const modifiedRotateArray = rotateArray.map((value) => {
  if (value !== 0) {
    const randomValue = Math.floor(Math.random() * 10) - 2;
    return randomValue;
  }
  return value;
});
