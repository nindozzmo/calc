function setBg() {
  const body = document.body;
  const blur = document.querySelector(".blur");
  const bgSelect = document.getElementById("bgSelect");
  const bgSelectOptionValue = bgSelect.options[bgSelect.selectedIndex].value;

  function bgChange(x) {;
    switch(x) {
      case "coder":
        y = "url(img/coder-min.jpg) 0 / cover fixed";
        break;

      case "office":
        y = "url(img/office-min.jpg) 0 / cover fixed";
        break;

      case "newYork":
        y = "url(img/new-york-min.jpg) 0 / cover fixed"
        break;

      case "yellowBlue":
        y = "linear-gradient(200deg, #1dbfff, #f8fc23) 0 / cover fixed";
        break;

      case "purpleLime":
        y = "linear-gradient(200deg, #82fd30, #ff47b2) 0 / cover fixed";
        break;

      case "violetMango":
        y = "linear-gradient(200deg, #fca119, #692cf8) 0 / cover fixed";
        break;

      case "cyanRed":
        y = "linear-gradient(200deg, #fc1919, #2cf1f8) 0 / cover fixed";
        break;
    }

    body.style.background = y;
    blur.style.background = y;
  }

  bgChange(bgSelectOptionValue);
}