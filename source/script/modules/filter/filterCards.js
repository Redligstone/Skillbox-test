export function filterCards(data, filterCategory) {
  if (filterCategory === "#all" || filterCategory === "") {
    return data;
  } else {
    return data.filter((card) => card.tags.includes(filterCategory));
  }
}
