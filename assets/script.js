const holy = document.querySelector("#btn");
const here = document.querySelector("#place");
const spot = document.querySelector("#title");
let option = ["Matthew", "Mark", "Luke", "John"];
let book = option[Math.floor(Math.random() * option.length)];
let chapter = Math.floor(Math.random() * 10);
let verse = Math.floor(Math.random() * 10);

const inputHandler = function (event) {
  event.preventDefault();
  // let verse = holyInput.value;
  getHoly();
};

function getHoly() {
  let requestUrl =
    "https://bible-api.com/" + book + " " + chapter + ":" + verse + "";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      holy.setAttribute("style", "display: none");

      // const ref = document.createAttribute("p");
      const verse = document.createElement("p");

      // ref.textContent = data.reference;
      verse.textContent = data.reference + '"' + data.text + '"';

      // spot.append(ref);
      here.appendChild(verse);
    });
}

holy.addEventListener("click", inputHandler);
