import "../../style.css";
import { nav } from "../../components/nav";

document.querySelector("#app").innerHTML = `
  <div>
   ${nav}
 <div id="ucard"></div>
  </div>
`;

const ucardWrapper = document.querySelector("#ucard");

const createUcard = (ucard) => {
  const { image, firstName, lastName, age, gender, birthDate, userAgent } =
    ucard;

  const details = `<div >
	<img src="${image}" style='heigth:100vh'/>
	<hr/>
	<h2> FirstName: ${firstName}</h2>
	<p> LastName: ${lastName}</p>
  <span>Age: ${age}<span>
  <p> Gender: ${gender}</p>
  <p>Date of Birth: ${birthDate}</p>
  <p>UserAgent:  ${userAgent}</p>
	</div>

	`;

  ucardWrapper.innerHTML = details;
};

const id = location.href.split("=")[1];

fetch(`https://dummyjson.com/user/${id}`)
  .then((result) => result.json())
  .then((value) => {
    createUcard(value);
  });
