"use client";

import { LiquidButton } from "@/components/liquid-button";
import { type Session } from "@/server/auth";
import { signIn, signOut } from "@/server/auth/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const SignButton = ({ session }: { session: Session | null }) => {
  const router = useRouter();

  const onClick = async () => {
    if (session) {
      await signOut();
      router.refresh();
    } else {
      await signIn.social({ provider: "google" });
    }
  };

  if (session?.user.id) {
    return (
      <div className="flex items-center justify-center gap-4">
        <Image
          src={session.user.image ?? ""}
          alt={session.user.name ?? ""}
          width={32}
          height={32}
          className="rounded-full"
        />
        <AuthButton onClick={onClick} text="Sign out" />
      </div>
    );
  }

  return <AuthButton onClick={onClick} text="Sign in" />;
};

const AuthButton = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) => {
  return (
    <LiquidButton
      onClick={onClick}
      className="rounded-2xl px-3 py-0.5 font-semibold"
    >
      {text}
    </LiquidButton>
  );
};
