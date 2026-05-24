"use client";
import { Suspense, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";

// 1. Move the hook and scroll logic into an inner component
const ScrollToTopTrigger = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const params = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, params]);

  return null;
};

// 2. Wrap the inner component inside a Suspense boundary when exporting
const ScrollToTop = () => {
  return (
    <Suspense fallback={null}>
      <ScrollToTopTrigger />
    </Suspense>
  );
};

export default ScrollToTop;
