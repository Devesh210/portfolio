import { useEffect, useRef } from "react";

const useStreamingLogs = (
  ref,
  logs,
  interval = 700,
  maxLines = 8
) => {
  const indexRef = useRef(0);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    el.textContent = "";

    const timer = setInterval(() => {
      const line = logs[indexRef.current];
      if (!line) {
        indexRef.current = 0; // loop
        el.textContent = "";
        return;
      }

      el.textContent += line + "\n";
      el.scrollTop = el.scrollHeight;

      const lines = el.textContent.split("\n");
      if (lines.length > maxLines) {
        el.textContent = lines.slice(-maxLines).join("\n");
      }

      indexRef.current++;
    }, interval);

    return () => clearInterval(timer);
  }, [ref, logs, interval, maxLines]);
};

export default useStreamingLogs;
