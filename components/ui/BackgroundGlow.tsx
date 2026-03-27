export function BackgroundGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-1/4 top-0 h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute -right-1/4 top-1/3 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[90px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
    </div>
  );
}
