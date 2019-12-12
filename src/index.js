import "./styles.css";

// main.js
import fetchData from "./fetchData";

const banner = document.getElementById("banner");
const titleBanner = document.getElementById("title-banner");
const loading = document.querySelector(".loading[hidden]");
const images = document.getElementsByClassName("pictures");
const dateElement = document.getElementById("wedding-date");
const presentation = document.querySelector(
  ".section-presentation .presentation"
);

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
const loadImages = ({ Asset }) => {
  var count = 0;
  for (let key in Asset) {
    let url = Asset[key].fields.file.url;
    +key === 1
      ? (banner.style.backgroundImage = `url('${url}')`)
      : (images[count++].src = url);
  }
};

fetchData(({ items, includes }) => {
  loadImages(includes);
  titleBanner.textContent = items[0].fields.blogText;
  presentation.textContent = items[0].fields.generalBlogText;
  var dateStr = items[0].fields.dateOfWedding;
  var date = new Date(dateStr);
  dateElement.setAttribute("datetime", dateStr);
  dateElement.textContent = date.getDate() + " de " + months[date.getMonth()];
}, loading);

window.goToSection = id => {
  window.event.preventDefault();
  document.getElementById(id).scrollIntoView();
};
