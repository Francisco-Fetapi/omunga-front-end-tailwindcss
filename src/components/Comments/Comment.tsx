/* eslint-disable @next/next/no-img-element */
import { Comment } from "@/entities/Comment";
import Link from "next/link";
import React from "react";

interface CommentProps {
  comment: Comment;
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className="chat chat-start my-8">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={comment.user.profilePhoto}
            alt="Foto de perfil do usuario."
          />
        </div>
      </div>
      <div className="chat-header pl-2 items-center">
        <Link href={`/profile/${comment.user.id}`}>
          <span className="font-bold">{comment.user.name}</span>
        </Link>
        <time className="pl-2 text-xs opacity-50">12:45</time>
      </div>
      <div className="chat-bubble bg-gray-300 text-black/90">
        {comment.content}
      </div>
      <div className="chat-footer"></div>
    </div>
  );
}
