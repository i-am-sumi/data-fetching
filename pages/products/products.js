import "../../style.css";
import { nav } from "../../components/nav";
import { createPagination } from "../../components/pagination";

document.querySelector("#app").innerHTML = `
  <div>
   ${nav}
 <div class="products"></div>
  </div>
`;

const productsWrapper = document.querySelector(".products");

const createProducts = (result) => {
  const { products } = result;

  const cards = products.map((product) => {
    const { title, images, price, id } = product;

    return `<a href='/pages/products/product-details?id=${id}'>
      <div class="products--card">
                    <img src="${images[0]}" alt="">
                    <p>${title}</p>
                    <span>Price: ${price}</span>
                 </div>
    </a>`;
  });
  productsWrapper.innerHTML = cards.join("\n");
};

fetch("https://dummyjson.com/products?limit=10&skip=0")
  .then((result) => result.json())
  .then((value) => {
    createProducts(value);
  });

createPagination("products", createProducts);
