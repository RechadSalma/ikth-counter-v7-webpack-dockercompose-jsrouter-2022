import excessSpace from "../functions/ExcessSpace";

export default function Home() {
  const homeHtml = `
  <div>
    <h1>iK I am Home page</h1>
    <button type='button'>pushState</button>
  </div>`;

  const trimmed = excessSpace(homeHtml);

  return trimmed;
}
