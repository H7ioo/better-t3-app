"use client";

import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/terminal";
import { useState } from "react";

export const orms = ["prisma", "drizzle"] as const;

export const CloneTerminal = () => {
  const [orm, setOrm] = useState<(typeof orms)[number]>("prisma");

  const cloneCommand =
    orm === "prisma"
      ? "git clone https://github.com/iAskShahram/better-t3-app.git"
      : "git clone -b drizzle --single-branch https://github.com/iAskShahram/better-t3-app.git";

  return (
    <Terminal
      title="Clone Template"
      copyText={cloneCommand}
      className="h-[275px] w-full max-w-2xl"
      toggleOptions={{
        options: [
          { label: "Prisma (main)", value: "prisma" },
          { label: "Drizzle", value: "drizzle" },
        ],
        value: orm,
        onChange: (value: (typeof orms)[number]) => setOrm(value),
      }}
    >
      <TypingAnimation key={`typing-${orm}`} duration={13}>
        {`> ${cloneCommand}`}
      </TypingAnimation>

      <AnimatedSpan
        key={`clone-${orm}`}
        delay={1000}
        className="text-green-500"
      >
        Cloning into &apos;better-t3-app&apos;...
      </AnimatedSpan>

      <AnimatedSpan
        key={`enum-${orm}`}
        delay={1400}
        className="text-muted-foreground"
      >
        remote: Enumerating objects: 437, done.
      </AnimatedSpan>

      <AnimatedSpan
        key={`count-${orm}`}
        delay={1800}
        className="text-muted-foreground"
      >
        remote: Counting objects: 100% (437/437), done.
      </AnimatedSpan>

      <AnimatedSpan
        key={`compress-${orm}`}
        delay={2200}
        className="text-muted-foreground"
      >
        remote: Compressing objects: 100% (214/214), done.
      </AnimatedSpan>

      <AnimatedSpan
        key={`receive-${orm}`}
        delay={3000}
        className="text-muted-foreground"
      >
        Receiving objects: 100% (437/437), 1.20 MiB | 5.8 MiB/s, done.
      </AnimatedSpan>

      <AnimatedSpan
        key={`resolve-${orm}`}
        delay={3400}
        className="text-muted-foreground"
      >
        Resolving deltas: 100% (231/231), done.
      </AnimatedSpan>

      <AnimatedSpan
        key={`success-${orm}`}
        delay={3800}
        className="text-green-500"
      >
        ✔ Successfully cloned iAskShahram/better-t3-app
        {orm === "drizzle" ? " (drizzle branch)" : ""}
      </AnimatedSpan>
    </Terminal>
  );
};
