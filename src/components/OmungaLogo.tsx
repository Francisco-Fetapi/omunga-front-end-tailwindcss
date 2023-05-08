type ISize = "small" | "medium" | "large";
interface OmungaLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ISize;
}

export default function OmungaLogo({
  className,
  size = "large",
}: OmungaLogoProps) {
  const sizes: Record<ISize, string> = {
    large: "40px",
    medium: "25px",
    small: "20px",
  };

  return (
    <div
      className={`font-mono text-[${sizes[size]}] first-letter:text-purple ${className}`}
      style={{
        fontSize: sizes[size],
      }}
    >
      Omunga
    </div>
  );
}
