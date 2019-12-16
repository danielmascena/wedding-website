import "./styles.css";

// main.js
import fetchData from "./fetchData";

const titleBanner = document.getElementById("title-banner");
const loading = document.querySelector(".loading[hidden]");
const images = document.getElementsByClassName("pictures");
const dateElement = document.querySelector(".wedding-date");
const presentation = document.querySelector(
  ".section-presentation .presentation"
);
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
    var curPos = mainContent.scrollTop;
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

fetchData(({ items, includes }) => {
  const idImgPresentation = items[0].fields.imagesLandingPage.map(
    id => id.sys.id
  );
  loadImages(
    includes.Asset.filter(asset => idImgPresentation.includes(asset.sys.id))
  );
  titleBanner.parentElement.style.backgroundImage = `url('${includes.Asset[1].fields.file.url}')`;
  titleBanner.textContent = items[0].fields.blogText;
  presentation.textContent = items[0].fields.generalBlogText;
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
