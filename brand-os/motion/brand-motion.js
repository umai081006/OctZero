export function resolveMotionLevel(context) {
  return context.mood === "bold" ? "high" : "low";
}

export function applyMotionLevel(level) {
  document.documentElement.dataset.motion = level;

  if (level === "high") {
    document.documentElement.style.setProperty("--transition-slow", "0.8s ease-out");
  } else {
    document.documentElement.style.setProperty("--transition-slow", "1.2s ease");
  }
}
