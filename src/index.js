import "./styles/global.scss"; //includes bootstrap custom scss
import route from "./router/route.js";
import link from "./router/link.js";
import excessSpace from "./functions/excessSpace.js";
import MainLayout from "./components/MainLayout.js";
import Counter from "./components/Counter";

/*To listen to any unhandled promise rejections (no catch handler?)
+\ you probably remove it afterwards if you think you do not need it. */
window.addEventListener("unhandledrejection", function (event) {
  console.warn("iK unhandledrejection (promise): ", event.promise);
  console.warn("iK unhandledrejection (reason): ", event.reason);
});

const iKindexjs = () => {
  // alternatively you could create layout component to make things cleaner to read

  let routeLayout = `
    <div>
      <header>
        <code>iK I am header v8</code>
        <ul>
          <li>
            <button type='button'>${link.homeLink("iK home link")}</button>
          </li>
          <li>
            <button type='button'>${link.sideLink("iK side link")}</button>
          </li>
          <li>
            <button type='button'>${link.errorPage(
              "iK test error page"
            )}</button>
          </li>
        </ul>
      </header>

      <main class='container p-2 border border-secondary'>
        ${MainLayout()}
      </main>

      <footer>iK I am footer</footer>
    </div>
  `;

  const routeLayoutTrim = excessSpace(routeLayout);

  const body = document.getElementById("ikbody");

  body.innerHTML = routeLayoutTrim;
}; /*END iKindexjs */

// output innerHTML tags onto body tag
iKindexjs();

// attach event listener to each links so that you prevent reload of page & it will programatic navigates to the correct url & page components
link.attachPopstateEventListenerToLink();

// rerender page when url has been change such as link anchor been click, it will detect the popstate event & programmically naviage to the matching route page
route.rerenderPageWhenUrlChanges();

// for counter to add function logic to increment/decrement/reset buttons
Counter.attachClickEventListenerToCounterButtons();
