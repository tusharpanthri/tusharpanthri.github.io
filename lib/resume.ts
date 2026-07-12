export function downloadResume() {
  if (typeof document === "undefined") return;
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "tusharpanthri_resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
