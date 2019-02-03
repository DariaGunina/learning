var link = document.querySelector(".button-map");
var popup = document.querySelector(".popup");
var overlay = document.querySelector(".popup-overlay");
var close = document.querySelector(".button-close")



link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("hidden");
});

overlay.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("hidden");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("hidden");
});
