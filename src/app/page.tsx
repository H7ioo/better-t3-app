import { HexagonBackground } from "@/components/hexagon-background";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { Banner } from "./_components/banner";
import { CloneTerminal } from "./_components/clone-terminal";
import { Morphing } from "./_components/morphing";
import { QuickLinks } from "./_components/quick-links";
import { SignButton } from "./_components/sign-button/index";

export const experimental_ppr = true;

export default function Home() {
  return (
    <HydrateClient>
      <HexagonBackground
        className="flex size-full min-h-screen items-center justify-center"
        hexagonSize={65}
        hexagonMargin={2}
      >
        <main className="flex size-full flex-col items-center justify-center">
          <div className="z-10 container flex max-w-2xl flex-col items-center justify-center gap-4 p-4">
            <Banner />
            <Suspense fallback={<div className="h-10" />}>
              <SignButton />
            </Suspense>
            <div className="xs:mt-8"></div>
            <CloneTerminal />
            <div className="xs:mt-8"></div>
            <QuickLinks />
            <Morphing />
          </div>
        </main>
      </HexagonBackground>
    </HydrateClient>
  );
}
