import React from "react";
import { sizeOfSideBarBackground } from "../Header/Header";
import IconPng from "@/assets/image-removebg-preview.png";
import Image from "next/image";
import SocialMediaList from "../SocialMediaList/SocialMediaList";
import UserAvatar from "../UserAvatar/UserAvatar";
import useAuth from "@/hooks/useAuth";

interface ColoredSidebarProps {
  isShort?: boolean;
  showIcon?: boolean;
  showSocialMedia?: boolean;
  isSimple?: boolean;
}

const pagesWithSimpleSideBar = ["/artigos"];

export default function ColoredSidebar({
  isShort = true,
  showIcon = false,
  showSocialMedia = false,
  isSimple = false,
}: ColoredSidebarProps) {
  const { logged } = useAuth();

  return (
    <div
      className={`${sizeOfSideBarBackground} w-[30%] max-w-[350px] bg-purple absolute top-0 bottom-0 right-0 hidden lg:block ${
        isShort ? "h-header" : ""
      } flex justify-center items-center
      ${isSimple ? "h-simple-header" : ""}
      `}
    >
      {logged && <UserAvatar />}
      {showIcon && !isSimple && (
        <div className="-rotate-12 relative top-[15%] left-[-140px]">
          <Image src={IconPng} width={390} height={290} alt="Header Icon" />
        </div>
      )}

      {!isShort && <SocialMediaList />}
    </div>
  );
}
