import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import ms from 'ms'

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never'
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? '' : ' ago'
  }`
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const apiRoute = process.env.API_URL || ""
export const apiKey = process.env.API_KEY || ""
export const apiHost = process.env.API_HOST || ""
export const fetchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": apiHost
  },
}