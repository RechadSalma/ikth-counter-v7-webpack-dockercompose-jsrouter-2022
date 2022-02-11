import route from "./router/route.js";
import Home from "./pages/Home.js";
import Side from "./pages/Side.js";
import ErrorPage from "./pages/ErrorPage.js";
import link from "./router/link.js";
import attachEventListenerToLink from "./functions/attachEventListenerToLink.js";
import rerenderPage from "./functions/rerenderPage.js";

/*To listen to any unhandled promise rejections (no catch handler?)
+\ you probably remove it afterwards if you think you do not need it. */
window.addEventListener("unhandledrejection", function (event) {
  console.warn("iK unhandledrejection (promise): ", event.promise);
  console.warn("iK unhandledrejection (reason): ", event.reason);
});

const iKindexjs = () => {
  console.log("iK index page");

  // function dispatchPopstate(event) {
  //   event.preventDefault;
  //   console.log("dispatchPopstate event");
  // }

  let routeLayout = `
    <div>
      <header>ik I am header
      <button type='button'>${link("/", "iK home link")}</button>
      <button type='button'>${link("/side", "iK side link")}</button>
      <button type='button'>${link("/*", "iK Error page link")}</button>
      </header>

      <main>
      ${route("/", Home())}
      ${route("/side", Side())}
      ${route("/*", ErrorPage())}
      </main>

      <footer>iK I am footer</footer>
    </div>
  `;

  const body = document.getElementById("ikbody");

  body.innerHTML = routeLayout;
}; /*END iKindexjs */

// output innerHTML tags onto body tag
iKindexjs();

// attach event listener to each links so that you prevent reload of page & it will programatic navigates to the correct url & page components
attachEventListenerToLink();

// rerender page when link has been click, so you can programmatically navigate to the correct url & matching route page
rerenderPage();
