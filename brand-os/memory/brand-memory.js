const KEY = "octzero-memory";

export function loadMemory() {
  return JSON.parse(localStorage.getItem(KEY)) || {};
}

export function saveMemory(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}
