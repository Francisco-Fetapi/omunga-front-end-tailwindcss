import { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export default function Input({ icon, ...props }: InputProps) {
  return (
    <div className="flex h-[40px] w-full pr-3 rounded-2xl border-[1px] border-black/80 bg-white">
      {icon && (
        <div className="rounded-l-2xl grow-0 shrink-0 w-[40px] flex items-center justify-center bg-purple text-white">
          {icon}
        </div>
      )}
      <input {...props} className="border-0 pl-2 w-full outline-0 block" />
    </div>
  );
}
