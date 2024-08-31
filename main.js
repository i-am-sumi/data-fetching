import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <div class='products'>
    </div>
  </div>
`;

// fetch(url)
const productsWrapper = document.querySelector('.products');

const createProducts = (result) => {
  const { products } = result;

  products.forEach((product) => {
    const { title, images, price } = product;

    const paragraph = document.createElement('p');
    paragraph.innerHTML = title;

    const imgElement = document.createElement('img');
    imgElement.src = images[0];
    imgElement.style.height = '200px';
    imgElement.style.width = '200px';

    const card = document.createElement('div');
    card.classList.add('products--card');
    card.appendChild(imgElement);
    card.appendChild(paragraph);

    const priceElement = document.createElement('span');
    priceElement.innerHTML = `Price : ${price}`;
    card.appendChild(priceElement);
    productsWrapper.appendChild(card);
  });
};

fetch('https://dummyjson.com/products')
  .then((result) => result.json())
  .then((value) => {
    createProducts(value);
  });

setupCounter(document.querySelector('#counter'));
