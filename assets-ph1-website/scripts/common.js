"use strict";
{
  const openBtn = document.getElementById("js-header-btn");
  const menu = document.getElementById("js-menu");
  const main = document.getElementById("js-main");
  const footerLogo = document.getElementById("js-footer-logo");
  const footerLine = document.getElementsByClassName("footer_line");
  const footerSmall = document.getElementById("js-footer-small");
  let index = 0;

  openBtn.addEventListener("click", () => {
    if (index === 0) {
      index = 1;
      openBtn.classList.add("close");
      for (let i = 0; i < main.children.length; i++) {
        const child = main.children[i];
        child.classList.add("to-be-removed");
      }
      footerLogo.classList.add("to-be-removed");
      for (let i = 0; i < footerLine.length; i++) {
        const line = footerLine[i];
        line.classList.add("to-be-removed");
      }
      footerSmall.classList.add("to-be-removed");

      menu.classList.remove("to-be-removed");
    } else if (index === 1) {
      index = 0;
      openBtn.classList.remove("close");
      for (let i = 0; i < main.children.length; i++) {
        const child = main.children[i];
        child.classList.remove("to-be-removed");
      }
      footerLogo.classList.remove("to-be-removed");
      for (let i = 0; i < footerLine.length; i++) {
        const line = footerLine[i];
        line.classList.remove("to-be-removed");
      }
      footerSmall.classList.remove("to-be-removed");

      menu.classList.add("to-be-removed");
    }
  });

  window.addEventListener("resize", function () {
    const screenWidth = window.innerWidth;
    if (screenWidth > 500) {
      index = 0;
      openBtn.classList.remove("close");
      for (let i = 0; i < main.children.length; i++) {
        const child = main.children[i];
        child.classList.remove("to-be-removed");
      }
      footerLogo.classList.remove("to-be-removed");
      for (let i = 0; i < footerLine.length; i++) {
        const line = footerLine[i];
        line.classList.remove("to-be-removed");
      }
      footerSmall.classList.remove("to-be-removed");

      menu.classList.add("to-be-removed");
    }
  });
}
