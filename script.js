document.addEventListener("DOMContentLoaded", carouselReady, false);

function carouselReady() {
    const button_div = document.createElement("div");

    const button_left = document.createElement("button");
    button_left.innerHTML = "←";
    button_left.classList.add("left_mobile")

    const button_right = document.createElement("button");
    button_right.innerHTML = "→";
    button_right.classList.add("right_mobile")

    button_div.appendChild(button_left);
    button_div.appendChild(button_right);


    const parentElement = document.getElementById("div_parent");

    const theFirstChild = parentElement.firstChild
    // Insert the new element before the first child
    parentElement.insertBefore(button_div, theFirstChild)



    let index = 0;
    let carousel_items = document.querySelectorAll(".carousel_item");

    function moveRight() {
        index = (index === carousel_items.length - 1) ? 0 : index + 1;
        console.log("hello right");
        renderCarouselItem()
    }

    function moveLeft() {
        index = (index === 0) ? carousel_items.length - 1 : index - 1;
        renderCarouselItem()
    }

    function renderCarouselItem() {
        carousel_items.forEach(el => el.style.display = "none")
        carousel_items[index].style.display = "flex"
    }

    renderCarouselItem()
    document.querySelectorAll("button.right").forEach(el => el.addEventListener("click", moveRight))
    document.querySelectorAll("button.left").forEach(el => el.addEventListener("click", moveLeft))
    document.querySelectorAll("button.right_mobile").forEach(el => el.addEventListener("click", moveRight))
    document.querySelectorAll("button.left_mobile").forEach(el => el.addEventListener("click", moveLeft))


}