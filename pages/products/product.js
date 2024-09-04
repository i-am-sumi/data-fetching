import "../../style.css";
import { nav } from "../../components/nav";

document.querySelector("#app").innerHTML = `
  <div>
   ${nav}
 <div class="product"></div>
  </div>
`;

const productWrapper = document.querySelector(".product");

const createProduct = (product) => {
  const { images, title, description, meta, reviews } = product;
  const { createdAt, updatedAt } = meta;

  const postedOn = new Date(createdAt);
  const updatedOn = new Date(updatedAt);

  const productReview = reviews
    .map((review) => {
      const { reviewerName, comment, date } = review;

      const reviewData = new Date(date);

      return `
<div class='mb-4 text-start'>
	   <p> ${reviewerName} ${reviewData.toDateString()}</p>
			<p>${comment}</p>
	  </div>
	  
	 
	`;
    })
    .join("\n");

  const details = `<div>
	<img src="${images[0]}" style='max-width: 100%'/>
	<span class='small'>Posted on ${postedOn.toDateString()}</span> <span class='small'>Updated on ${updatedOn.toDateString()}</span>
	<hr/>
	<h2>${title}</h2>
	<p>${description}</p>
	</div>
	 <div class='d-flex d flex-column flex-wrap'>
	 	${productReview}
	  </div>

	`;

  productWrapper.innerHTML = details;
};

const id = location.href.split("=")[1];

fetch(`https://dummyjson.com/products/${id}`)
  .then((result) => result.json())
  .then((value) => {
    createProduct(value);
  });
