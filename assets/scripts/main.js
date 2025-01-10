document.getElementById("them").onclick = () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
  } else {
    document.body.classList.add("dark-mode");
  }
};

let toggel = document.getElementById("toggel");
toggel.onclick = () => {
  if (document.getElementById("ul").classList.contains("hidden")) {
    document.getElementById("ul").classList.remove("hidden");
  } else {
    document.getElementById("ul").classList.add("hidden");
  }
};
