const root = document.querySelector("#root");

console.log("test");

// Clock App
function tick() {
  const element = (
    <div>
      <h1>Jam Sekarang</h1>
      {new Date().toLocaleTimeString()}
    </div>
  );

  ReactDOM.render(element, root);
}

tick();

setInterval(function () {
  tick();
}, 1000);
