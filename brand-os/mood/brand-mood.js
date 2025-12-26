export function resolveMood(context) {
  if (context.time < 9) return "calm";
  if (context.time > 18) return "bold";
  return "calm";
}

export function applyMood(mood) {
  document.documentElement.dataset.mood = mood;
}
