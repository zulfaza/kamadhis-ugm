document.addEventListener("scroll", (e) => {
  let navbar = document.querySelector("nav");
  let header = document.querySelector("header");
  //   console.log(header.offsetHeight);
  //   console.log(window.scrollY);
  if (navbar.id === "nav-pengurus") {
    return;
  }

  if (header.offsetHeight < window.scrollY) {
    navbar.classList.add("shadow");
    return navbar.classList.add("bg-primary");
  }
  navbar.classList.remove("shadow");
  navbar.classList.remove("bg-primary");
});

AOS.init();
