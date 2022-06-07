const root = document.querySelector("#root");
console.log("otomatis kompile"); // Clock App

function tick() {
  const element = /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement("h1", null, "Jam Sekarang"),
    new Date().toLocaleTimeString()
  );
  ReactDOM.render(element, root);
}

tick();
setInterval(function () {
  tick();
}, 1000);
