export function initScrollStory(stories) {
  window.addEventListener("scroll", () => {
    const progress =
      window.scrollY /
      (document.body.scrollHeight - window.innerHeight);

    stories.forEach(s => {
      if (!s.done && progress >= s.at) {
        s.done = true;
        s.action();
      }
    });
  });
}
