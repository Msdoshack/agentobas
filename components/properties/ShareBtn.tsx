"use client";

import { Copy, Check, Share } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

type PropsType = {
  name: string;
};

const ShareBtn = ({ name }: PropsType) => {
  const [showLink, setShowLink] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Pre-encode text and URLs for safe sharing
  const shareText = encodeURIComponent(`Check out ${name}: ${currentUrl}`);
  const encodedUrl = encodeURIComponent(currentUrl);

  return (
    <div className="p-2 flex flex-col items-center gap-4">
      {!showLink && (
        <button
          onClick={() => setShowLink(true)}
          className="hover:text-blue-500 transition-colors"
          aria-label="Open share menu"
        >
          <Share size={20} />
        </button>
      )}

      {showLink && (
        <div className="flex items-center gap-5 border p-3 rounded-lg shadow-sm bg-white dark:bg-zinc-900 animate-in fade-in zoom-in-95 duration-150">
          <button
            onClick={handleCopy}
            className="flex flex-col items-center text-xs gap-1 hover:text-blue-500 transition-colors"
          >
            {copied ? (
              <Check size={20} className="text-green-500" />
            ) : (
              <Copy size={20} />
            )}
            {copied ? "copied!" : "copy"}
          </button>

          {/* WhatsApp Share */}
          <a
            href={`https://wa.me/?text=${shareText}`}
            className="flex flex-col items-center text-[10px] gap-1 hover:opacity-80 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/whatsapp.png"
              alt="Share on WhatsApp"
              width={28}
              height={28}
            />
            WhatsApp
          </a>

          {/* Facebook Share */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-[10px] gap-1 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/facebook.png"
              alt="Share on Facebook"
              width={25}
              height={25}
            />
            Facebook
          </a>

          {/* Close Menu Button */}
          <button
            onClick={() => setShowLink(false)}
            className="text-xs text-gray-400 hover:text-gray-600 pl-2 border-l"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareBtn;
