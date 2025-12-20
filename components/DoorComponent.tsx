import { Key } from "lucide-react";

const DoorComponent = ({ transitionPhase }: { transitionPhase: string }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-9999 h-screen overflow-hidden">
      {/* Left Door */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 transition-transform duration-700 ease-in-out ${
          transitionPhase === "door-open" || transitionPhase === "enter"
            ? "-translate-x-full"
            : "translate-x-0"
        }`}
      >
        {/* Door Base with wood grain effect */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-950">
          {/* Wood grain texture overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-linear(90deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
            }}
          ></div>
        </div>

        {/* Ornate border frame */}
        <div className="absolute inset-8 border-8 border-yellow-700 rounded-lg shadow-2xl">
          <div className="absolute inset-2 border-4 border-yellow-600 rounded-lg"></div>
        </div>

        {/* Decorative panels */}
        <div className="absolute right-16 top-1/4 w-20 sm:w-40 h-32 sm:h-56 border-4 border-yellow-700 rounded-lg bg-linear-to-br from-amber-800 to-amber-900 shadow-inner">
          <div className="absolute inset-2 border-2 border-yellow-600/50 rounded"></div>
          {/* Diamond pattern */}
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-yellow-600/30 rotate-45"></div>
          </div>
        </div>

        <div className="absolute right-16 bottom-1/6 w-20 sm:w-40 h-32 sm:h-40 border-4 border-yellow-700 rounded-lg bg-linear-to-br from-amber-800 to-amber-900 shadow-inner">
          <div className="absolute inset-2 border-2 border-yellow-600/50 rounded"></div>
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-yellow-600/30 rotate-45"></div>
          </div>
        </div>

        {/* Brass hardware accents */}
        <div className="absolute right-12 top-12 w-6 h-6 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg"></div>
        <div className="absolute right-12 bottom-12 w-6 h-6 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg"></div>

        {/* Edge highlight */}
        <div className="absolute right-0 inset-y-0 w-1 bg-linear-to-b from-transparent via-yellow-600/50 to-transparent"></div>
      </div>

      {/* Right Door */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 transition-transform duration-700 ease-in-out ${
          transitionPhase === "door-open" || transitionPhase === "enter"
            ? "translate-x-full"
            : "translate-x-0"
        }`}
      >
        {/* Door Base with wood grain effect */}
        <div className="absolute inset-0 bg-linear-to-bl from-slate-900 via-slate-800 to-slate-950">
          {/* Wood grain texture overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-linear(90deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
            }}
          ></div>
        </div>

        {/* Ornate border frame */}
        <div className="absolute inset-8 border-8 border-yellow-700 rounded-lg shadow-2xl">
          <div className="absolute inset-2 border-4 border-yellow-600 rounded-lg"></div>
        </div>

        {/* Decorative panels */}
        <div className="absolute left-16 top-1/4 w-20 sm:w-40 h-32 sm:h-56 border-4 border-yellow-700 rounded-lg bg-linear-to-bl from-amber-800 to-amber-900 shadow-inner">
          <div className="absolute inset-2 border-2 border-yellow-600/50 rounded"></div>
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-yellow-600/30 rotate-45"></div>
          </div>
        </div>

        <div className="absolute left-16 bottom-1/6 w-20 sm:w-40 h-32 sm:h-40 border-4 border-yellow-700 rounded-lg bg-linear-to-bl from-amber-800 to-amber-900 shadow-inner">
          <div className="absolute inset-2 border-2 border-yellow-600/50 rounded"></div>
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-yellow-600/30 rotate-45"></div>
          </div>
        </div>

        {/* Brass hardware accents */}
        <div className="absolute left-12 top-12 w-6 h-6 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg"></div>
        <div className="absolute left-12 bottom-12 w-6 h-6 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg"></div>

        {/* Edge highlight */}
        <div className="absolute left-0 inset-y-0 w-1 bg-linear-to-b from-transparent via-yellow-600/50 to-transparent"></div>
      </div>

      {/* Center Padlock - Fixed to doors */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
          transitionPhase === "door-open" || transitionPhase === "enter"
            ? "opacity-0 scale-50"
            : "opacity-100 scale-100"
        }`}
      >
        {/* Padlock Body */}
        <div className="relative">
          {/* Shackle (top curved part) */}
          <div
            className={`absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-16 border-8 border-yellow-600 rounded-t-full transition-all duration-500 ${
              transitionPhase === "key-turn"
                ? "rotate-45 translate-x-8 -translate-y-2"
                : ""
            }`}
          ></div>

          {/* Lock Body */}
          <div className="relative w-28 h-24 sm:h-36  bg-linear-to-br from-yellow-500 via-yellow-600 to-yellow-700 rounded-2xl shadow-2xl">
            {/* Metallic shine */}
            <div className="absolute top-3 left-3 w-8 h-8 bg-white/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 bg-black/20 rounded-full blur-sm"></div>

            {/* Keyhole */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-gray-900 rounded-full shadow-inner"></div>
              <div className="w-3 h-4 sm:h-8 bg-gray-900 mx-auto -mt-1"></div>
            </div>

            {/* Brand text on lock */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-yellow-950 text-xs font-extrabold">
              IG OBAS
            </div>
          </div>

          {/* Key inserting and turning */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 origin-left ${
              transitionPhase === "exit"
                ? "translate-y-32 opacity-0"
                : transitionPhase === "key-turn"
                ? "rotate-45 scale-110"
                : transitionPhase === "door-open"
                ? "opacity-0 scale-50"
                : "translate-y-32 opacity-100"
            }`}
            style={{ transformOrigin: "left center" }}
          >
            <Key
              className="h-16 w-16 sm:w-20 sm:h-20 text-amber-300 drop-shadow-2xl"
              strokeWidth={2.5}
              style={{
                filter: "drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))",
              }}
            />
          </div>

          {/* Unlocked sparkle effect */}
          {transitionPhase === "door-open" && (
            <>
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              {/* Sparkles */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
              <div
                className="absolute -top-6 -right-4 w-2 h-2 bg-yellow-300 rounded-full animate-ping"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-8 w-3 h-3 bg-yellow-300 rounded-full animate-ping"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      {transitionPhase === "door-open" && (
        <div className="absolute inset-0 bg-white animate-pulse opacity-20"></div>
      )}
    </div>
  );
};

export default DoorComponent;
