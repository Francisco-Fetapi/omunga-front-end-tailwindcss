export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
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

  /**
   * Define the type (basically the background-color) of button
   */
  variant?: "black" | "white";

  shadow?: boolean;
}

export default function Button({
  children,
  fullWidth,
  iconEnd,
  iconStart,
  variant = "black",
  shadow = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`grid-flow-col gap-1 items-center  button-${variant} ${
        shadow ? "button-shadow" : ""
      } font-medium pl-5 pr-3 py-2 rounded-3xl ${
        fullWidth ? "flex w-full justify-center" : "inline-grid"
      } ${props.className}`}
    >
      {iconStart && <>{iconStart}</>}
      {children}
      {iconEnd && <>{iconEnd}</>}
    </button>
  );
}
