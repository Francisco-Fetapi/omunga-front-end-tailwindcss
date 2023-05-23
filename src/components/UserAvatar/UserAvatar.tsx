import useAuth from "@/hooks/useAuth";

export default function UserAvatar() {
  const { user } = useAuth();
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={user.profilePhoto}
      alt="Foto de perfil do usuario logado"
      className="w-[45px] h-[45px] rounded-[50%] ml-[-20px] mt-[15px]"
    />
  );
}
