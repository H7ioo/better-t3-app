"use cache";

import { MorphingText } from "@/components/morphing-text";

export const Morphing = async () => {
  const texts = ["@iAskShahram", "XeeSol.net"];
  return <MorphingText texts={texts} className="!text-xl" />;
};
