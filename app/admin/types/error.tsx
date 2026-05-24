"use client";

import ErrorComponent from "@/components/ErrorComponent";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <ErrorComponent reset={reset} error={error} name="listing-type" />;
}
