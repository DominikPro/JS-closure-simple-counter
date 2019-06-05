const timer = () => {
  let timeOnTheWeb = 0;
  document.body.textContent = `Na tej stronie jesteś już ${timeOnTheWeb} sekund!`

  let relayingFunction = () => {
    timeOnTheWeb++;
    document.body.textContent = `Na tej stronie jesteś już ${timeOnTheWeb} sekund!`
  };

  return relayingFunction;
};

let variablePassedFromTheMainFunction = timer;

setInterval(variablePassedFromTheMainFunction(), 1000);