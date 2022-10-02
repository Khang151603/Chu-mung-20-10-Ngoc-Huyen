var to = "Huyền iu!";
var gift_url = "https://www.facebook.com/nguyen.n.hanie";
var gift_image_url = "huyeniu4.jpg";

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {
  var _giftLink, _giftImg;

  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }

  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

  present.addEventListener(
    "click",
    function (e) {
      present.classList.toggle("open");
      document.getElementById("card").classList.add("card-show");
    },
    false
  );

  nametag.innerText = to;
}

init();
