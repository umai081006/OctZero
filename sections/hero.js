export function renderHero({ headline, tagline }) {
  document.querySelector("#hero .hero-inner").innerHTML = `
    <h1 class="hero-title">${headline}</h1>
    <p class="hero-tagline">${tagline}</p>
  `;
}
