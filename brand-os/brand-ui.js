import { applyMood } from "./brand-mood.js";
import { applyMotionLevel, resolveMotionLevel } from "./brand-motion.js";
import { getBrandContext } from "./brand-context.js";

export function initMoodControl() {
  const panel = document.createElement("div");
  panel.className = "mood-panel";

  panel.innerHTML = `
    <button data-mood="calm">Calm</button>
    <button data-mood="bold">Bold</button>
    <button data-mood="dark">Dark</button>
  `;

  panel.addEventListener("click", (e) => {
    const mood = e.target.dataset.mood;
    if (!mood) return;

    localStorage.setItem("octzero:mood", mood);

    const context = getBrandContext();
    applyMood(mood);
    applyMotionLevel(resolveMotionLevel({ ...context, mood }));

    // re-render hero without reload
    document.dispatchEvent(new CustomEvent("octzero:mood-change"));
  });

    document.documentElement.appendChild(panel);

