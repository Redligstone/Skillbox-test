import { fetchData } from "./fetchData.js";
import { filterCards } from "./filterCards.js";
import { generateCards } from "./generateCards.js";

export async function initializePage(url) {
  try {
    const data = await fetchData(url);
    const filterLinks = document.querySelectorAll(".courses__filter-list a");
    const coursesList = document.querySelector(".courses__list");

    const hash = window.location.hash;
    if (hash) {
      const filterCategory = "#" + hash.substr(1);
      filterLinks.forEach((link) => {
        if (link.getAttribute("href") === filterCategory) {
          link.classList.add("is-active");
        } else {
          link.classList.remove("is-active");
        }
      });
      const filteredData = filterCards(data, filterCategory);
      generateCards(filteredData);
    } else {
      generateCards(data);
    }

    filterLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const filterCategory = "#" + this.getAttribute("href").substr(1);
        filterLinks.forEach((filterLink) =>
          filterLink.classList.remove("is-active")
        );
        this.classList.add("is-active");

        coursesList.innerHTML = "";

        const filteredData = filterCards(data, filterCategory);
        generateCards(filteredData);
      });
    });
  } catch (error) {
    console.error("Error initializing page:", error);
  }
}
