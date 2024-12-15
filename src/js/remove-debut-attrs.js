console.log("Hello from Astro!");
if (import.meta.env.DEV) {
  document.querySelectorAll("[data-astro-source-file]").forEach((el) => {
    el.removeAttribute("data-astro-source-file");
  });
  document.querySelectorAll("[data-astro-source-loc]").forEach((el) => {
    el.removeAttribute("data-astro-source-loc");
  });
}