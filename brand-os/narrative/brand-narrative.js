export function resolveNarrative(context) {
  switch (context.mood) {
    case "bold":
      return {
        eyebrow: "OctZero Bold Mode",
        title: "Brands are not campaigns.",
        subtitle: "They are systems that evolve under pressure."
      };

    case "dark":
      return {
        eyebrow: "OctZero Dark Mode",
        title: "Silence is also a statement.",
        subtitle: "Design stripped to its absolute intent."
      };

    default:
      return {
        eyebrow: "OctZero System",
        title: "Designing brands as living systems.",
        subtitle: "A design foundation built to evolve."
      };
  }
}
