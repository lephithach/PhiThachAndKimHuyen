const btnScrollTop = document.querySelector(".scroll-top");

window.onscroll = (e) => {
  if (window.scrollY > 200) {
    btnScrollTop.style.visibility = "visible";
  } else {
    btnScrollTop.style.visibility = "hidden";
  }
};

btnScrollTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
