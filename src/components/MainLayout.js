import excessSpace from "../functions/excessSpace.js";
import route from "../router/route.js";

// will be the main tag for rendering the pages
export default function MainLayout() {
  const layout = `
    <div>
      ${route.render()}
    </div>
  `;

  const layoutTrim = excessSpace(layout);

  return layoutTrim;
}
