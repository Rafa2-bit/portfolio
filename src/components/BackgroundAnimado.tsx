import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundAnimado() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const spotlightX = useTransform(mouseX, (value) => `${value}px`);
  const spotlightY = useTransform(mouseY, (value) => `${value}px`);

  return (
    <div className=" inset-0 -z-40 overflow-hidden">
   
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,100,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,100,0.45)_1px,transparent_1px)] bg-size-[100px_100px]"
        animate={{
          backgroundPosition: ["1000px 1000px", "0px 0px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

    
      <motion.div
        className=" inset-0 pointer-events-none"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) =>
              `radial-gradient(circle 100px at ${x} ${y}, rgba(25,0,255,0.15), transparent 20%)`
          ),
        }}
      />
    </div>
  );
}
