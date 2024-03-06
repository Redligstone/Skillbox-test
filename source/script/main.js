import "../scss/style.scss";
import "./utils/prism.js";
import { iosVhFix } from "./utils/ios-vh-fix.js";
import { initializePage } from "./modules/filter/initializePage.js";

window.addEventListener("DOMContentLoaded", () => {
  iosVhFix();
  const url = "public/projects.json";
  initializePage(url);
  window.addEventListener("load", () => {});
});
