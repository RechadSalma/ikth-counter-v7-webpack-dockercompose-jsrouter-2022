import iKh1 from "./components/iKh1.js";
import iKimg from "./components/iKimg.js";
// import iKasync from './components/iKasync.js';

/*To listen to any unhandled promise rejections (no catch handler?)
+\ you probably remove it afterwards if you think you do not need it. */
window.addEventListener("unhandledrejection", function (event) {
    console.warn("iK unhandledrejection (promise): ", event.promise);
    console.warn("iK unhandledrejection (reason): ", event.reason);
});

const iKindexjs = () => {
    const iKdiv = document.createElement("div");

    iKdiv.textContent = "iK from iKindexjs";

    iKdiv.style.border = "red 3px solid";

    /*iK if you want to use & test out async/await function in your app */
    // iKasync() /*1+*/

    console.log("iK from the index.js");

    return iKdiv;
}; /*END iKindexjs */

const iKbody = document.getElementsByTagName("body")[0];

iKbody.appendChild(iKindexjs());
iKbody.appendChild(iKh1());
iKbody.appendChild(iKimg());

/**
 * 1+ On your babel config file insert:
 * 		+\ "presets": [["@babel/preset-env", { "targets": { "esmodules": true }} ]]
 */
