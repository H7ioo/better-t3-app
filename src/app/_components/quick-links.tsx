"use cache";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const QuickLinks = async () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="https://github.com/iAskShahram/better-t3-app"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-1 rounded-full bg-neutral-100 p-3.5 transition-all duration-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
      >
        <Github
          size={20}
          className="text-neutral-700 group-hover:text-[hsl(262,55%,46%)] dark:text-neutral-300"
        />
      </Link>
      <Link
        href="https://linkedin.com/in/iAskShahram"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-1 rounded-full bg-neutral-100 p-3.5 transition-all duration-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
      >
        <Linkedin
          size={20}
          className="text-neutral-700 group-hover:text-[hsl(262,55%,46%)] dark:text-neutral-300"
        />
      </Link>
      <Link
        href="https://x.com/iAskShahram"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-1 rounded-full bg-neutral-100 p-3.5 transition-all duration-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
      >
        <Twitter
          size={20}
          className="text-neutral-700 group-hover:text-[hsl(262,55%,46%)] dark:text-neutral-300"
        />
      </Link>
    </div>
  );
};
