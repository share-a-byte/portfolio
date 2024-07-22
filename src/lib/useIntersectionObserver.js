import { useState, useEffect } from "react";

export function useIntersectionObserver(options) {
  const [ref, setRef] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.unobserve(ref);
          }
        },
        { threshold: 0.1, ...options }
      );
      observer.observe(ref);
      return () => observer.disconnect();
    }
  }, [ref, options]);

  return [setRef, isIntersecting];
}
