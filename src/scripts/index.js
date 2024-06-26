import "regenerator-runtime";
import "../styles/main.css";
import "../styles/mobview.css";
import "./components/main.js";


const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});

import("../public/data/DATA.json").then(({ default: jsonData }) => {
  console.log(jsonData);
  let inidata = jsonData["restaurants"];
  let dataList = "";
  inidata.forEach(function (data) {
    dataList += `
            <div class="list_item">
                <img class="list_item_thumb" src="${data["pictureId"]}" alt="${
      data["name"]
    }" title="${data["name"]}">
                <div class="list_item_content">
                    <p class="list_item_rating">
                        Rating : 
                        <a href="#" class="list_item_rating_value">${
                          data["rating"]
                        }</a>
                <div class="city">${data["city"]}</div>

                    </p>
                    <h1 class="list_item_title"><a href="#">${
                      data["name"]
                    }</a></h1>
                    <div class="list_item_desc">${data["description"].slice(
                      0,
                      150
                    )}...</div>
                </div>
            </div>
            `;
  });
  document.querySelector("#list-data").innerHTML = dataList;
});

// Menu

