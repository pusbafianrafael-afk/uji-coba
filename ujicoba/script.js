function openLightbox(src) {
  window.open(src, "_blank");
}

function showSkill(skill) {
  const text = document.getElementById("skillText");
  const btns = document.querySelectorAll(".skill-btn");

  btns.forEach(btn => btn.classList.remove("active"));

  if (skill === "html") {
    text.innerText = "Saya mampu membuat struktur halaman website menggunakan HTML.";
    btns[0].classList.add("active");
  } else if (skill === "css") {
    text.innerText = "Saya mampu mengatur tampilan website menggunakan CSS.";
    btns[1].classList.add("active");
  } else if (skill === "bootstrap") {
    text.innerText = "Saya mampu menggunakan Bootstrap.";
    btns[2].classList.add("active");
  } else if (skill === "js") {
    text.innerText = "Saya mampu menggunakan JavaScript untuk website interaktif.";
    btns[3].classList.add("active");
  }
}
