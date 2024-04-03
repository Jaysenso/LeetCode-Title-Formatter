"use strict";

let userInput = document.getElementById("userInput");
let form = document.getElementById("formatterForm");
let languageSelector = document.getElementById("languageSelector");
let result = document.getElementById("resultText");

const languageDict = {
  JavaScript: "js",
  Java: "java",
  Python: "py",
  C: "c",
  SQL: "sql",
};

form.addEventListener("submit", function (event) {
  result.textContent = "";
  event.preventDefault();
  const title = userInput.value.trim().replace(/[.]/g, "");
  const selectedLanguage = languageSelector.value;
  const languageExtension = languageDict[selectedLanguage];

  let formattedTitle = title.replace(/[.]/g, "");
  formattedTitle = title.replace(/[\s+]/g, "_");
  result.textContent = formattedTitle + "." + languageExtension;
});
