const form = document.getElementById("developer-form");

form.onsubmit = function (event) {
  event.preventDefault();

  const htmlBiliyorMu = event.target.elements.html.checked;
  const cssBiliyorMu = event.target.elements.css.checked;
  const jsBiliyorMu = event.target.elements.js.checked;
  const reactBiliyorMu = event.target.elements.react.checked;
  let getirdeCalisabilirMi = false;
  let trendyoldaCalisabilirMi = false;

  if (htmlBiliyorMu && cssBiliyorMu && jsBiliyorMu) {
    getirdeCalisabilirMi = true;

    if (reactBiliyorMu) {
      trendyoldaCalisabilirMi = true;
    }
  }

  if (trendyoldaCalisabilirMi) {
    console.log("Trendyolda ise basvur");
  } else if (getirdeCalisabilirMi) {
    console.log("Getirde ise basvur");
  } else {
    console.log("Hicbi yerde calisamazsin!");
  }
};
