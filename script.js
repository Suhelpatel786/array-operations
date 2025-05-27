const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 800, stock: 10 },
  { id: 2, name: "Phone", category: "Electronics", price: 500, stock: 0 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40, stock: 20 },
  { id: 4, name: "Jeans", category: "Clothing", price: 60, stock: 15 },
  { id: 5, name: "Blender", category: "Home Appliances", price: 120, stock: 5 },
  { id: 6, name: "Book", category: "Stationery", price: 20, stock: 30 },
];

// Filter Electronics Products

let electronicsProducts = products.filter(
  (products) => products.category === "Electronics"
);

//display electronics products
console.log("Electronics Products Details:- ");
for (let index = 0; index < electronicsProducts.length; index++) {
  const product = electronicsProducts[index];
  console.log(
    `Id = ${product.id}, Name = ${product.name}, Price = ${product.price}, Stock = ${product.stock}`
  );
}

// Out of Stock Items
let outOfStockItems = products.filter((products) => products.stock === 0);

//Dispaly Out Of Stock Items
console.log("Out Of Products Details:- ");
for (let index = 0; index < outOfStockItems.length; index++) {
  const product = outOfStockItems[index];
  console.log(
    `Id = ${product.id}, Name = ${product.name}, Category = ${product.category}, Price = ${product.price}`
  );
}

// Calculate Total Stock Value
let totalStockValue = 0;

for (let index = 0; index < products.length; index++) {
  totalStockValue += products[index].price * products[index].stock;
}

console.log("Total Stock Value = " + totalStockValue);

// Find the Most Expensive Product
let mostExpensiveProduct = products[0];

for (let index = 0; index < products.length; index++) {
  if (products[index].price > products.price) {
    mostExpensiveProduct = products[index];
  }
}

console.log(
  "Most Expensive Product =",
  mostExpensiveProduct.name,
  "Price = ",
  mostExpensiveProduct.price
);

//List Product Names by Category

const namesByCategory = {};

for (let index = 0; index < products.length; index++) {
  const productCategory = products[index].category;
  const productName = products[index].name;

  if (!namesByCategory[productCategory]) {
    namesByCategory[productCategory] = [];
  }

  namesByCategory[productCategory].push(productName);
}

console.log(namesByCategory);
