import { HeroSection } from "../sections/hero.js";

export function renderHero(narrative) {
  const heroHTML = HeroSection(narrative);
  document.getElementById("view").innerHTML = heroHTML;
}
