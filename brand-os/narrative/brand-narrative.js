export function resolveNarrative(context) {
  return {
    headline: "OctZero",
    tagline:
      context.device === "mobile"
        ? "We build brands that scale."
        : "Brand systems engineered to evolve."
  };
}
