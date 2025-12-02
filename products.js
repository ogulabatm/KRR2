// Простые данные (можно менять)
const items = [
    { name: "Набор пряжи", price: 939, img: "https://avatars.mds.yandex.net/i?id=bb3905b729ac6961691b5041b9ffa127_sr-5470038-images-thumbs&n=13" },
    { name: "Трикотажная пряжа",  price: 750, img: "https://i.pinimg.com/1200x/3f/22/a2/3f22a2db30169789a3c0c7bceb4d611b.jpg" },
    { name: "Набор спиц",   price: 350, img: "https://i.pinimg.com/736x/5f/41/20/5f4120f78e5bb975a66fe3bd4e04188c.jpg" },
    { name: "Крючки набор",price: 359, img: "https://i.pinimg.com/736x/e1/09/f8/e109f82d536174b3a0557005861509b3.jpg" },
    { name: "Пряжа Puffy",  price: 279, img: "https://avatars.mds.yandex.net/i?id=8f7f6be8b7f6aaeac442bfee04b44d25d509b97e-7040875-images-thumbs&n=13" },
    { name: "Мини-набор начинающего", price: 1500, img: "https://i.pinimg.com/1200x/30/d6/c0/30d6c08ed787dce11ab2b017524bcb86.jpg" }
];

// Создание карточек
const container = document.getElementById("products");

items.forEach(item => {
    const card = document.createElement("div");
    card.className = "col-12 col-md-4 mb-4";

    card.innerHTML = `
        <div class="card">
            <img src="${item.img}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Цена: ${item.price} руб.</p>
            </div>
        </div>
    `;

    container.appendChild(card);
});
