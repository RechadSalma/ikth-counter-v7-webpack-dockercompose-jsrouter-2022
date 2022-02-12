import Home from "../pages/Home.js";
import Side from "../pages/Side.js";
import ErrorPage from "../pages/ErrorPage.js";
import MainLayout from "../components/MainLayout";

class route {
  // will detect link popstate event & know the url pathname has change so we need to re-render the page to ensure the page is matching the url
  rerenderPageWhenUrlChanges() {
    window.addEventListener("popstate", (event) => {
      console.log(event);
      const mainTag = document.getElementsByTagName("main")[0];
      mainTag.innerHTML = MainLayout();
    });
  }

  render() {
    const currentUrlLocation = window.location.pathname;

    if (currentUrlLocation === "/") {
      return Home();
    } else if (currentUrlLocation === "/side") {
      return Side();
    } else {
      return ErrorPage();
    }
  }
}

export default new route();
