"use cache";

import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/terminal";

export const CloneTerminal = async () => {
  return (
    <Terminal
      title="Clone Template"
      copyText="git clone https://github.com/iAskShahram/better-t3-app.git"
      className="w-full max-w-2xl"
    >
      <TypingAnimation duration={25}>
        &gt; git clone https://github.com/iAskShahram/better-t3-app.git
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
        ✔ Successfully cloned iAskShahram/better-t3-app
      </AnimatedSpan>
    </Terminal>
  );
};
