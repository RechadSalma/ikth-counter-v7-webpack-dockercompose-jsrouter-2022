export default function route(path, pageComponent) {
  // collect current url location
  let currentUrlLocation = window.location.pathname;

  console.log(currentUrlLocation);

  // output matching path with component otherwise null if not matching
  return currentUrlLocation === path ? pageComponent : null;
}
