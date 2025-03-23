document.getElementById("intro").style.backgroundColor = "#f2c556";
document.querySelector("#intro em").style.backgroundColor = "#acbfcc";
document.querySelector("#intro em").textContent = "USS Voyager Starship";

let img = document.createElement("img");

img.src = "https://bit.ly/3RfG4sY";

img.alt = "Starship Voyager";

img.style.width = "300px"; 
img.style.display = "block";
img.style.margin = "10px auto";
img.id="ship"
img.className = "rounded"

document.getElementById("starship").appendChild(img);