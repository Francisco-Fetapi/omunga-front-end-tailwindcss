interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Button label
   */
  children: React.ReactNode;
  /**
   * If true the button width it's going cover its container.
   */
  fullWidth?: boolean;
  /**
   * Define a icon to be showed at the right of button.
   */
  iconEnd?: React.ReactNode;
  /**
   * Define a icon to be showed at the left of button.
   */
  iconStart?: React.ReactNode;
}

export default function Button({
  children,
  fullWidth,
  iconEnd,
  iconStart,
  ...props
}: ButtonProps) {
  return (
    <button
      className={` grid-flow-col gap-1 items-center  text-white font-medium pl-5 pr-3 py-2 bg-black rounded-3xl ${
        fullWidth ? "flex w-full justify-center" : "inline-grid"
      } ${props.className}`}
    >
      {iconStart && <>{iconStart}</>}
      {children}
      {iconEnd && <>{iconEnd}</>}
    </button>
  );
}
