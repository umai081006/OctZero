export function getBrandContext() {
  return {
    time: new Date().getHours(),
    device: window.innerWidth < 768 ? "mobile" : "desktop",
    prefersMotion: !window.matchMedia("(prefers-reduced-motion)").matches
  };
}
