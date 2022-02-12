class link {
  // however we will use this function callback once, at the end after every link has been rendered so we can target it individually
  attachPopstateEventListenerToLink() {
    const anchorLinks = document.getElementsByClassName("anchorLinks");

    for (let anchorElement of anchorLinks) {
      anchorElement.addEventListener("click", (event) => {
        // prevent reload when anchor is clicked
        event.preventDefault();

        // collect url path of the anchor
        const urlPath = anchorElement.getAttribute("href");

        // change url pathname address bar to match the clicked anchor link
        window.history.pushState({}, "", urlPath);

        const popstateEvent = new PopStateEvent("popstate");

        // dispatch the popstate event so that we can detect it & know url location history has been changed
        window.dispatchEvent(popstateEvent);
      });
    }
  }

  homeLink(content) {
    return `<a href='/' class='anchorLinks' >${content}</a>`;
  }

  sideLink(content) {
    return `<a href='/side' class='anchorLinks' >${content}</a>`;
  }

  errorPage(content) {
    return `<a href='/*' class='anchorLinks' >${content}</a>`;
  }
}

export default new link();
