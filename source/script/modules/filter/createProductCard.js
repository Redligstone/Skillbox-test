export function createProductCard(product) {
  const listItem = document.createElement("li");
  listItem.classList.add("courses__item");

  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  if (product.classes && product.classes.length > 0) {
    product.classes.forEach((className) => {
      productCard.classList.add(className);
    });
  }

  const innerDiv = document.createElement("div");
  innerDiv.classList.add("product-card__inner");

  const boxDiv = document.createElement("div");
  boxDiv.classList.add("product-card__box");

  const labelSpan = document.createElement("span");
  labelSpan.classList.add("product-card__label");
  labelSpan.textContent = product.label;

  if (product.hit) {
    const hitSpan = document.createElement("span");
    hitSpan.classList.add("product-card__hit");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "12");
    svg.setAttribute("height", "12");
    svg.setAttribute("aria-hidden", "true");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M10 5H7.149l.867-5L1 7h2.851l-.867 5L10 5z");
    path.setAttribute("fill", "currentColor");

    svg.appendChild(path);

    const hitTextSpan = document.createElement("span");
    hitTextSpan.classList.add("product-card__hit-text");
    hitTextSpan.textContent = "Хит продаж";

    hitSpan.appendChild(svg);
    hitSpan.appendChild(hitTextSpan);

    boxDiv.appendChild(hitSpan);
  }

  const titleHeading = document.createElement("h2");
  titleHeading.classList.add("product-card__title");
  titleHeading.textContent = product.title;

  const img = document.createElement("img");
  img.classList.add("product-card__img");
  img.setAttribute("src", product.src);
  img.setAttribute("height", "200");
  img.setAttribute("width", "200");
  img.setAttribute("alt", "Иллюстрация продукта");

  innerDiv.appendChild(boxDiv);
  innerDiv.appendChild(titleHeading);
  innerDiv.appendChild(img);

  productCard.appendChild(innerDiv);

  const dateSpan = document.createElement("span");
  dateSpan.classList.add("product-card__date");
  dateSpan.textContent = product.date;

  const shadowLink = document.createElement("a");
  shadowLink.classList.add("product-card__shadow-link");
  shadowLink.setAttribute("target", "_blank");
  shadowLink.setAttribute("href", product.href);

  productCard.appendChild(dateSpan);
  productCard.appendChild(shadowLink);

  listItem.appendChild(productCard);

  return listItem;
}
