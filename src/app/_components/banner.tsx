"use cache";

import Link from "next/link";

export const Banner = async () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
        <Link
          href={"https://create.t3.gg/en/introduction"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-[hsl(262,55%,46%)]">T3</span> App
        </Link>
      </h1>
      <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-300">
        Powered with{" "}
        <Link
          href="https://www.better-auth.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[hsl(262,55%,46%)]"
        >
          BetterAuth
        </Link>{" "}
        and{" "}
        <Link
          href="https://prisma.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[hsl(262,55%,46%)]"
        >
          Prisma
        </Link>
      </p>
    </div>
  );
};
