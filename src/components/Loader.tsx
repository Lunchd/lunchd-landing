"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const MIN_LOADER_MS = 600;

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    const start = performance.now();
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const completeLoading = () => {
      if (hasCompletedRef.current) {
        return;
      }
      hasCompletedRef.current = true;
      setIsVisible(false);
      onComplete();
    };

    const completeWhenReady = () => {
      const elapsed = performance.now() - start;
      const remaining = MIN_LOADER_MS - elapsed;

      if (remaining <= 0) {
        completeLoading();
        return;
      }

      timeoutId = setTimeout(completeLoading, remaining);
    };

    let handleLoad: (() => void) | null = null;

    if (document.readyState === "complete") {
      completeWhenReady();
    } else {
      handleLoad = () => completeWhenReady();
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (handleLoad) {
        window.removeEventListener("load", handleLoad);
      }
    };
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand">
      <div>
        <Logo className="w-[100px] animate-pulse" />
      </div>
    </div>
  );
}
