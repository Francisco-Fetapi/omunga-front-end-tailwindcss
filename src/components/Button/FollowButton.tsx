import Button from "./Button";

interface FollowButtonProps {
  followed: boolean;
}

export default function FollowButton({ followed }: FollowButtonProps) {
  return (
    <Button
      variant="white"
      shadow
      className={`${
        followed ? "!text-purple" : "!text-gray-500"
      } text-xs !font-bold`}
    >
      {followed ? "Seguindo" : "Seguir"} &nbsp;
    </Button>
  );
}
