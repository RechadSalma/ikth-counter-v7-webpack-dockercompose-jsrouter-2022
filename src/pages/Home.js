import Counter from "../components/Counter.js";

export default function Home() {
  const homeHtml = `
  <div class='p-3'>
    <div class='d-flex justify-content-center'>
      <h1 class='text-primary'>Home page</h1>
    </div>
    <div class='d-flex justify-content-center border border-danger'>
      ${Counter.render()}
    </div>
  </div>`;

  return homeHtml;
}
