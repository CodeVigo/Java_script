const form = document.querySelector("form");
//if we get the height value here it will be empty

form.addEventListener("submit", function (e) {
  e.preventDefault();  //to remove the default function of submit api call
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid ${height}`;
  }
  if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
