let header = document.querySelectorAll(".accordian-header");


header.forEach(function (item) {
    item.addEventListener("click", function (){
        let opn = item.classList.contains("item-show");
        header.forEach(function (item) {
            item.classList.remove("item-show")
        });
        if (!opn) {
            item.classList.toggle("item-show");
        }
    })
});