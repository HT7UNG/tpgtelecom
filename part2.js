//hide hero banner:
document.querySelector(".carousel-container").style.display = "none";
//Re-layour feature list items as per requested on desktop view ONLY;
const mediaQuery = window.matchMedia("(min-width: 768px)");
const featureList = document.querySelector(
  ".FeaturedTextstyles__List-sc-1l6duzo-0"
);

function handleMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    featureList.style.gridTemplateColumns = "repeat(2, minmax(100px, 225px))";
  } else {
    featureList.style.gridTemplateColumns = "repeat(1, minmax(100px, 225px))";
  }
}

mediaQuery.addEventListener(handleMediaChange);
handleMediaChange(mediaQuery);
//Automatically check address “Level 9 177 Pacific Highway, NORTH SYDNEY NSW 2060“
//value is disappearing on click and address checking does not initialise.
document.querySelector(`[data-testid="input"`).value = "test";

//Add “Most popular“ tag to Home Fast plan;
//not working for mobile view.
const tag = document.createElement("div");
tag.style.width = "100px";
tag.style.height = "20";
tag.style.backgroundColor = "purple";
tag.style.color = "white";
tag.style.display = "flex";
tag.style.alignItems = "center";
tag.style.justifyContent = "center";
tag.style.fontSize = "10px";
tag.textContent = "Most Popular";
tag.style.position = "absolute";
document.querySelector("#plan-card-AU12317").appendChild(tag);
//Replace existing HTML...

document.querySelector(
  `[data-testid="nbninfo-content"] p`
).innerHTML = `<p>Vodafone nbn™, with unlimited data, is designed to keep you GOING and GOING. <script>console.log("do 
you see me? what you should do to me?");</script> On plans with the Vodafone Wi-Fi Hub™ 2.0, you’ll be 
connected to the internet from day 1 and you can power on through interruptions with 4G Back-up. Get a 
nbn connection today with Vodafone nbn™ - winner of Australia’s best fixed broadband provider at the 
Telecommunication Industry’s CommsDay Edison Awards 2020.</p>
<p>Sign up online below or call us on <a href="tel:1300808808">1300 808 808.</a></p>`;

//Expand "Terms and Conditions" accordion
document.querySelector(`[data-testid="tncs-title"`).click();
