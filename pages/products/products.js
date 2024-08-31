import '../../style.css';
import { nav } from '../../components/nav';

document.querySelector('#app').innerHTML = `
  <div>
   ${nav}
 <div class="products"></div>
  </div>
`;

const productsWrapper = document.querySelector('.products');

const createProducts = (result) => {
  const { products } = result;

  const cards = products.map((product) => {
    const { title, images, price } = product;

    return `<div class="products--card">
                    <img src="${images[0]}" alt="">
                    <p>${title}</p>
                    <span>Price: ${price}</span>
                 </div>`;
  });
  productsWrapper.innerHTML = cards.join('\n');
};

fetch('https://dummyjson.com/products')
  .then((result) => result.json())
  .then((value) => {
    createProducts(value);
  });
