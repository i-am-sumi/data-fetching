import "../../style.css";
import { nav } from "../../components/nav";

document.querySelector("#app").innerHTML = `
  <div>
   ${nav}
 <div class="post"></div>
  </div>
`;

const postWrapper = document.querySelector(".post");

const createPost = (post) => {
  const { title, body, reactions, views, userId } = post;

  const details = `<div class="p-4">
	<h2 style='max-heigth:100vh' >${title}</h2>
  <hr>
	<p>${body}</p>
  <div class="d-flex justify-content-between" style="max-width:500px">
  <p>likes: ${reactions.likes}</p>
  <p>dislikes: ${reactions.dislikes}</p>
  <p>views:${views}</p>
  <p>userId:${userId}</p>
  </div>
	</div>
  `;
  postWrapper.innerHTML = details;
};

const id = location.href.split("=")[1];

fetch(`https://dummyjson.com/posts/${id}`)
  .then((result) => result.json())
  .then((value) => {
    createPost(value);
  });
