export function getBrandContext() {
  return {
    mood: localStorage.getItem("octzero:mood") || "calm",
    visitCount: Number(localStorage.getItem("octzero:visits") || 0)
  };
}
