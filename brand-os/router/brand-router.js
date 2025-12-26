export function initRouter(render) {
  window.addEventListener("hashchange", render);
  render();
}
