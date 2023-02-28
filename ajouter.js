


document.body.onload = carouselReady;
function carouselReady() {
    const button_div = document.createElement("div");

    const button_left = document.createElement("button");
    button_left.innerHTML = "←";
    button_left.classList.add("left")

    const button_right = document.createElement("button");
    button_right.innerHTML = "→";
    button_right.classList.add("right")

    button_div.appendChild(button_left);
    button_div.appendChild(button_right);


    const currentDiv = document.getElementById("demo");
    document.body.insertBefore(button_div, currentDiv);
}