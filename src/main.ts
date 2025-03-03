import router from "./routes/router";

router();

document.addEventListener("click", (e) => {
  const event = e.target as unknown;
  if (event instanceof HTMLLinkElement && event.hasAttribute("data-link")) {
    e.preventDefault();
    if (event.href) {
      window.history.pushState(null, "", event.href);
      router();
    }
  }
});

window.addEventListener("popstate", router);
