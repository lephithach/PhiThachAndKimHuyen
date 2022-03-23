const dataArr = [
  {
    title: "Taipei Tea",
    picture_url: "images/album/1B962FC2-FC59-4C67-82C7-1B1A2A0C9E47.JPG",
    alt: "Taipei Tea",
    type: "picture",
  },
  {
    title: "Taipei Tea",
    picture_url: "images/album/IMG_8543.JPEG",
    alt: "Taipei Tea",
    type: "picture",
  },
  {
    title: "Bờ đê",
    picture_url: "images/album/IMG_1486.JPEG",
    alt: "Bờ đê",
    type: "picture",
  },
  {
    title: "Nắm lấy cái tay",
    picture_url: "images/album/IMG_8550.JPG",
    alt: "Nắm lấy cái tay",
    type: "picture",
  },
  {
    title: "Taipei Tea",
    picture_url: "images/album/taipei.jpg",
    alt: "Taipei Tea",
    type: "picture",
  },
  {
    title: "Lẩu 9 tầng mây",
    picture_url: "images/album/IMG_8567.JPEG",
    alt: "Lẩu 9 tầng mây",
    type: "picture",
  },
  {
    title: "Chả lụi",
    picture_url: "images/album/IMG_8645.JPEG",
    alt: "Chả lụi",
    type: "picture",
  },
  {
    title: "Mì cay Itada",
    picture_url: "images/album/itada.jpg",
    alt: "Mì cay Itada",
    type: "picture",
  },
  {
    title: "Mì cay Itada",
    picture_url: "images/album/itada-2.jpg",
    alt: "Mì cay Itada",
    type: "picture",
  },
  {
    title: "Cháo hàu",
    picture_url: "images/album/chao-hau.jpg",
    alt: "Cháo hàu",
    type: "picture",
  },
  {
    title: "Mía việt",
    picture_url: "images/album/mia-viet.jpg",
    alt: "Mía việt",
    type: "picture",
  },
  {
    title: "Quà của bé yêu",
    video_url: "images/album/IMG_8648.mp4",
    video_thumb: "images/album/IMG_8648_thumb.jpeg",
    type: "video",
  },
  {
    title: "Lẩu 9 tầng mây",
    video_url: "images/album/1a5b77afabdd4226b3b266bba10aeaec.MOV",
    video_thumb: "images/album/1a5b77afabdd4226b3b266bba10aeaec_thumb.jpeg",
    type: "video",
  },
  {
    title: "Bún đậu",
    picture_url: "images/album/275211368_3080763348812069_4503234155773307407_n.jpg",
    alt: "Bún đậu",
    type: "picture",
  },
  {
    title: "Phúc Tea",
    picture_url: "images/album/274313152_3344011615885337_6979006919394709099_n.jpg",
    alt: "Phúc Tea",
    type: "picture",
  },
  {
    title: "Jollibee",
    picture_url: "images/album/275072366_1407066133086045_5202664060119150425_n.jpg",
    alt: "Jollibee",
    type: "picture",
  },
  {
    title: "Jollibee",
    picture_url: "images/album/274655867_4954349228014810_1723201730457990813_n.jpg",
    alt: "Jollibee",
    type: "picture",
  },
];

const albumContainer = document.querySelector(".album-container");

var data = dataArr.map((item) => {
  let html = "";

  switch (item.type) {
    case "picture":
      html += `
        <div class="img-group">
            <p class="title">${item.title}</p>
            <img
            src="${item.picture_url}"
            alt="${item.alt}"
            />
        </div>
    `;

      return html;

    case "video":
      html += `
        <div class="img-group">
            <p class="title">${item.title}</p>
            <video
                src="${item.video_url}"
                poster="${item.video_thumb}"
                controls
            ></video>
        </div>
    `;

      return html;

    default:
      return html;
  }
});

albumContainer.innerHTML = data.join("");
