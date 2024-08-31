import { nav } from "../../components/nav";
import "../../style.css";

document.querySelector("#app").innerHTML = `
  <div>
  ${nav}
 <div class="users"></div>
  </div>
`;

const userWrapper = document.querySelector(".users");

const createUsers = (result) => {
  const { users } = result;

  const cards = users.map((user) => {
    const { image, username, gender, age } = user;

    return `<div class="users--card">
                       <img src="${image}" alt="">
                      <h4>Username:${username}</h4>
					  <p>Gender:${gender}</p>
                      <span>Age: ${age}</span>
                   </div>`;
  });
  userWrapper.innerHTML = cards.join("\n");
};

fetch("https://dummyjson.com/user")
  .then((result) => result.json())
  .then((value) => {
    createUsers(value);
  });
