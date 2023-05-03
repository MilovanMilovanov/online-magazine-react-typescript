import { SelectOptions } from "./interfaces";

export const options: SelectOptions = [
  { value: "", text: "Sort" },
  { value: "az", text: "Name A-Z" },
  { value: "za", text: "Name Z-A" },
  { value: "lh", text: "Price from Low to High" },
  { value: "hl", text: "Price from High tocLow" },
];
