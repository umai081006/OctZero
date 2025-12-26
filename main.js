import { getBrandContext } from "./brand-os/context/brand-context.js";
import { resolveNarrative } from "./brand-os/narrative/brand-narrative.js";
import { resolveMotionLevel, applyMotionLevel } from "./brand-os/motion/brand-motion.js";
import { applyThemePreferences } from "./brand-os/theme/brand-theme.js";
import { resolveMood, applyMood } from "./brand-os/mood/brand-mood.js";
import { initRouter } from "./brand-os/router/brand-router.js";
import { initScrollStory } from "./brand-os/scroll/brand-scroll.js";
import { loadMemory } from "./brand-os/memory/brand-memory.js";

import { renderHero } from "./sections/hero.js";
import { renderProof } from "./sections/proof.js";
import { renderSystem } from "./sections/system.js";
import { renderInvite } from "./sections/invite.js";

document.addEventListener("DOMContentLoaded", () => {
  const context = getBrandContext();

  applyThemePreferences();
  applyMood(resolveMood(context));
  applyMotionLevel(resolveMotionLevel(context));

  initRouter(() => {
    const narrative = resolveNarrative(context);
    renderHero(narrative);
    renderProof();
    renderSystem();
    renderInvite();
  });

  initScrollStory([
    { at: 0.25, action: renderProof },
    { at: 0.55, action: renderSystem },
    { at: 0.8, action: renderInvite }
  ]);

  const memory = loadMemory();
  if (memory.prefersProof) {
    document.getElementById("proof").style.order = -1;
  }

  const isInternal =
    new URLSearchParams(window.location.search).get("mode") === "internal";

  if (isInternal) {
    const panel = document.getElementById("brand-control");
    panel.hidden = false;

    document.getElementById("moodSelect").onchange = e =>
      applyMood(e.target.value);

    document.getElementById("motionSelect").onchange = e =>
      applyMotionLevel(e.target.value);
  }
});
