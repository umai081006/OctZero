export function resolveMotionLevel(context) {
  if (!context.prefersMotion) return "none";
  return context.device === "mobile" ? "low" : "high";
}

export function applyMotionLevel(level) {
  document.documentElement.dataset.motion = level;
}
