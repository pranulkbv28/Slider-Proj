const firstImg = document.getElementById("firstImg");
const firstBgImg = document.querySelector("#firstImg > div > img");
firstBgImg.style.transform = "scaleY(100%)";
firstBgImg.style.transformOrigin = "top";
const firstTitleImage = document.querySelector("#firstImg > img");
firstTitleImage.style.transform = "scaleX(100%)";
firstTitleImage.style.transformOrigin = "left";
const firstProdImg = document.querySelector("#firstImg > a > img");
firstProdImg.style.transform = "scaleX(100%)";
firstProdImg.style.transformOrigin = "left";

const secondImg = document.getElementById("secondImg");
const secondBgImg = document.querySelector("#secondImg > div > img");
secondBgImg.style.transform = "scaleY(0%)";
secondBgImg.style.transformOrigin = "bottom";
const secondTitleImage = document.querySelector("#secondImg > img");
secondTitleImage.style.transform = "scaleX(0%)";
secondTitleImage.style.transformOrigin = "right";
const secondProdImg = document.querySelector("#secondImg > a > img");
secondProdImg.style.transform = "scaleX(0%)";
secondProdImg.style.transformOrigin = "right";

const thirdImg = document.getElementById("thirdImg");
const thirdBgImg = document.querySelector("#thirdImg > div > img");
thirdBgImg.style.transform = "scaleY(0%)";
thirdBgImg.style.transformOrigin = "bottom";
const thirdTitleImage = document.querySelector("#thirdImg > img");
thirdTitleImage.style.transform = "scaleX(0%)";
thirdTitleImage.style.transformOrigin = "right";
const thirdProdImg = document.querySelector("#thirdImg > a > img");
thirdProdImg.style.transform = "scaleX(0%)";
thirdProdImg.style.transformOrigin = "right";

const firstButton = document.getElementById("first");
firstButton.addEventListener("click", showFirst);
const secondButton = document.getElementById("second");
secondButton.addEventListener("click", showSecond);
const thirdButton = document.getElementById("third");
thirdButton.addEventListener("click", showThird);

let shownImg = 1;

function showFirst() {
  const clickedImg = 1;

  if (shownImg === 2) {
    firstBgImg.style.transformOrigin = "bottom";
    firstTitleImage.style.transformOrigin = "left";
    firstProdImg.style.transformOrigin = "left";
    secondBgImg.style.transformOrigin = "top";
    secondTitleImage.style.transformOrigin = "right";
    secondProdImg.style.transformOrigin = "right";
  } else if (shownImg === 3) {
    firstBgImg.style.transformOrigin = "top";
    firstTitleImage.style.transformOrigin = "left";
    firstProdImg.style.transformOrigin = "left";
    thirdBgImg.style.transformOrigin = "bottom";
    thirdTitleImage.style.transformOrigin = "right";
    thirdProdImg.style.transformOrigin = "right";
  }

  firstBgImg.style.transform = "scaleY(100%)";
  firstTitleImage.style.transform = "scaleX(100%)";
  firstProdImg.style.transform = "scaleX(100%)";
  secondBgImg.style.transform = "scaleY(0)";
  secondTitleImage.style.transform = "scaleX(0)";
  secondProdImg.style.transform = "scaleX(0)";
  thirdBgImg.style.transform = "scaleY(0)";
  thirdTitleImage.style.transform = "scaleX(0)";
  thirdProdImg.style.transform = "scaleX(0)";

  shownImg = clickedImg;
  console.log(shownImg);
}

function showSecond() {
  const clickedImg = 2;
  // changeSeconOrigin(clickedImg, shownImg);
  if (shownImg === 1) {
    firstBgImg.style.transformOrigin = "top";
    firstTitleImage.style.transformOrigin = "left";
    firstProdImg.style.transformOrigin = "left";
    secondBgImg.style.transformOrigin = "bottom";
    secondTitleImage.style.transformOrigin = "right";
    secondProdImg.style.transformOrigin = "right";
  } else if (shownImg === 3) {
    secondBgImg.style.transformOrigin = "top";
    secondTitleImage.style.transformOrigin = "left";
    secondProdImg.style.transformOrigin = "left";
    thirdBgImg.style.transformOrigin = "bottom";
    thirdTitleImage.style.transformOrigin = "right";
    thirdProdImg.style.transformOrigin = "right";
  }

  requestAnimationFrame(() => {
    firstBgImg.style.transform = "scaleY(0)";
    firstTitleImage.style.transform = "scaleX(0)";
    firstProdImg.style.transform = "scaleX(0)";
    secondBgImg.style.transform = "scaleY(100%)";
    secondTitleImage.style.transform = "scaleX(100%)";
    secondProdImg.style.transform = "scaleX(100%)";
    thirdBgImg.style.transform = "scaleY(0)";
    thirdTitleImage.style.transform = "scaleX(0)";
    thirdProdImg.style.transform = "scaleX(0)";
  });

  shownImg = clickedImg;
  console.log(shownImg);
}

function showThird() {
  const clickedImg = 3;

  if (shownImg === 1) {
    firstBgImg.style.transformOrigin = "top";
    firstTitleImage.style.transformOrigin = "left";
    firstProdImg.style.transformOrigin = "left";
    thirdBgImg.style.transformOrigin = "bottom";
    thirdTitleImage.style.transformOrigin = "right";
    thirdProdImg.style.transformOrigin = "right";
  } else if (shownImg === 2) {
    secondBgImg.style.transformOrigin = "top";
    secondTitleImage.style.transformOrigin = "left";
    secondProdImg.style.transformOrigin = "left";
    thirdBgImg.style.transformOrigin = "bottom";
    thirdTitleImage.style.transformOrigin = "right";
    thirdProdImg.style.transformOrigin = "right";
  }

  firstBgImg.style.transform = "scaleY(0)";
  firstTitleImage.style.transform = "scaleX(0)";
  firstProdImg.style.transform = "scaleX(0)";
  secondBgImg.style.transform = "scaleY(0)";
  secondTitleImage.style.transform = "scaleX(0)";
  secondProdImg.style.transform = "scaleX(0)";
  thirdBgImg.style.transform = "scaleY(100%)";
  thirdTitleImage.style.transform = "scaleX(100%)";
  thirdProdImg.style.transform = "scaleX(100%)";

  shownImg = clickedImg;
  console.log(shownImg);
}

// firstImg.addEventListener("mouseover", () => {
//   firstBgImg.style.transform = "scaleY(0)";
//   firstTitleImage.style.transform = "scaleX(0)";
//   firstProdImg.style.transform = "scaleX(0)";
//   secondBgImg.style.transform = "scaleY(100%)";
//   secondTitleImage.style.transform = "scaleX(100%)";
//   secondProdImg.style.transform = "scaleX(100%)";
// });

firstImg.addEventListener("mouseout", () => {
  firstBgImg.style.transform = "scaleY(100%)";
  firstTitleImage.style.transform = "scaleX(100%)";
  firstProdImg.style.transform = "scaleX(100%)";
  secondBgImg.style.transform = "scaleY(0)";
  secondTitleImage.style.transform = "scaleX(0)";
  secondProdImg.style.transform = "scaleX(0)";
});
