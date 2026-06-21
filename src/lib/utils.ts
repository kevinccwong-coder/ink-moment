import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names with Tailwind conflict resolution.
 * Install `clsx` and `tailwind-merge` to use:
 *   npm install clsx tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  const { twMerge } = require("tailwind-merge");
  return twMerge(clsx(inputs));
}
