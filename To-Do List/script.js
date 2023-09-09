const inputEl = document.getElementsByTagName("input")[0] // input elementini seçmek için [0] eklenmeli
const ulEl = document.getElementsByTagName("ul")[0] // ul elementini seçmek için [0] eklenmeli
const themeBtn = document.getElementById("themeBtn")


window.addEventListener("load", function () {
    // Yerel depolamadan öğeleri alın
    let items = JSON.parse(localStorage.getItem("items")) || [];

    // Her öğeyi sayfaya ekleyin
    items.forEach(function (item) {
        let list = document.createElement("li")
        let btn = document.createElement("button")
        btn.className = "btn btn-danger"
        btn.textContent = "Delete"
        list.className = "list-group-item fs-2 d-flex justify-content-between"
        list.textContent = item;
        list.appendChild(btn)
        ulEl.appendChild(list)
        inputEl.textContent = ""
    });
});


function clearList() {
    // Tüm listeyi temizle
    ulEl.innerHTML = "";

    // Yerel depolamadan tüm öğeleri kaldır
    localStorage.removeItem("items");
}
function addItems() {
    let item = inputEl.value;
    let list = document.createElement("li")
    let btn = document.createElement("button")
    btn.className = "btn btn-danger"
    btn.textContent = "Delete"
    list.className = "list-group-item text-center fs-2 d-flex justify-content-between"
    list.textContent = item // li öğesine içeriği eklemelisiniz
    list.appendChild(btn)
    ulEl.appendChild(list) // listeyi ul öğesine eklemelisiniz
    saveItemToLocalStorage(item)
    btn.addEventListener("click", function () {
        removeItemFromList(list) // Öğeyi listeden kaldırın
        removeItemFromLocalStorage(item); // Öğeyi yerel depolamadan kaldırın
    });
    inputEl.value = ""
}

function removeItemFromList(list) {
    list.remove();
}

function removeItemFromLocalStorage(item) {
    // Önce yerel depolamadan mevcut öğeleri alın
    let items = JSON.parse(localStorage.getItem("items")) || [];

    // Öğeyi listeden kaldırın
    let index = items.indexOf(item);
    if (index !== -1) {
        items.splice(index, 1);
    }

    // Güncellenmiş listeyi tekrar yerel depolamaya kaydedin
    localStorage.setItem("items", JSON.stringify(items));
}

function saveItemToLocalStorage(item) {
    // Önce yerel depolamadan mevcut öğeleri alın
    let items = JSON.parse(localStorage.getItem("items")) || [];

    // Yeni öğeyi listeye ekleyin
    items.push(item);

    // Güncellenmiş listeyi tekrar yerel depolamaya kaydedin
    localStorage.setItem("items", JSON.stringify(items));
}

function checkWindowSize() {
    const windowWidth = parseInt(window.innerWidth)
    return windowWidth

}
addEventListener("resize", () => { });

onresize = () => {

    if (checkWindowSize() <= 820) {
        document.querySelector("body").classList.add("bg-warning")
        document.querySelector("#container").classList.remove("m-3")
        document.querySelector("#container").classList.remove("bg-gradient")
        themeBtn.addEventListener("click", () => {
            document.querySelector("body").classList.add("bg-info")
            document.querySelector("body").classList.toggle("bg-warning")

        })

    }
    else {
        document.querySelector("body").classList.remove("bg-warning")
        document.querySelector("#container").classList.add("m-5")

    }
};

themeBtn.addEventListener("click", () => {
    document.getElementById("container").classList.add("bg-info")
    document.getElementById("container").classList.toggle("bg-warning")

})