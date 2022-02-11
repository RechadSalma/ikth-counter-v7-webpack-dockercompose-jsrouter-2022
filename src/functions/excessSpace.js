// removes 2 or more empty string
export default function excessSpace(htmlString) {
  return htmlString.replace(/\s{2,}/g, "");
}
