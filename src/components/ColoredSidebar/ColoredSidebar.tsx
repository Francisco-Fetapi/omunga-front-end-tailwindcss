import React from "react";
import { sizeOfSideBarBackground } from "../Header/Header";

interface ColoredSidebarProps {
  isShort?: boolean;
}

export default function ColoredSidebar({
  isShort = true,
}: ColoredSidebarProps) {
  return (
    <div
      className={`${sizeOfSideBarBackground} w-[30%] max-w-[350px] bg-purple absolute top-0 bottom-0 right-0 hidden lg:block ${
        isShort ? "h-header" : ""
      }`}
    ></div>
  );
}
