import { User } from "@/entities/User";
import { usersMock } from "@/mocks/UserMock";
import { useRouter } from "next/router";

interface AuthProps {
  logged?: boolean;
  user: User;
}

export default function useAuth(): AuthProps {
  // only for mock porposes for a while.
  const router = useRouter();
  const logged = !["/iniciar-sessao", "/criar-conta"].includes(router.pathname);

  return {
    logged,
    user: usersMock[0],
  };
}
