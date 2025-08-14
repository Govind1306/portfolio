import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectStack({ projects = [] }) {
  const initialOrder = useMemo(() => projects.map((_, i) => i), [projects]);
  const [order, setOrder] = useState(initialOrder);
  const [draggingId, setDraggingId] = useState(null);
  const [promoteNext, setPromoteNext] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);
  const timerRef = useRef(null);

  // Dynamic container height to avoid large empty space when few cards
  const baseHeight = useMemo(() => {
    const min = 360;
    const max = 520;
    const extra = Math.max(0, projects.length - 1) * 36; // small add per depth
    return Math.max(min, Math.min(max, min + extra));
  }, [projects.length]);

  const commitRotate = () => {
    setOrder((prev) => {
      if (prev.length <= 1) return prev;
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <div className="relative w-full" style={{ height: baseHeight }}>
      {order.map((projectIndex, positionIndex) => {
        if (!projects[projectIndex]) return null;
        const project = projects[projectIndex];
        const idx = positionIndex; // 0 is front

        // Compute visual depth considering transition state
        let depth = idx;
        if (draggingId !== null && promoteNext) {
          const topId = order[0];
          const nextId = order[1];
          if (projectIndex === nextId) depth = 0; // promote next card visually
          else if (projectIndex === topId) depth = animatingOut ? order.length - 1 : 0; // dragged card floats or animates to back
          else if (idx >= 2) depth = idx - 1; // shift others up one position
        }

        const y = depth * 22;
        const scale = 1 - depth * 0.045;
        const rotate = depth * -1.5;
        const z = projects.length - depth + (projectIndex === draggingId ? 20 : 0);

        const isTop = depth === 0;

        return (
          <motion.div
            key={project.name}
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: z }}
            transition={{ type: "spring", stiffness: 500, damping: 40 }}
          >
            <motion.div
              drag={isTop || draggingId === projectIndex}
              dragElastic={0.12}
              dragMomentum={false}
              onDragStart={() => {
                if (isTop) {
                  setDraggingId(projectIndex);
                  setPromoteNext(true);
                }
              }}
              onDragEnd={() => {
                if (draggingId !== null) {
                  setAnimatingOut(true);
                  // Let the top card animate to back depth, then rotate the order
                  if (timerRef.current) clearTimeout(timerRef.current);
                  timerRef.current = setTimeout(() => {
                    commitRotate();
                    setDraggingId(null);
                    setPromoteNext(false);
                    setAnimatingOut(false);
                  }, 450);
                }
              }}
              whileDrag={{ scale: 1.03 }}
              className="relative rounded-2xl p-[1px] bg-gradient-to-br from-fuchsia-500/70 via-violet-500/60 to-cyan-400/70 shadow-xl w-full"
              animate={{ x: 0, y, scale, rotate }}
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
            >
              <div className="rounded-2xl bg-white/75 dark:bg-[#0B1120]/60 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6 md:p-8 select-none">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-900 dark:bg-blue-500/20 dark:text-blue-200 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 font-semibold text-blue-700 dark:text-blue-300 hover:underline"
                >
                  View Project <span aria-hidden>→</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}


