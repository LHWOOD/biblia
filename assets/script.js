const holy = document.querySelector("#btn");
const here = document.querySelector("#place");

const inputHandler = function (event) {
  event.preventDefault();
  // let verse = holyInput.value;
  getHoly();
};

function getHoly() {
  let requestUrl = "https://bible-api.com/john 3:16";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let verse = document.createElement("p");
      verse.textContent = data.text;
      here.appendChild(verse);
    });
}

holy.addEventListener("click", inputHandler);
