import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function SocialMediaList() {
  return (
    <ul className="flex flex-col gap-4 items-end relative top-[-10%] social-media-ul">
      <li>
        <FaFacebook />
      </li>
      <li>
        <FaTwitter />
      </li>
      <li>
        <FaWhatsapp />
      </li>
    </ul>
  );
}
