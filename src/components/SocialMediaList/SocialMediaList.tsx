import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const socialMedia = {
  facebook: "#",
  twitter: "#",
  whatsapp: "#",
};

export default function SocialMediaList() {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-end">
      <ul className="text-black flex flex-col gap-4 items-end social-media-ul">
        <li>
          <a href={socialMedia.facebook} target="__blank">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href={socialMedia.twitter} target="__blank">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href={socialMedia.whatsapp} target="__blank">
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
}
