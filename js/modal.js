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

  // unlock scroll
  document.querySelector("body").style.overflowY = "scroll";
};

// function open modal
const openModal = (e) => {
  modalFullImage.style.visibility = "visible";
  // lock scroll
  document.querySelector("body").style.overflowY = "hidden";
};

btnClose.addEventListener("click", closeModal);
modalFullImage.addEventListener("click", closeModal);

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

    // Create div Image
    let modalImage = document.createElement("img");
    modalMedia.appendChild(modalImage);

    modalImage.setAttribute("src", srcImage);

    // Show modal
    openModal();
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

    // Create div Image
    let modalImage = document.createElement("video");
    modalMedia.appendChild(modalImage);

    modalImage.setAttribute("src", srcVideo);
    modalImage.setAttribute("controls", true);
    modalImage.play();

    // Show modal
    openModal();
  };
});

// Tools
const btnZoomIn = document.querySelector(".tools .zoom-in");
const btnZoomOut = document.querySelector(".tools .zoom-out");

const handelZoom = (type = "zoomIn", zoom, number) => {
  zoom = Number(zoom);
  number = Number(number);

  if (type === "zoomIn") {
    if (zoom >= 10) return 10;
    zoom += number;
  } else {
    if (zoom <= 0.4) return 0.4;
    zoom -= number;
  }

  return zoom.toFixed(1);
};

// Zoom in
btnZoomIn.onclick = (e) => {
  e.stopPropagation();
  let sel = modalMedia.querySelector("img");
  let scale = 0;

  if (!sel.getAttribute("data-zoom")) {
    let initZoom = 1;
    scale = handelZoom("zoomIn", initZoom, 0.6);
  } else {
    let initZoom = sel.getAttribute("data-zoom");
    scale = handelZoom("zoomIn", initZoom, 0.6);
  }

  sel.setAttribute("style", `transform: scale(${scale});`);
  sel.setAttribute("data-zoom", `${scale}`);
};

// Zoom out
btnZoomOut.onclick = (e) => {
  e.stopPropagation();
  let sel = modalMedia.querySelector("img");
  let scale = 0;

  if (!sel.getAttribute("data-zoom")) {
    let initZoom = 1;
    scale = handelZoom("zoomOut", initZoom, 0.6);
  } else {
    let initZoom = sel.getAttribute("data-zoom");
    scale = handelZoom("zoomOut", initZoom, 0.6);
  }

  sel.setAttribute("style", `transform: scale(${scale});`);
  sel.setAttribute("data-zoom", `${scale}`);
};
