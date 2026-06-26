import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LINES = [
  "Initializing Portfolio...",
  "Loading Projects...",
  "Loading Experience...",
  "Loading Creativity...",
  "Welcome.",
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const stepMs = 1800 / LINES.length;
    const timers: ReturnType<typeof setTimeout>[] = [];
    LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setIdx(i), i * stepMs));
    });
    timers.push(
      setTimeout(() => {
        setShow(false);
        setTimeout(onDone, 500);
      }, 1800)
    );
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-8 px-6">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-[2px] w-[280px] origin-left bg-gradient-to-r from-transparent via-accent to-transparent"
              style={{ boxShadow: "0 0 24px rgba(56,189,248,0.8)" }}
            />
            <div className="h-7 text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={idx}
                  initial={{ y: 12, opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -12, opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.4 }}
                  className="font-display text-base sm:text-lg tracking-wide text-muted-foreground"
                >
                  {LINES[idx]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
