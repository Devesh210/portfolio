import { useEffect, useRef, useState } from "react";

const useScrollReveal = (options = { threshold: 0.15 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]); // ✅ ESLint happy

  return [ref, visible];
};

export default useScrollReveal;
