import Button from "../Button/Button";

interface InputWithButtonProps extends React.HTMLAttributes<HTMLInputElement> {
  textButton: string;
}

export default function InputWithButton({
  textButton,
  ...props
}: InputWithButtonProps) {
  return (
    <div className="rounded-3xl bg-gray-300/80">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
        }}
      >
        <input
          {...props}
          className="border-0 outline-0 bg-transparent py-2 px-6 placeholder:text-xs"
        />
        <Button className="w-[150px]">{textButton}</Button>
      </div>
    </div>
  );
}
