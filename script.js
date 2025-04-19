const products = [
  { name: "Kẹo Dâu", price: 10000, popular: 8, image: "https://via.placeholder.com/150?text=Kẹo+Dâu" },
  { name: "Kẹo Táo", price: 12000, popular: 5, image: "https://via.placeholder.com/150?text=Kẹo+Táo" },
  { name: "Kẹo Sôcôla", price: 18000, popular: 10, image: "https://via.placeholder.com/150?text=Sôcôla" },
  { name: "Kẹo Gừng", price: 9000, popular: 6, image: "https://via.placeholder.com/150?text=Kẹo+Gừng" },
  { name: "Kẹo Sữa", price: 15000, popular: 7, image: "https://via.placeholder.com/150?text=Kẹo+Sữa" },
];

function renderProducts(list) {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>${p.price.toLocaleString()}đ</p>
      </div>`;
  });
}

function filterProducts() {
  const type = document.getElementById("filter-select").value;
  let sorted = [...products];

  switch (type) {
    case "aToZ":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "priceLow":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "priceHigh":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "popular":
      sorted.sort((a, b) => b.popular - a.popular);
      break;
  }

  renderProducts(sorted);
}

function searchCandy() {
  const keyword = document.getElementById("search-input").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  renderProducts(filtered);
}

// Tải lần đầu với sản phẩm ngẫu nhiên
renderProducts(shuffle(products));

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
