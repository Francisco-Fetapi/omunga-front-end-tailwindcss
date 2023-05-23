import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function SocialMediaList() {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-end">
      <ul className="flex flex-col gap-4 items-end social-media-ul">
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
    </div>
  );
}
