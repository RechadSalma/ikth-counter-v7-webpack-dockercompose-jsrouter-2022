export default function attachEventListenerToLink() {
  const anchorLinks = document.getElementsByClassName("anchorLinks");

  for (let anchorElement of anchorLinks) {
    anchorElement.addEventListener("click", (event) => {
      // prevent automatic reload when clicked
      event.preventDefault();

      // collect url path of the anchor
      const urlPath = anchorElement.getAttribute("href");

      // change url pathname address bar to match the clicked anchor link
      window.history.pushState({}, "", urlPath);

      const popstateEvent = new PopStateEvent("popstate");

      // dispatch the popstate event so that we can detect it & know url location history has been changed
      window.dispatchEvent(popstateEvent);

      // console.log(popstateEvent);
    });
  }
}
