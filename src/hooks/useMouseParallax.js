import { useEffect } from "react";

const useMouseParallax = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".api-card");

    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      cards.forEach((card, i) => {
        const depth = (i + 1) * 0.6;
        card.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
};

export default useMouseParallax;
