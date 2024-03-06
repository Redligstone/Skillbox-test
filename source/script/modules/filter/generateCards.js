import { createProductCard } from "./createProductCard";

export function generateCards(projects) {
  const coursesList = document.querySelector(".courses__list");

  projects.forEach((project) => {
    const card = createProductCard(project);
    coursesList.appendChild(card);
  });
}
