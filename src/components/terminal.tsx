"use client";

import { cn } from "@/lib/utils";
import { motion, type MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { ShinyButton } from "./shiny-button";

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={cn("grid text-sm font-normal tracking-tight", className)}
    {...props}
  >
    {children}
  </motion.div>
);

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:");
  }

  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  copyText?: string;
}

export const Terminal = ({
  children,
  className,
  title,
  copyText,
}: TerminalProps) => {
  return (
    <div
      className={cn(
        "border-border bg-background z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border",
        className,
      )}
    >
      <div className="border-border flex flex-col gap-y-2 border-b px-4 py-2">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-x-2">
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>
          {title && <h3 className="text-sm">{title}</h3>}
          {copyText && <CopyButton command={copyText} />}
        </div>
      </div>
      <pre className="p-4">
        <code className="grid gap-y-1 overflow-auto">{children}</code>
      </pre>
    </div>
  );
};

const CopyButton = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (navigator?.clipboard?.writeText) {
      void navigator.clipboard.writeText(command);
      setCopied(true);
    } else {
      // Fallback for older browsers or when Clipboard API is not available
      try {
        const textArea = document.createElement("textarea");
        textArea.value = command;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        setCopied(true);
      } catch (err) {}
    }
    setTimeout(() => setCopied(false), 700);
  };

  return (
    <ShinyButton
      className="hover:bg-muted relative rounded-md px-4 py-2 hover:cursor-pointer"
      onClick={copyToClipboard}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
    >
      <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
      <Copy
        className={`size-4 transition-all duration-300 ${
          copied ? "scale-0" : "scale-100"
        }`}
      />
      <Check
        className={`absolute inset-0 m-auto size-4 transition-all duration-300 ${
          copied ? "scale-100" : "scale-0"
        }`}
      />
    </ShinyButton>
  );
};
