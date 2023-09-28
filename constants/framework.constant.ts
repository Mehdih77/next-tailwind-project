export const frameworks = [
  "react",
  "chrome",
  "qwik",
  "mobile",
  "tailwind",
  "desktop",
  "vue",
  "safari",
  "svelte",
] as const;
export type Framework = (typeof frameworks)[number];
// https://stackoverflow.com/questions/59541521/whats-the-meaning-of-typeof-arraynumber-in-typescript