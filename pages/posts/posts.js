import "../../style.css";
import { nav } from "../../components/nav";
import { createPagination } from "../../components/pagination";

document.querySelector("#app").innerHTML = `
  <div>
  ${nav}
 <div class="posts"></div>
  </div>
`;

const postWrapper = document.querySelector(".posts");

const createPosts = (result) => {
  const { posts } = result;

  const cards = posts.map((post) => {
    const { body, title, views, id } = post;

    return `<a href='/pages/posts/post-detais?id=${id}'>
            <div class="posts--card">
                      <h3>${title}</h3>
					  <p>${body}</p>
                      <span>Views: ${views}</span>
                   </div>
                   </a> `;
  });
  postWrapper.innerHTML = cards.join("\n");
};

fetch("https://dummyjson.com/posts?limit=6&skip=0")
  .then((result) => result.json())
  .then((value) => {
    createPosts(value);
  });

createPagination("posts", createPosts);
