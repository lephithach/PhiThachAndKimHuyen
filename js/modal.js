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

  // Remove disable button zoom in
  btnZoomIn.classList.remove("disable");
};

// function open modal
const openModal = () => {
  modalFullImage.style.visibility = "visible";
  modalFullImage.style.opacity = "1";
  // lock scroll
  document.querySelector("body").style.overflowY = "hidden";

  // disable button zoom out
  btnZoomOut.classList.add("disable");

  handelCenterMedia();
};

btnClose.addEventListener("click", closeModal);
modalFullImage.addEventListener("click", closeModal);
modalMedia.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Show full media
const mediaList = document.querySelectorAll(".album-container .img-group");

mediaList.forEach((item) => {
  item.onclick = (e) => {
    // Lấy tagname của item vừa click
    let tagName = e.target.tagName;
    // Lấy đường dẫn của item vừa click
    let srcMedia = e.target.getAttribute("src");

    // Tạo thẻ div theo tagname vừa click
    let modalTagName = document.createElement(tagName);

    // Xử lý logic theo tagname
    switch (tagName) {
      case "IMG":
        modalMedia.appendChild(modalTagName);

        modalTagName.setAttribute("src", srcMedia);

        break;

      case "VIDEO":
        modalMedia.appendChild(modalTagName);

        modalTagName.setAttribute("src", srcMedia);
        modalTagName.setAttribute("controls", true);
        modalTagName.play();
        break;

      default:
        break;
    }

    // Thêm class media để xử lý các sự kiện rotate
    modalTagName.classList.add("media");

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
    if (zoom >= 10) {
      btnZoomIn.classList.add("disable");
      return 10;
    }
    zoom += number;
  } else {
    if (zoom == 1) {
      btnZoomOut.classList.add("disable");
      return 1;
    }
    zoom -= number;
  }

  return zoom.toFixed(1);
};

const handelDragMedia = (status, element) => {
  status
    ? new Draggabilly(document.querySelector(".modal.full-image .media"))
    : handelCenterMedia();
};

const handelCenterMedia = () => {
  modalMedia.style = "";
};

// Zoom in
btnZoomIn.addEventListener("click", (e) => {
  e.stopPropagation();
  let mediaElement = modalMedia.querySelector("img");
  let scale = 0;

  if (!mediaElement.getAttribute("data-zoom")) {
    let initZoom = 1;
    scale = handelZoom("zoomIn", initZoom, 0.6);
  } else {
    let initZoom = mediaElement.getAttribute("data-zoom");
    scale = handelZoom("zoomIn", initZoom, 0.6);
  }

  // Change CSS image zoom
  mediaElement.setAttribute("style", `transform: scale(${scale});`);
  // Set attr image
  mediaElement.setAttribute("data-zoom", `${scale}`);

  // Remove disable zoom out
  btnZoomOut.classList.remove("disable");

  // Drag image media
  handelDragMedia(true, modalMedia);
});

// Zoom out
btnZoomOut.addEventListener("click", (e) => {
  e.stopPropagation();
  let mediaElement = modalMedia.querySelector("img");
  let scale = 0;

  // if (!sel.getAttribute("data-zoom")) {
  //   let initZoom = 1;
  //   scale = handelZoom("zoomOut", initZoom, 0.6);
  // } else {
  //   let initZoom = sel.getAttribute("data-zoom");
  //   scale = handelZoom("zoomOut", initZoom, 0.6);
  // }

  if (mediaElement.getAttribute("data-zoom")) {
    let initZoom = mediaElement.getAttribute("data-zoom");
    scale = handelZoom("zoomOut", initZoom, 0.6);

    // Change CSS image zoom
    mediaElement.setAttribute("style", `transform: scale(${scale});`);
    // Set attr image
    mediaElement.setAttribute("data-zoom", `${scale}`);

    if (scale == 1) {
      // Drag image media
      handelDragMedia(false, modalMedia);
    }

    // Remove disable zoom in
    btnZoomIn.classList.remove("disable");
  }
});

// Rotate
const btnRotateRight = document.querySelector(".tools .rotate-right");
const btnRotateLeft = document.querySelector(".tools .rotate-left");

btnRotateRight.addEventListener("click", (e) => {
  e.stopPropagation();
  handelRotate("right", modalMedia);
});

btnRotateLeft.addEventListener("click", (e) => {
  e.stopPropagation();
  handelRotate("left", modalMedia);
});

const handelRotate = (direction, element) => {
  element = element.querySelector(".media");
  let deg = Number(element.getAttribute("rotate"));

  switch (direction) {
    case "right":
      deg = deg == 0 ? 90 : (deg += 90);
      break;

    case "left":
      deg = deg == 0 ? -90 : (deg -= 90);
      break;

    default:
      element.style.transform = "rotate(0)";
      element.setAttribute("rotate", 0);
      break;
  }

  element.style.transform = `rotate(${deg}deg)`;
  element.setAttribute("rotate", deg);
};
