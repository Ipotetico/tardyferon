const sil = document.querySelector(".sil");

const klawiszki = document.querySelectorAll(".kulka");

const overlay = document.querySelector(".overlay");

const who = document.querySelector(".who");

const icons = document.querySelector(".icons");

console.log(icons);

// who.addEventListener("touchstart", () => {
//   who.classList.toggle("active");
// });

const tardyFol = document.querySelector(".tardyFol");

const dawkowanie2 = tardyFol.querySelector(".dawkowanie");

tardyFol.addEventListener("touchstart", () => {
  tardyFol.classList.toggle("active");
  icons.classList.toggle("active");
  dawkowanie2.classList.toggle("active");
  overlay.classList.toggle("active");
});

const tardyLogo = document.querySelector(".tardyLogo");

const dawkowanie1 = tardyLogo.querySelector(".dawkowanie");

tardyLogo.addEventListener("touchstart", () => {
  tardyLogo.classList.toggle("active");
  dawkowanie1.classList.toggle("active");
  overlay.classList.toggle("active");
  icons.classList.toggle("active");
});

// =====   BIODOSTEPNOSC   =====

const bio = document.getElementById("bio");

const closeBio = bio.querySelector(".close");

const wykresBio = bio.querySelector(".wykres");

const btnBio = document.getElementById("btnBio");

btnBio.addEventListener("touchstart", () => {
  bio.classList.add("active");
  overlay.classList.add("active");
  wykresBio.classList.add("active");
});

closeBio.addEventListener("touchstart", () => {
  bio.classList.remove("active");
  overlay.classList.remove("active");
  wykresBio.classList.remove("active");
});

// =====   80mg   =====

const btn80mg = document.getElementById("btn80mg");

console.log(btn80mg);

const page80mg = document.getElementById("mg");

console.log(page80mg);

const close80mg = page80mg.querySelector(".close");

console.log(close80mg);

const svg80mg = page80mg.querySelector("svg");

const wykres80mg = page80mg.querySelector(".wykres");

btn80mg.addEventListener("touchstart", () => {
  page80mg.classList.add("active");
  overlay.classList.add("active");
  svg80mg.classList.add("active");
  wykres80mg.classList.add("active");
});

close80mg.addEventListener("touchstart", () => {
  page80mg.classList.remove("active");
  overlay.classList.remove("active");
  svg80mg.classList.remove("active");
  wykres80mg.classList.remove("active");
});

// =====   TOLERANCJA    =====

const btnToler = document.getElementById("btnToler");

const change = document.querySelector(".change");

const joint = document.querySelector(".joint");

const container1 = document.querySelector(".container1");

const wykres1 = container1.querySelector(".wykres");

const container2 = document.querySelector(".container2");

const wykres2 = container2.querySelector(".wykres");

const toler = document.getElementById("toler");

const closeToler = joint.querySelector(".close");

btnToler.addEventListener("touchstart", () => {
  joint.classList.add("active");
  toler.classList.add("active");
  wykres1.classList.add("active");
  overlay.classList.add("active");
});

closeToler.addEventListener("touchstart", () => {
  joint.classList.remove("active");
  toler.classList.remove("active");
  wykres1.classList.remove("active");
  overlay.classList.remove("active");
});

change.addEventListener("touchstart", () => {
  change.classList.toggle("active");
  container1.classList.toggle("active");
  container2.classList.toggle("active");
  wykres1.classList.toggle("active");
  wykres2.classList.toggle("active");
});

console.log(btnToler);

// =====   NIEDOBOR ZELAZA   =====

const btnNiedobor = document.getElementById("btnNiedobor");

const niedobor = document.getElementById("niedobor");

const closeNiedobor = niedobor.querySelector(".close");

// const fotkiNiedobor = niedobor.querySelector(".fotkiOstatnie");

const fotki = document.querySelectorAll(".fotka");
console.log(fotki);

btnNiedobor.addEventListener("touchstart", () => {
  niedobor.classList.add("active");
  overlay.classList.add("active");

  for (let i = 0; i < fotki.length; i++) {
    setTimeout(function () {
      fotki[i].classList.add("active");
    }, 2000 * i);
  }
});

closeNiedobor.addEventListener("touchstart", () => {
  niedobor.classList.remove("active");
  overlay.classList.remove("active");

  for (let el of fotki) {
    el.classList.remove("active");
  }
});

// =====   SiL  =====

const silBtn = document.querySelector(".silBtn");

console.log(silBtn);

const stronaSil = document.getElementById("sil");

const closeSil = stronaSil.querySelector(".close");

silBtn.addEventListener("touchstart", () => {
  stronaSil.classList.add("active");
  overlay.classList.add("active");
});

closeSil.addEventListener("touchstart", () => {
  stronaSil.classList.remove("active");
  overlay.classList.remove("active");
});

// ===== WHO =====

const whoSite = document.getElementById("who");

const ptaszki = whoSite.querySelectorAll(".ptaszek");

const closeWHO = whoSite.querySelector(".close");

who.addEventListener("touchstart", () => {
  whoSite.classList.add("active");

  const timeoutId = setTimeout(() => {
    for (let i = 0; i < ptaszki.length; i++) {
      setTimeout(() => {
        ptaszki[i].classList.add("active");
      }, 2000 * i);
    }
  }, 1000);

  return () => {
    clearTimeout(timeoutId);
  };
});

closeWHO.addEventListener("touchstart", () => {
  for (let el of ptaszki) {
    el.classList.remove("active");
  }
  whoSite.classList.remove("active");
});
