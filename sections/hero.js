export function HeroSection(narrative) {
  return `
    <section class="hero">
      <div class="hero-inner">
        <p class="hero-eyebrow">${narrative.eyebrow}</p>
        <h1 class="hero-title">${narrative.title}</h1>
        <p class="hero-subtitle">${narrative.subtitle}</p>
      </div>
    </section>
  `;
}
