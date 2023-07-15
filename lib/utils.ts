import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ms from "ms";

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? "" : " ago"
  }`;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const apiRoute = process.env.API_URL || "";
export const apiKey = process.env.API_KEY || "";
export const apiHost = process.env.API_HOST || "";
export const fetchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": apiHost,
  },
};

export const categories = [
  "Animals, Bugs & Pets",
  "Art, Creativity & Music",
  "General Literature",
  "Hobbies, Sports & Outdoors",
  "Science Fiction & Fantasy",
  "Real Life",
  "Science & Technology",
  "Mystery & Suspense",
  "Reference",
];

export const removeEmptyQueryParams = (query: any) => {
  const q = { ...query };
  Object.keys(q).forEach((key) => {
    if (!q[key]) delete q[key];
  });
  return q;
};
