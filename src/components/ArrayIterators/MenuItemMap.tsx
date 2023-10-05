import MenuItem from "@mui/material/MenuItem";
import { ReactNode } from "react";

export default function MenuItemMap(
  option:
    | {
        label: string;
        img: ReactNode;
        disabled?: boolean;
      }
    | string,
  index: number
) {
  if (typeof option === "string") {
    return (
      <MenuItem key={index} value={option}>
        {option}
      </MenuItem>
    );
  }
  return (
    <MenuItem disabled={option?.disabled} key={index} value={option.label}>
      {option.img} {option.label}
    </MenuItem>
  );
}
