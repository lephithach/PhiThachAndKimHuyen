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
          <div class="img-group wow animate__animated ${randomClassAnimate}">
              <p class="title">${item.title}</p>
              <video
                src="${item.video_url}"
                poster="${item.video_thumb}"
                alt="${item.alt}"
                title="${item.alt}"
                data-id="${key + 1}"
              ></video>
          </div>
      `;

      return html;

    default:
      return html;
  }
});

// Render HTML to index.html
albumContainer.innerHTML = data.join("");
