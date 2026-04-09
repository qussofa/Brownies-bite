function scrollToSection() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}
function scrollProduk() {
    document.getElementById("produk").scrollIntoView({
        behavior: "smooth"
    });
}


function filterProduk(kategori) {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (kategori === "all") {
            card.style.display = "block";
        } else {
            if (card.dataset.kategori === kategori) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    });
}

function page(num) {
    alert("Pindah ke halaman " + num);
}


function scrollProduk() {
    document.getElementById("produk").scrollIntoView({
        behavior: "smooth"
    });
}

function gantiToko(id) {
    const title = document.getElementById("storeTitle");
    const alamat = document.getElementById("storeAlamat");
    const telp = document.getElementById("storeTelp");
    const map = document.getElementById("mapFrame");

    if (id === 1) {
        title.innerText = "Toko Pandanaran";
        alamat.innerText = "Jl. Pandanaran No.51A, Semarang";
        telp.innerText = "Telp: +62 24 831 8531";
        map.src = "https://www.google.com/maps?q=Dyriana+Bakery+Semarang&output=embed";
    }

    if (id === 2) {
        title.innerText = "Toko Pamularsih";
        alamat.innerText = "Jl. Pamularsih No.70, Semarang";
        telp.innerText = "Telp: +62 24 766 35138";
        map.src = "https://www.google.com/maps?q=Pamularsih+Semarang&output=embed";
    }

    if (id === 3) {
        title.innerText = "Toko Ngaliyan";
        alamat.innerText = "Jl. Prof Dr Hamka, Semarang";
        telp.innerText = "Telp: +62 24 764 35005";
        map.src = "https://www.google.com/maps?q=Ngaliyan+Semarang&output=embed";
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return; // biar ga error kalau ga ada input

    searchInput.addEventListener("keyup", function () {

        let keyword = this.value.toLowerCase();
        let cards = document.querySelectorAll(".card");

        cards.forEach(function (card) {

            let title = card.querySelector("h4").innerText.toLowerCase();

            if (title.includes(keyword)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

let nama = card.querySelector("h4").innerText.toLowerCase();
let title = card.querySelector("h4").innerText.toLowerCase();


// efek muncul saat load
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".about-box");

    boxes.forEach((box, index) => {
        box.style.opacity = 0;
        box.style.transform = "translateY(30px)";

        setTimeout(() => {
            box.style.transition = "0.6s";
            box.style.opacity = 1;
            box.style.transform = "translateY(0)";
        }, index * 300);
    });
});



const scroll = document.getElementById("scroll");

document.querySelector(".left").onclick = () => {
    scroll.scrollBy({ left: -250, behavior: "smooth" });
};

document.querySelector(".right").onclick = () => {
    scroll.scrollBy({ left: 250, behavior: "smooth" });
};