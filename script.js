let index = 0;
let carousel_items = document.querySelectorAll(".carousel_item");

function moveRight() {
    if (index === carousel_items.length - 1) index = 0;
    else index++
    renderCarouselItem()
}

function moveLeft() {
    if (index === 0) index = carousel_items.length - 1;
    else index--
    renderCarouselItem()
}

function renderCarouselItem() {
    carousel_items.forEach(el => el.style.display = "none")
    carousel_items[index].style.display = "flex"
}

renderCarouselItem()
document.querySelector("button.right").addEventListener("click", moveRight)
document.querySelector("button.left").addEventListener("click", moveLeft)
