const products = [
  {
    name: "Redmi Note 13",
    price: "₹13,999",
    image: "https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914990_1280.png",
  },
  {
    name: "Samsung Galaxy M14",
    price: "₹11,990",
    image: "https://cdn.pixabay.com/photo/2016/11/10/16/03/android-1814556_1280.jpg",
  },
  {
    name: "Apple iPhone 13",
    price: "₹59,999",
    image: "https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg",
  },
  {
    name: "boAt Rockerz 255",
    price: "₹1,199",
    image: "https://m.media-amazon.com/images/I/51xxA+6E+xL._SX679_.jpg",
  },
  {
    name: "Sony WH-1000XM5",
    price: "₹26,999",
    image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SX679_.jpg",
  },
  {
    name: "Noise ColorFit Icon 2",
    price: "₹1,599",
    image: "https://m.media-amazon.com/images/I/61HHS0HrjpL._SX679_.jpg",
  }
];

const productList = document.getElementById("productList");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button class="add-to-cart">Add to Cart</button>
  `;
  productList.appendChild(div);
});

// 🔍 Search functionality
document.getElementById("searchBox").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const cards = document.querySelectorAll(".product");

  cards.forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = name.includes(keyword) ? "block" : "none";
  });
});

// 🌙 Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
