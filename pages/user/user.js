import { nav } from "../../components/nav";
import "../../style.css";
import { createPagination } from "../../components/pagination";

document.querySelector("#app").innerHTML = `
  <div>
  ${nav}
 <div class="user"></div>
  </div>
`;

const userWrapper = document.querySelector(".user");

const createUsers = (result) => {
  const { users } = result;

  const cards = users.map((user) => {
    const { image, username, gender, age, id } = user;

    return `<a href='/pages/user/single-user?id=${id}'>
                 <div class="users--card">
                       <img src="${image}" alt="">
                      <h4>Username:${username}</h4>
					  <p>Gender:${gender}</p>
                      <span>Age: ${age}</span>
                   </div> 
                   </a>`;
  });
  userWrapper.innerHTML = cards.join("\n");
};

fetch("https://dummyjson.com/users?limit=10&skip=0")
  .then((result) => result.json())
  .then((value) => {
    createUsers(value);
  });
createPagination("user", createUsers);
