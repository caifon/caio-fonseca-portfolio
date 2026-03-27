import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "ghost";

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  href?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400/80";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-500/90 via-violet-500/90 to-blue-600/90 text-white shadow-[0_0_28px_rgba(34,211,238,0.28)] hover:scale-[1.03] hover:shadow-[0_0_52px_rgba(56,189,248,0.45),0_0_28px_rgba(139,92,246,0.25)] active:scale-[0.98]",
  ghost:
    "border border-white/15 bg-white/5 text-zinc-100 backdrop-blur-md hover:scale-[1.03] hover:border-cyan-400/45 hover:bg-cyan-500/10 hover:text-white hover:shadow-[0_0_32px_rgba(34,211,238,0.22)] active:scale-[0.98]",
};

export function Button({
  variant = "primary",
  className = "",
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
