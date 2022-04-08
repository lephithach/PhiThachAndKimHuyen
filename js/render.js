import { dataArr } from "./_data.js";
import { animateArr } from "./_listAnimate.js";

// Count lenght animateArr
const lengthAnimateArr = animateArr.length;
// Selector div class album-container
const albumContainer = document.querySelector(".album-container");

// Loop data array
var data = dataArr.map((item, key) => {
  let html = "";
  let randomNumberAnimateArray = Math.floor(Math.random() * lengthAnimateArr);
  let randomClassAnimate = animateArr[randomNumberAnimateArray];

  switch (item.type) {
    case "picture":
      html += `
          <div class="img-group wow animate__animated ${randomClassAnimate}">
              <p class="title">${item.title}</p>
              <img
                src="${item.picture_url}"
                alt="${item.alt}"
                title="${item.alt}"
                data-id="${key + 1}"
              />
          </div>
      `;

      return html;

    case "video":
      html += `
          <div class="img-group video wow animate__animated ${randomClassAnimate}">
              <p class="title">${item.title}</p>
              <video
                src="${item.video_url}"
                poster="${item.video_thumb}"
                alt="${item.alt}"
                title="${item.alt}"
                data-id="${key + 1}"
              ></video>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
</svg>
          </div>
      `;

      return html;

    default:
      return html;
  }
});

// Render HTML to index.html
albumContainer.innerHTML = data.join("");
