export const AgentDivider = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 my-16 flex items-center gap-4">
      {/* Left Line */}
      <div className="h-px flex-1 bg-linear-to-r from-transparent to-zinc-300 dark:to-zinc-700" />

      {/* Brand Text Block */}
      <div className="flex items-center gap-1.5 font-mono text-xs tracking-wider text-zinc-500 uppercase select-none">
        <span>Agent Obas</span>
        {/* Blinking Cursor utilizing Tailwind v4 custom animation */}
        <span className="w-1.5 h-4 bg-blue-500 animate-blink" />
      </div>

      {/* Right Line */}
      <div className="h-px flex-1 bg-linear-to-l from-transparent to-zinc-300 dark:to-zinc-700" />
    </div>
  );
};
