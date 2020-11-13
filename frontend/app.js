const firstLastCont = document.querySelector("#firstname_lastname-container");
const homeSqrFtCont = document.querySelector("#home-squareft-container");
const startDateCont = document.querySelector("#start-date-container");
const moveLocCont = document.querySelector("#move-location-container");
const miscCont = document.querySelector("#miscellaneous-container");
const miscDesc = document.querySelector("#describe-misc-container");
const body = document.querySelector("body");

const boxCountCont = document.querySelector("#box-count-container");
const ourBoxesCont = document.querySelector("#our-boxes-container");
const garageCont = document.querySelector("#garage-container");
const garageHeavyCont = document.querySelector("#garage-heavy-container");
const explainCont = document.querySelector("#explain-container");
const submitBtn = document.querySelector("#submit-btn");
const areYouReady = document.querySelector("#are-you-sure");
const areYouReadyCont = document.querySelector("#are-you-sure-container");
const notReady = document.querySelector("#not-ready");

const boxCount = document.querySelector("#boxCount");
const garageYes = document.querySelector("#garage-yes");
const garageHeavyYes = document.querySelector("#garage-heavy-yes");

const containerArr = [
  firstLastCont,
  homeSqrFtCont,
  startDateCont,
  moveLocCont,
  miscCont,
  boxCountCont,
  garageCont,
];

boxCount.addEventListener("input", (e) => {
  if (e.target.value > 0) {
    ourBoxesCont.classList.add("appear");
  } else {
    ourBoxesCont.classList.remove("appear");
  }
});

miscCont.children[2].addEventListener("click", () => {
  miscDesc.classList.add("appear");
});
miscCont.children[3].addEventListener("click", () => {
  miscDesc.classList.remove("appear");
});

// If Items in Garage
garageYes.parentElement.children[2].addEventListener("click", () => {
  garageHeavyCont.classList.add("appear");
});
garageYes.parentElement.children[3].addEventListener("click", () => {
  garageHeavyCont.classList.remove("appear");
  explainCont.classList.remove("appear");
});

// If Any Heavy In Garage
garageHeavyCont.children[2].addEventListener("click", () => {
  explainCont.classList.add("appear");
});
garageHeavyCont.children[3].addEventListener("click", () => {
  explainCont.classList.remove("appear");
});

submitBtn.addEventListener("click", () => {
  areYouReadyCont.classList.add("appear");

  body.style.overflow = "hidden";
  notReady.addEventListener("click", () => {
    areYouReadyCont.classList.remove("appear");
    body.style.overflow = "auto";
  });
});
