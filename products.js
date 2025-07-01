const products = [
  { name: "Smartphone", category: "Electronics", price: 1200, rating: 5 },
  { name: "Bluetooth Speaker", category: "Electronics", price: 900, rating: 4 },
  { name: "T-Shirt", category: "Clothing", price: 450, rating: 3 },
  { name: "Jeans", category: "Clothing", price: 800, rating: 4 },
  { name: "Novel", category: "Books", price: 300, rating: 5 },
  { name: "Notebook", category: "Books", price: 150, rating: 4 },
  { name: "Headphones", category: "Electronics", price: 1100, rating: 5 },
  { name: "Sweater", category: "Clothing", price: 1200, rating: 5 }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const ratingFilter = document.getElementById("ratingFilter");
const priceFilter = document.getElementById("priceFilter");

function displayProducts(filtered) {
  productList.innerHTML = "";
  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: ₹${product.price}</p>
      <p>Rating: ${"⭐".repeat(product.rating)}</p>
    `;
    productList.appendChild(card);
  });
}

function filterProducts() {
  const category = categoryFilter.value;
  const rating = parseInt(ratingFilter.value);
  const price = priceFilter.value;

  let filtered = products.filter(p => {
    const matchCategory = !category || p.category === category;
    const matchRating = !rating || p.rating >= rating;
    const matchPrice =
      !price ||
      (price === "low" && p.price < 500) ||
      (price === "mid" && p.price >= 500 && p.price <= 1000) ||
      (price === "high" && p.price > 1000);

    return matchCategory && matchRating && matchPrice;
  });

  displayProducts(filtered);
}

// Initial load
displayProducts(products);

// Event listeners
categoryFilter.addEventListener("change", filterProducts);
ratingFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);
