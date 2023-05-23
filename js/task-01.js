const itemsEl = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach((itemEl) => {
    console.log(`Category: ${itemEl.querySelector("h2").textContent}`);
    console.log(`Elements: ${itemEl.querySelectorAll("li").length}`);
})








