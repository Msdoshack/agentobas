import { Key } from "lucide-react";

type Props = {
  transitionPhase: "idle" | "closing" | "closed" | "opening";
};

const UpdatedDoorComponent = ({ transitionPhase }: Props) => {
  const isClosed =
    transitionPhase === "closing" || transitionPhase === "closed";

  const isOpening = transitionPhase === "opening";

  return (
    <div className="fixed inset-0 pointer-events-none z-9999 h-screen overflow-hidden">
      {/* LEFT DOOR */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 transition-transform duration-700 ease-in-out ${
          isOpening ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Door base */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-950">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
            }}
          />
        </div>

        {/* Frame */}
        <div className="absolute inset-8 border-8 border-yellow-700 rounded-lg shadow-2xl">
          <div className="absolute inset-2 border-4 border-yellow-600 rounded-lg" />
        </div>

        {/* Panels */}
        <div className="absolute right-16 top-1/4 w-20 sm:w-40 h-32 sm:h-56 border-4 border-yellow-700 rounded-lg bg-linear-to-br from-amber-800 to-amber-900 shadow-inner">
          <div className="absolute inset-2 border-2 border-yellow-600/50 rounded" />
        </div>

        <div className="absolute right-0 inset-y-0 w-1 bg-linear-to-b from-transparent via-yellow-600/50 to-transparent" />
      </div>

      {/* RIGHT DOOR */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 transition-transform duration-700 ease-in-out ${
          isOpening ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="absolute inset-0 bg-linear-to-bl from-slate-900 via-slate-800 to-slate-950">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
            }}
          />
        </div>

        <div className="absolute inset-8 border-8 border-yellow-700 rounded-lg shadow-2xl">
          <div className="absolute inset-2 border-4 border-yellow-600 rounded-lg" />
        </div>

        <div className="absolute left-16 top-1/4 w-20 sm:w-40 h-32 sm:h-56 border-4 border-yellow-700 rounded-lg bg-linear-to-bl from-amber-800 to-amber-900 shadow-inner">
          <div className="absolute inset-2 border-2 border-yellow-600/50 rounded" />
        </div>

        <div className="absolute left-0 inset-y-0 w-1 bg-linear-to-b from-transparent via-yellow-600/50 to-transparent" />
      </div>

      {/* CENTER LOCK */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
          isOpening ? "opacity-0 scale-50" : "opacity-100 scale-100"
        }`}
      >
        <div className="relative">
          {/* SHACKLE */}
          <div
            className={`absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-16 border-8 border-yellow-600 rounded-t-full transition-all duration-500 ${
              transitionPhase === "closing"
                ? "rotate-45 translate-x-8 -translate-y-2"
                : ""
            }`}
          />

          {/* LOCK BODY */}
          <div className="relative w-28 h-24 sm:h-36 bg-linear-to-br from-yellow-500 via-yellow-600 to-yellow-700 rounded-2xl shadow-2xl">
            <div className="absolute top-3 left-3 w-8 h-8 bg-white/30 rounded-full blur-sm" />

            {/* KEYHOLE */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-gray-900 rounded-full shadow-inner" />
              <div className="w-3 h-4 sm:h-8 bg-gray-900 mx-auto -mt-1" />
            </div>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-yellow-950 text-xs font-extrabold">
              IG OBAS
            </div>
          </div>

          {/* KEY */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 transition-all duration-700 origin-left ${
              transitionPhase === "idle"
                ? "translate-y-32 opacity-0"
                : transitionPhase === "closing"
                  ? "translate-y-0 rotate-45 scale-110 opacity-100"
                  : transitionPhase === "opening"
                    ? "opacity-0 scale-50"
                    : "translate-y-0 opacity-100"
            }`}
            // style={{ transformOrigin: "left center" }}
          >
            <Key
              className="h-16 w-16 sm:w-20 sm:h-20 text-amber-300 drop-shadow-2xl"
              strokeWidth={2.5}
            />
          </div>

          {/* SPARKLES */}
          {isOpening && (
            <>
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  ✓
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-3 h-3 bg-yellow-300 rounded-full animate-ping" />
            </>
          )}
        </div>
      </div>

      {/* GLOW */}
      {isOpening && (
        <div className="absolute inset-0 bg-white/20 animate-pulse" />
      )}
    </div>
  );
};

export default UpdatedDoorComponent;
