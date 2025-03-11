// Explore Packages page sliding cards
let cardContainers = [...document.querySelectorAll(".exp-cards-except-btns")];
let preBtns = [...document.querySelectorAll(".btn-pre")];
let nxtBtns = [...document.querySelectorAll(".btn-nxt")];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth - 200;
    });

    preBtns[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 200;
    });
});


// All Packages page duration filter
const minDaysSlider = document.getElementById("minDays");
const maxDaysSlider = document.getElementById("maxDays");
const minDaysValue = document.getElementById("minDaysValue");
const maxDaysValue = document.getElementById("maxDaysValue");

minDaysSlider.addEventListener("input", function() {
    minDaysValue.textContent = this.value + " day" + (this.value !== "1" ? "s" : "");
});

maxDaysSlider.addEventListener("input", function() {
    maxDaysValue.textContent = this.value + " day" + (this.value !== "1" ? "s" : "");
});
