export function resolveNarrative(context) {
  return {
    eyebrow: "OctZero System",
    title: "Designing brands as living systems.",
    subtitle:
      context.mood === "bold"
        ? "We don’t launch pages. We build organisms."
        : "A design system that evolves with intention."
  };
}
