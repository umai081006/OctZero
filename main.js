import { getBrandContext } from "./brand-os/brand-context.js";
import { resolveNarrative } from "./brand-os/brand-narrative.js";
import { renderHero } from "./brand-os/brand-renderer.js";
import { resolveMotionLevel, applyMotionLevel } from "./brand-os/brand-motion.js";
import { applyThemePreferences } from "./brand-os/brand-theme.js";
import { resolveMood, applyMood } from "./brand-os/brand-mood.js";
import { initRouter } from "./brand-os/brand-router.js";

document.addEventListener("DOMContentLoaded", () => {
  const context = getBrandContext();

  applyThemePreferences();
  applyMotionLevel(resolveMotionLevel(context));
  applyMood(resolveMood(context));

  initRouter((html) => {
    const view = document.getElementById("view");
    view.innerHTML = html;

    const narrative = resolveNarrative(context);
    renderHero(narrative);
  });
});
