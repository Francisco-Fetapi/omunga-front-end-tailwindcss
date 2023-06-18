/* eslint-disable @next/next/no-img-element */
import { Question } from "@/entities/Question";
import getShortText from "@/helpers/getShortText";
import React from "react";

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="bg-white shadow-2xl rounded-xl h-[200px] flex items-start px-8 py-6 gap-2">
      <img
        src={question.user.profilePhoto}
        alt="Foto do usuario."
        className="img-bordered w-[70px] h-[70px] rounded-[50%]"
      />
      <div className="grow">
        <h2 className="text-black font-black text-xl mb-2">{question.title}</h2>
        <p className="text-gray-500 text-md">
          {getShortText(question.content, 70)}
        </p>
      </div>
    </div>
  );
}
