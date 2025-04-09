"use client";

import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/terminal";
import { useState } from "react";

export const CloneTerminal = () => {
  const [branch, setBranch] = useState<"main" | "drizzle">("main");

  const cloneCommand = branch === "main"
    ? "git clone https://github.com/iAskShahram/better-t3-app.git"
    : "git clone -b drizzle --single-branch https://github.com/iAskShahram/better-t3-app.git";

  return (
    <Terminal
      title={`Clone Template${branch === "drizzle" ? " (drizzle branch)" : ""}`}
      copyText={cloneCommand}
      className="w-full max-w-2xl"
      toggleOptions={{
        options: [
          { label: "Prisma (main)", value: "main" },
          { label: "Drizzle", value: "drizzle" }
        ],
        value: branch,
        onChange: (value) => setBranch(value as "main" | "drizzle")
      }}
    >
      <TypingAnimation duration={25}>
        {`> ${cloneCommand}`}
      </TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        Cloning into &apos;better-t3-app&apos;...
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-muted-foreground">
        remote: Enumerating objects: 437, done.
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-muted-foreground">
        remote: Counting objects: 100% (437/437), done.
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-muted-foreground">
        remote: Compressing objects: 100% (214/214), done.
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-muted-foreground">
        Receiving objects: 100% (437/437), 1.20 MiB | 5.8 MiB/s, done.
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="text-muted-foreground">
        Resolving deltas: 100% (231/231), done.
      </AnimatedSpan>

      <AnimatedSpan delay={6000} className="text-green-500">
        ✔ Successfully cloned iAskShahram/better-t3-app{branch === "drizzle" ? " (drizzle branch)" : ""}
      </AnimatedSpan>
    </Terminal>
  );
};
