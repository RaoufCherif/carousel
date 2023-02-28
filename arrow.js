document.addEventListener("DOMContentLoaded", carouselReady, false);

function carouselReady() {

    const carousel_container = document.querySelector("#carousel");
    const leftBtn = document.createElement("button")
    leftBtn.innerHTML = "←"
    leftBtn.classList.add("left")
    const rightBtn = document.createElement("button")
    rightBtn.innerHTML = "→"
    rightBtn.classList.add("right")
    carousel_container?.appendChild(leftBtn)
    carousel_container?.appendChild(rightBtn)

    let index = 0;
    let carousel_items = document.querySelectorAll(".carousel_item");

    function moveRight() {
        index = (index === carousel_items.length - 1) ? 0 : index + 1;
        renderCarouselItem()
    }

    function moveLeft() {
        index = (index === 0) ? carousel_items.length - 1 : index - 1;
        renderCarouselItem()
    }

    function renderCarouselItem() {
        console.log("rendercarousel", carousel_items);
        // @ts-ignore
        carousel_items.forEach(el => el.style.display = "none")
        // @ts-ignore
        carousel_items[index].style.display = "flex"
    }

    renderCarouselItem()
    document.querySelector("#carousel button.right")?.addEventListener("click", moveRight)
    document.querySelector("#carousel button.left")?.addEventListener("click", moveLeft)

}
