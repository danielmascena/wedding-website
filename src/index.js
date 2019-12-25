import "./styles.css";

// main.js
import fetchData from "./fetchData";

const titleBanner = document.getElementById("title-banner");
const loading = document.querySelector(".loading[hidden]");
const images = document.getElementsByClassName("pictures");
const dateElement = document.querySelector(".wedding-date");
const timeLeft = document.querySelector('.time-left');
const presentation = document.querySelector(
  ".section-presentation .presentation"
);
const menu = document.querySelector('.navbar');
const extra = document.querySelector(".info-extra .infos");
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
const loadImages = assets => {
  var count = 0;
  for (let asset of assets) {
    let url = asset.fields.file.url;
    images[count++].src = url;
  }
};
const animateit = _ => {
  const mainContent = document.getElementById("main-container");
  const sections = document.getElementsByClassName("section");
  const animatePage = _ => {
    const curPos = mainContent.scrollTop;
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (width > 700) {
      if (curPos > document.body.offsetHeight - 30 /* menu height */ && menu.classList.contains('top-nav')) {
        menu.classList.replace('top-nav', 'sidebar-nav');
      } else if (curPos < document.body.offsetHeight - 30 && menu.classList.contains('sidebar-nav')) {
        menu.classList.replace('sidebar-nav', 'top-nav');
      }
    }
    for (let section of sections) {
      if (section.offsetTop - window.outerHeight / 2 <= curPos) {
        section.classList.add("animate");
      }
    }
  };
  mainContent.addEventListener("scroll", animatePage);
};

if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", animateit);
} else {
  animateit();
}
const time = new Date(2020,0,25,9).getTime();
setInterval(() => {
  const remainTime = (time - Date.now()) / 86400000;
  const remainDays = parseInt(remainTime, 10);
  const remainHours = (remainTime - remainDays) / 1000 / 60 / 60;
  const remainMinutes = parseInt((remainHours - parseInt(remainHours, 10)) / 1000 / 60, 10);
  /**
   * same as (new Date(2020,0,25,9) - new Date()) / 1000 / 60 / 60 / 24
   */
  timeLeft.innerHTML = `contagem regressiva: 
  faltando <time>${remainDays}</time> dias e <datetime="PT2H30M">
  ${parseInt(remainHours, 10)}h ${remainMinutes}m</time>
  `;
  console.log(`contagem regressiva: 
  faltando <time>${remainDays}</time> dias e <datetime="PT2H30M">
  ${parseInt(remainHours, 10)}h ${remainMinutes}m</time>
  `,remainTime);
}, 1000);
fetchData(({ items, includes }) => {
  const idImgPresentation = items[0].fields.imagesLandingPage.map(
    id => id.sys.id
  );
  loadImages(
    includes.Asset.filter(asset => idImgPresentation.includes(asset.sys.id))
  );
  titleBanner.parentElement.style.backgroundImage = `url('${includes.Asset[1].fields.file.url}')`;
  titleBanner.textContent = items[0].fields.blogText;
  presentation.prepend(items[0].fields.generalBlogText);
  extra.textContent = items[0].fields.generalBlogText;
  var dateStr = items[0].fields.dateOfWedding;
  var date = new Date(dateStr);
  dateElement.setAttribute("datetime", dateStr);
  dateElement.textContent = date.getDate() + " de " + months[date.getMonth()];
}, loading);

window.goToSection = id => {
  window.event.preventDefault();
  document.getElementById(id).scrollIntoView();
};
