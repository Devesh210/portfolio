import { useEffect } from "react";

const useTypewriter = (ref, text, speed = 16) => {
  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    el.textContent = "";

    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [ref, text, speed]);
};

export default useTypewriter;
