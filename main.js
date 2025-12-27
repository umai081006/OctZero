import { getBrandContext } from "./brand-os/brand-context.js";
import { resolveNarrative } from "./brand-os/brand-narrative.js";
import { renderHero } from "./brand-os/brand-renderer.js";
import { resolveMotionLevel, applyMotionLevel } from "./brand-os/brand-motion.js";
import { applyThemePreferences } from "./brand-os/brand-theme.js";
import { resolveMood, applyMood } from "./brand-os/brand-mood.js";
import { initRouter } from "./brand-os/brand-router.js";
import { initMoodControl } from "./brand-os/brand-ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const context = getBrandContext();

  applyThemePreferences();
  applyMood(resolveMood(context));
  applyMotionLevel(resolveMotionLevel(context));

  initRouter(() => {
    const narrative = resolveNarrative(getBrandContext());
    renderHero(narrative);
  });

  initMoodControl();
});

// listen for live mood change
document.addEventListener("octzero:mood-change", () => {
  const narrative = resolveNarrative(getBrandContext());
  renderHero(narrative);
});
