export function resolveMood(context) {
  return context.mood;
}

export function applyMood(mood) {
  document.documentElement.dataset.mood = mood;

  if (mood === "bold") {
    document.documentElement.style.setProperty("--hero-padding", "16vh");
  } else {
    document.documentElement.style.setProperty("--hero-padding", "12vh");
  }
}
