// Mendapatkan elemen navbar
let navbar = document.querySelector("ul");

// Mendapatkan semua elemen tautan (link) di dalam navbar
let links = navbar.getElementsByTagName("a");

// Menambahkan event listener untuk scroll
window.addEventListener("scroll", function () {
  // Mendapatkan posisi scroll saat ini
  let currentScrollPos = document.documentElement.scrollTop;

  // Loop melalui setiap elemen tautan
  for (let i = 0; i < links.length; i++) {
    let link = links[i];
    let sectionId = link.getAttribute("href");

    // Mendapatkan elemen section dengan ID yang sesuai
    let section = document.querySelector(sectionId);

    // Memeriksa apakah elemen section ada dan apakah scroll berada di dalamnya
    if (
      section &&
      section.offsetTop <= currentScrollPos &&
      section.offsetTop + section.offsetHeight > currentScrollPos
    ) {
      // Mengatur teks pada tautan menjadi bold
      link.style.fontWeight = "bold";
      link.style.color = "white";
    } else {
      // Mengatur teks pada tautan menjadi normal
      link.style.fontWeight = "normal";
    }
  }
});
