import { studentLetter } from "./letter.js";

const letterContainer = document.querySelector(".letter-container");

studentLetter.forEach((student) => {
  letterContainer.insertAdjacentHTML(
    "beforeend",
    `
    <article class="letter-card">
      <h3>${student.sender}</h3>
      <p>${student.letter}</p>
    </article>
    `
  );
});
