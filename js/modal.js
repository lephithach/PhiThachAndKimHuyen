// Modal & close Modal
const modalFullImage = document.querySelector(".modal.full-image");
const btnClose = modalFullImage.querySelector(".btn");
const modalMedia = modalFullImage.querySelector(".media");

// function close modal
const closeModal = () => {
  modalFullImage.style.visibility = "hidden";
  let getImageElement = modalMedia.querySelector("img");
  let getVideoElement = modalMedia.querySelector("video");

  if (getImageElement) {
    modalMedia.removeChild(getImageElement);
  }

  if (getVideoElement) {
    modalMedia.removeChild(getVideoElement);
  }
};

btnClose.onclick = () => {
  closeModal();
};

modalFullImage.onclick = () => {
  closeModal();
};

modalMedia.onclick = (e) => {
  e.stopPropagation();
};

// Show full image
const albumImageList = document.querySelectorAll(
  ".album-container .img-group img"
);

albumImageList.forEach((image) => {
  image.onclick = (e) => {
    let srcImage = e.target.getAttribute("src");

    // Show modal
    modalFullImage.style.visibility = "visible";

    // Create div Image
    let modalImage = document.createElement("img");
    modalMedia.appendChild(modalImage);

    modalImage.setAttribute("src", srcImage);
  };
});

// Show full video
const albumVideoList = document.querySelectorAll(
  ".album-container .img-group video"
);

albumVideoList.forEach((video) => {
  video.onclick = (e) => {
    e.preventDefault();
    let srcVideo = e.target.getAttribute("src");

    // Show modal
    modalFullImage.style.visibility = "visible";

    // Create div Image
    let modalImage = document.createElement("video");
    modalMedia.appendChild(modalImage);

    modalImage.setAttribute("src", srcVideo);
    modalImage.setAttribute("controls", true);
    modalImage.play();
  };
});
