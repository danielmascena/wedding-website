// main.js
import dateHelper from "./dateHelper";

import "./styles.css";

const loading = document.querySelector(".loading[hidden]");
const timeLeft = document.querySelector('.time-left');
const menu = document.querySelector('.navbar');
const months = [
  "Janeiro",
  "Feveiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
const animateit = _ => {
  const mainContent = document.getElementById("main-container");
  const sections = document.getElementsByClassName("section");
  const banner = document.querySelector(".banner");
  let numColors = 1;
  const animatePage = () => {
    const curPos = mainContent.scrollTop;
    if (curPos < document.body.offsetHeight){
      banner.style.backgroundColor = `var(--color${numColors<=5 ? numColors++ : (numColors=1)})`;
    }
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (width > 700) {
      if (curPos > document.body.offsetHeight - 30 /* menu height */ && menu.classList.contains('top-nav')) {
        menu.classList.replace('top-nav', 'sidebar-nav');
      } else if (curPos < document.body.offsetHeight - 30 && menu.classList.contains('sidebar-nav')) {
        menu.classList.replace('sidebar-nav', 'top-nav');
      }
      for (let section of sections) {
        if (section.offsetTop - window.outerHeight / 2 <= curPos) {
          section.classList.add("animate");
        }
      }
    }
  };
  const switchMenu = () => {
    const curPos = mainContent.scrollTop;
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (width < 700) {
      menu.classList.replace("sidebar-nav", "top-nav");
    }
  }
  mainContent.addEventListener("scroll", animatePage);
  window.addEventListener('resize', switchMenu);
};

if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", animateit);
} else {
  animateit();
}
dateHelper();

window.goToSection = id => {
  window.event.preventDefault();
  document.getElementById(id).scrollIntoView();
};

//document.documentElement.style.setProperty('--page-bg-color', this.checked ? 'black' : 'whitesmoke');
