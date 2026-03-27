type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30 hover:text-white">
      {label}
    </span>
  );
}
