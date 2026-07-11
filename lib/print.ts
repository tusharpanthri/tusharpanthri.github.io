export function printResume() {
  if (typeof document === "undefined") return;
  document.body.classList.add("printing");
  window.print();
  document.body.classList.remove("printing");
}
