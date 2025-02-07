let firstImg = document.getElementById("firstImg");
firstImg.setAttribute("data-id", 1);
firstImg.style.opacity = "1"; // Ensure first image is visible initially
// firstImg.style.transform = "translateX(0)"; // Ensure first image is in place initially
firstImg.style.transform = "scaleX(100%)";
let firstImage1 = document.querySelector("#firstImg > img");
let firstImage2 = document.querySelector("#firstImg > a > img");
let firstImageBg = document.querySelector("#firstImg > .img-overlay > img");
firstImageBg.style.transform = "scaleY(100%)";

let secondImg = document.getElementById("secondImg");
secondImg.setAttribute("data-id", 2);
secondImg.style.opacity = "0"; // Ensure second image is hidden initially
// secondImg.style.transform = "translateX(-100%)"; // Position second image to the left initially
secondImg.style.transform = "scaleX(0)";
let secondImage1 = document.querySelector("#secondImg > img");
secondImage1.style.transform = "scaleX(0)";
let secondImage2 = document.querySelector("#secondImg > a > img");
secondImage2.style.transform = "scaleX(0)";
let secondImageBg = document.querySelector("#secondImg > .img-overlay > img");
secondImageBg.style.transform = "scaleY(0)";

let thirdImg = document.getElementById("thirdImg");
thirdImg.setAttribute("data-id", 3);
thirdImg.style.opacity = "0"; // Ensure third image is hidden initially
// thirdImg.style.transform = "translateX(-100%)"; // Position third image to the left initially
thirdImg.style.transform = "scaleX(0)";
let thirdImage1 = document.querySelector("#thirdImg > img");
thirdImage1.style.transform = "scaleX(0)";
let thirdImage2 = document.querySelector("#thirdImg > a > img");
thirdImage2.style.transform = "scaleX(0)";
let thirdImageBg = document.querySelector("#thirdImg > .img-overlay > img");
thirdImageBg.style.transform = "scaleY(0)";

let first = document.getElementById("first");
first.addEventListener("click", showFirstImg);
first.classList.add("active");
let second = document.getElementById("second");
second.addEventListener("click", showSecondImg);
let third = document.getElementById("third");
third.addEventListener("click", showThirdImg);

let shownImg = 1;

function showFirstImg() {
  const thisImg = 1;
  addTranformOrigin(thisImg);
  first.classList.add("active");
  second.classList.remove("active");
  third.classList.remove("active");

  firstImg.style.opacity = "1";
  firstImg.style.transform = "scaleX(100%)";
  firstImage1.style.transform = "scaleX(100%)";
  firstImage2.style.transform = "scaleX(100%)";
  firstImageBg.style.transform = "scaleY(100%)";
  secondImg.style.opacity = "0";
  secondImg.style.transform = "scaleX(0)";
  secondImage1.style.transform = "scaleX(0)";
  secondImage2.style.transform = "scaleX(0)";
  secondImageBg.style.transform = "scaleY(0)";
  thirdImg.style.opacity = "0";
  thirdImg.style.transform = "scaleX(0)";
  thirdImage1.style.transform = "scaleX(0)";
  thirdImage2.style.transform = "scaleX(0)";
  thirdImageBg.style.transform = "scaleY(0)";
}

function showSecondImg() {
  const thisImg = 2;
  addTranformOrigin(thisImg);
  first.classList.remove("active");
  second.classList.add("active");
  third.classList.remove("active");

  firstImg.style.opacity = "0";
  firstImg.style.transform = "scaleX(0)";
  firstImage1.style.transform = "scaleX(0)";
  firstImage2.style.transform = "scaleX(0)";
  firstImageBg.style.transform = "scaleY(0)";
  secondImg.style.opacity = "1";
  secondImg.style.transform = "scaleX(100%)";
  secondImage1.style.transform = "scaleX(100%)";
  secondImage2.style.transform = "scaleX(100%)";
  secondImageBg.style.transform = "scaleY(100%)";
  thirdImg.style.opacity = "0";
  thirdImg.style.transform = "scaleX(0)";
  thirdImage1.style.transform = "scaleX(0)";
  thirdImage2.style.transform = "scaleX(0)";
  thirdImageBg.style.transform = "scaleY(0)";
}

function showThirdImg() {
  const thisImg = 3;
  addTranformOrigin(thisImg);
  first.classList.remove("active");
  second.classList.remove("active");
  third.classList.add("active");

  firstImg.style.opacity = "0";
  firstImg.style.transform = "scaleX(0)";
  firstImage1.style.transform = "scaleX(0)";
  firstImage2.style.transform = "scaleX(0)";
  firstImageBg.style.transform = "scaleY(0)";
  secondImg.style.opacity = "0";
  secondImg.style.transform = "scaleX(0)";
  secondImage1.style.transform = "scaleX(0)";
  secondImage2.style.transform = "scaleX(0)";
  secondImageBg.style.transform = "scaleY(0)";
  thirdImg.style.opacity = "1";
  thirdImg.style.transform = "scaleX(100%)";
  thirdImage1.style.transform = "scaleX(100%)";
  thirdImage2.style.transform = "scaleX(100%)";
  thirdImageBg.style.transform = "scaleY(100%)";
}

function addTranformOrigin(thisImg) {
  if (shownImg < thisImg) {
    firstImg.style.transformOrigin = "left";
    firstImage1.style.transformOrigin = "left";
    firstImage2.style.transformOrigin = "left";
    firstImageBg.style.transformOrigin = "top";
    secondImg.style.transformOrigin = "left";
    secondImage1.style.transformOrigin = "left";
    secondImage2.style.transformOrigin = "left";
    secondImageBg.style.transformOrigin = "top";
    thirdImg.style.transformOrigin = "left";
    thirdImage1.style.transformOrigin = "left";
    thirdImage2.style.transformOrigin = "left";
    thirdImageBg.style.transformOrigin = "top";
  } else {
    firstImg.style.transformOrigin = "right";
    firstImage1.style.transformOrigin = "right";
    firstImage2.style.transformOrigin = "right";
    firstImageBg.style.transformOrigin = "bottom";
    secondImg.style.transformOrigin = "right";
    secondImage1.style.transformOrigin = "right";
    secondImage2.style.transformOrigin = "right";
    secondImageBg.style.transformOrigin = "bottom";
    thirdImg.style.transformOrigin = "right";
    thirdImage1.style.transformOrigin = "right";
    thirdImage2.style.transformOrigin = "right";
    thirdImageBg.style.transformOrigin = "bottom";
  }

  shownImg = thisImg;
}
