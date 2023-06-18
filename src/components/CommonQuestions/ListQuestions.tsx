import { mockQuestions } from "@/mocks/QuestionsMock";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Button from "../Button/Button";
import QuestionCard from "./QuestionCard";
import QuestionsPagination from "./QuestionsPagination";

export default function ListQuestions() {
  return (
    <div className="gap-lr ">
      <div className="flex justify-end">
        <Button variant="white" shadow iconEnd={<FaChevronDown />}>
          Filtrar por &nbsp;
        </Button>
      </div>

      <div className="mt-6">
        <div className="grid gap-8">
          {mockQuestions.map((question) => (
            <QuestionCard question={question} key={question.id} />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <QuestionsPagination />
      </div>
    </div>
  );
}
