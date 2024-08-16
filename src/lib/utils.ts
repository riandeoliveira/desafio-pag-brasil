import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

export const encryptPassword = (password: string): string => {
  const multiplier = 57;

  const convertedPassword = password
    .split("")
    .map((word) => word.charCodeAt(0) * multiplier)
    .join("|")
    .concat("|");

  const encryptedPassword: string = btoa(convertedPassword);

  return encryptedPassword;
};

export const decryptPassword = (encryptedPassword: string): string => {
  const multiplier = 57;

  const decodedString = atob(encryptedPassword);

  const charCodes = decodedString.slice(0, -1).split("|");

  const password = charCodes
    .map((code) => String.fromCharCode(Number(code) / multiplier))
    .join("");

  return password;
};
