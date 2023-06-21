/* eslint-disable @next/next/no-img-element */
import { Comment } from "@/entities/Comment";
import Link from "next/link";
import React from "react";
import { FaComments, FaThumbsUp } from "react-icons/fa";

interface CommentProps {
  comment: Comment;
}

export default function Comment({ comment }: CommentProps) {
  // TODO: list answers for comments that have at least one.
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Link href={`/profile/${comment.user.id}`}>
            <img
              src={comment.user.profilePhoto}
              alt="Foto de perfil do usuario."
            />
          </Link>
        </div>
      </div>
      <div className="chat-header pl-2 items-center">
        <Link href={`/profile/${comment.user.id}`}>
          <span className="font-bold">{comment.user.name}</span>
        </Link>
      </div>
      <div className="chat-bubble bg-gray-300 text-black/90">
        {comment.content}
      </div>
      <div className="chat-footer w-[88%]">
        <div className="mt-2 flex justify-between">
          <div>
            <div className="join gap-4">
              <div className="btn btn-ghost text-gray-600 btn-xs join-item flex gap-2 items-center">
                <FaThumbsUp />
                Gostar
              </div>
              <div className="btn btn-ghost text-gray-600 btn-xs join-item flex gap-2 items-center">
                <FaComments />
                Respostas
              </div>
            </div>
          </div>
          <time className="pl-2 text-xs opacity-50">Há 2 minutos</time>
        </div>
      </div>
    </div>
  );
}
