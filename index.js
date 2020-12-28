

const items = document.querySelectorAll(".slide");
const itemCount = items.length;
const nextItem = document.querySelector(".next");
const previousItem = document.querySelector(".previous");
let count = 0;

console.log(items, nextItem, previousItem)

function showNextItem() {
    items[count].classList.remove("active");

    if (count < itemCount - 1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add("active");
    console.log(count);
}

function showPreviousItem() {
    items[count].classList.remove("active");

    if (count > 0) {
        count--;
    } else {
        count = itemCount - 1;
    }

    items[count].classList.add("active");
    console.log(count);
}

nextItem.addEventListener("click", showNextItem);
previousItem.addEventListener("click", showPreviousItem);




// Mobile Menu Toggle
document.querySelector(".toggle-icon-container").addEventListener("click", () => {
    console.log("radi");
    document.querySelector(".nav-menu").style.display = "flex";
});

document.querySelector(".clear-span").addEventListener("click", () => {
    document.querySelector(".nav-menu").style.display = "none";
});


// Description See More Button
document.querySelector(".seeMoreButton").addEventListener("click", () => {
    document.querySelector(".more").style.display = "block";
    document.querySelector(".dots").style.display = "none";
    document.querySelector(".seeMoreButton").style.display = "none";
});