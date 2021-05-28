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

document.querySelector("footer").innerHTML = `
<div class="container">
  <div class="row gap-4 gap-md-0">
      <div class="col-md-4">
          <h4>Informasi</h4>
          <div class="mt-4">
              <ul class="list-unstyled">
                  <li>
                      <a href="./">Beranda</a>
                  </li>
                  <li>
                      <a href="./">Agenda</a>
                  </li>
                  <li>
                      <a href="./Tentang.html">Tentang</a>
                  </li>
                  <li>
                      <a href="./sospeng.html">Sekertaris</a>
                  </li>
                  <li>
                      <a href="./sospeng.html">Bendahara</a>
                  </li>
                  <li>
                      <a href="./sospeng.html">Sosial dan Pengabdian
                          Masyarakat</a>
                  </li>
                  <li>
                      <a href="./sospeng.html">Dhamma dan Pendidikan</a>
                  </li>
                  <li>
                      <a href="./Eka-citta.html">Eka-citta</a>
                  </li>
              </ul>
          </div>
      </div>
      <div class="col-md-4">
          <h4>Kontak Kami</h4>
          <div class="mt-4">
              <ul class="list-unstyled">
                  <li>
                      <a href="./">Email : Kamadhis.ukm@mail.ugm.ac.id</a>
                  </li>
                  <li>
                      <a href="./">Whatsapp : 08116665040 (Sylvia)</a>
                  </li>
              </ul>
          </div>
      </div>
      <div class="col-md-4 map">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.0484989550056!2d110.3746219977776!3d-7.77336747781583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a584a5a811fc5%3A0xd8c5b1533f76cd95!2sBlk.%20L%2C%20Senolowo%2C%20Sinduadi%2C%20Kec.%20Mlati%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sen!2sid!4v1622043624634!5m2!1sen!2sid"
              width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          <div class="overlay">
              <div class="w-75 position-relative">
                  <h5 class="fw-bold text-white fs-5"> <svg xmlns="http://www.w3.org/2000/svg" width="45"
                          height="45" fill="currentColor" class="icon" viewBox="0 0 16 16">
                          <path
                              d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg> Lokasi Kami</h5>
                  <p class="text-white fw-light px-5">M7A Homestay, Jl. Acasia Sekip UGM Blok L
                      No.1,
                      Senolowo,
                      Yogyakarta
                      55281</p>
              </div>
          </div>
      </div>
  </div>
</div>
`;

document.querySelector("nav").innerHTML = `
<div class="container">
  <a class="navbar-brand" href="./">
      <img src="./Assets/img/kamadhis_NO_BG 1.png" alt="Logo Kamdhis" class="d-inline-block align-text-top">
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Beranda</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="./Tentang.html">tentang</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">proker</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">artikel</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#footer">kontak</a>
          </li>
          <li class="nav-item">
              <a class="nav-link search" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-search" viewBox="0 0 16 16">
                      <path
                          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
              </a>
          </li>
      </ul>
  </div>
</div>
`;

AOS.init();
