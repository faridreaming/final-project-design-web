document.querySelector(".logout-button").onclick = () => confirm("Apakah anda yakin ingin keluar?");

// PAGING
const pages = {
  home: `
  <section class="hero">
    <div class="container">
      <h1>Selamat datang di Food Blog!</h1>
      <p>Temukan berbagai makanan dan minuman favoritmu di sini.</p>
      <div class="hero-btn-wrapper">
        <a href="app.html?page=foods" class="btn">Jelajahi Makanan</a>
        <a href="app.html?page=drinks" class="btn btn-outline">Jelajahi Minuman</a>
      </div>
    </div>
  </section>
  <main>
    <div class="container">
      <article>
        <h1>Kerja Kami</h1>
        <img src="assets/imgs/2.webp" alt="Foog Blog" class="figure" />
        <p>
          Kami adalah sebuah tim yang berdedikasi tinggi dalam memberikan informasi seputar makanan dan minuman. Kami berusaha untuk memberikan informasi yang
          akurat dan terpercaya kepada para pengunjung kami. Kami senantiasa menghadirkan rekomendasi terbaru, tips menarik, dan ulasan terkini seputar
          kuliner. Dengan berbagai macam menu yang kami sajikan, kami ingin memastikan bahwa setiap pengunjung dapat menemukan makanan dan minuman favorit
          mereka di sini. Jadi, jangan ragu untuk menjelajahi berbagai menu yang kami sajikan!
        </p>
      </article>
      <article>
        <h1>Kenapa Pilih Kami</h1>
        <img src="assets/imgs/3.webp" alt="Foog Blog" class="figure" />
        <p>
          Kami memiliki berbagai macam makanan dan minuman yang bisa kamu pilih. Kami juga memberikan informasi yang akurat dan terpercaya kepada para
          pengunjung kami. Selain itu, kami senantiasa menghadirkan rekomendasi terbaru dan tips menarik seputar kuliner. Jadi, jangan ragu untuk menjelajahi
          berbagai menu yang kami sajikan!
        </p>
      </article>
    </div>
  </main>
  `,
  about: `
  <main>
    <div class="container">
      <div class="card-container">
        <div class="card">
          <img src="assets/imgs/profile-reza.webp" alt="Profile Reza" class="profile-img" />
          <h2>Ahmad Reza Aulia Siregar</h2>
          <p>
            I am Ahmad Reza Aulia Siregar. A Web developer, and Junior Pentester. I am currently learning frontend (HTML, CSS and JS) and learning Backend
            (PHP). I am in my 2nd semester at Politeknik Negeri Medan.
          </p>
          <div class="icon-wrapper">
            <a href="https://github.com/RezaAS14" target="_blank"><img src="assets/icons/github.svg" alt="GitHub" /></a>
            <a href="mailto:ahmadrezaauliasiregar@gmail.com" target="_blank">
              <img src="assets/icons/gmail.svg" alt="Mail" />
            </a>
          </div>
        </div>
        <div class="card">
          <img src="assets/imgs/profile-shiddiq.webp" alt="Profile Shiddiq" class="profile-img" />
          <h2>M. Sibawaihi Shiddiq Tarigan</h2>
          <p>
            I'm Shiddiq. With 5 years of experience as a Full Stack Developer, I specialize in creating and optimizing web applications. From front-end design
            to back-end functionality, I handle every aspect of coding with expertise. Based in North Sumatra, I am adept at delivering comprehensive
            solutions for diverse web development needs.
          </p>
          <div class="icon-wrapper">
            <a href="https://github.com/FORDIDODI" target="_blank"><img src="assets/icons/github.svg" alt="GitHub" /></a>
            <a href="mailto:tibbitarigan@gmail.com" target="_blank">
              <img src="assets/icons/gmail.svg" alt="Mail" />
            </a>
          </div>
        </div>
        <div class="card">
          <img src="assets/imgs/profile-farid.webp" alt="Profile Farid" class="profile-img" />
          <h2>Muhammad Farid Yamin</h2>
          <p>
            Hey there! I'm Muhammad Farid Yamin, studying Software Engineering and working as a web developer. I'm from North Sumatra, Indonesia. I actively
            participate in the programming community and always stay up to date with the latest technological developments. I have learned a lot of new
            technologies in the last few years on the Internet.
          </p>
          <div class="icon-wrapper">
            <a href="https://github.com/faridreaming" target="_blank"><img src="assets/icons/github.svg" alt="GitHub" /></a>
            <a href="mailto:muhammad.farid.yamin@gmail.com" target="_blank">
              <img src="assets/icons/gmail.svg" alt="Mail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
  `,
  contact: `
  <main>
    <div class="container">
      <div class="contact">
        <div class="contact-text">
          <h1>Kontak Kami</h1>
          <p>Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami. Kami akan dengan senang hati membantu Anda.</p>
          <a href="https://wa.me/6282273197018" class="btn" target="_blank">Hubungi Kami</a>
        </div>
        <form class="contact-form">
          <h2>Kirim Pertanyaan/Keluhan</h2>
          <p>Kami akan menghubungi anda 1x24 jam setelah data anda kami terima.</p>
          <div class="input-group-wrapper">
            <div class="input-group">
              <label for="name"><h3>Nama Kamu:</h3></label>
              <input type="text" id="name" name="name" placeholder="Nama Lengkap" required />
            </div>
            <div class="input-group">
              <label for="email"><h3>Alamat Email:</h3></label>
              <input type="email" id="email" name="email" placeholder="someone@example.com" required />
            </div>
            <div class="input-group">
              <label for="subject"><h3>Subject Masalah</h3></label>
              <input type="text" id="subject" name="subject" placeholder="Subject" required />
            </div>
            <div class="input-group">
              <label for="keluhan"><h3>Tuliskan Keluhan:</h3></label>
              <textarea id="keluhan" name="keluhan" placeholder="Keluhan Anda" rows="8" required></textarea>
            </div>
            <button class="btn">Kirim Pesan</button>
          </div>
        </form>
      </div>
    </div>
  </main>
  `,
  list: `
  <main>
    <div class="container">
      <div class="list food-list">
        <h1>Daftar Makanan</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Stok</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nasi Goreng</td>
              <td>Rp 20,000</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Sate Ayam</td>
              <td>Rp 25,000</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Rendang</td>
              <td>Rp 30,000</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Gado-Gado</td>
              <td>Rp 15,000</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Bakso</td>
              <td>Rp 18,000</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Soto Ayam</td>
              <td>Rp 22,000</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="list drink-list">
        <h1>Daftar Minuman</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Stok</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cendol</td>
              <td>Rp 10,000</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Es Buah</td>
              <td>Rp 15,000</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Es Kelapa Muda</td>
              <td>Rp 12,000</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Es Teh Manis</td>
              <td>Rp 5,000</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Jus Buah</td>
              <td>Rp 18,000</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Es Pisang Ijo</td>
              <td>Rp 20,000</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
  `,
  foods: `
  <main>
    <div class="container">
      <div class="card-container card-menu">
        <div class="card">
          <img src="assets/imgs/nasi-goreng.webp" alt="Food" />
          <div class="card-content">
            <h3>Nasi Goreng</h3>
            <p>
              Nasi goreng adalah makanan yang terdiri dari nasi yang digoreng dan dicampur dengan bumbu-bumbu tertentu seperti bawang merah, bawang putih,
              cabai, dan kecap.
            </p>
            <a href="assets/imgs/nasi-goreng.webp" class="btn">Lihat Detail</a>
          </div>
        </div>
        <div class="card">
          <img src="assets/imgs/sate-ayam.webp" alt="Food" />
          <div class="card-content">
            <h3>Sate Ayam</h3>
            <p>
              Sate ayam adalah makanan yang terdiri dari potongan daging ayam yang ditusuk dengan tusukan bambu, kemudian dipanggang dengan arang dan
              disajikan dengan bumbu kacang.
            </p>
            <a href="assets/imgs/sate-ayam.webp" class="btn">Lihat Detail</a>
          </div>
        </div>
        <div class="card">
          <img src="assets/imgs/rendang.webp" alt="Food" />
          <div class="card-content">
            <h3>Rendang</h3>
            <p>
              Rendang adalah masakan daging sapi yang berasal dari Minangkabau, Sumatera Barat, Indonesia. Masakan ini menggunakan daging sapi yang dimasak
              dengan santan dan bumbu rempah-rempah yang kaya.
            </p>
            <a href="assets/imgs/rendang.webp" class="btn">Lihat Detail</a>
          </div>
        </div>
        <div class="card">
          <img src="assets/imgs/gado-gado.webp" alt="Food" />
          <div class="card-content">
            <h3>Gado-Gado</h3>
            <p>
              Gado-gado adalah makanan khas Indonesia yang terdiri dari sayuran yang direbus dan dicampur dengan bumbu kacang. Biasanya gado-gado disajikan
              dengan telur rebus dan kerupuk.
            </p>
            <a href="assets/imgs/gado-gado.webp" class="btn">Lihat Detail</a>
          </div>
        </div>
        <div class="card">
          <img src="assets/imgs/bakso.webp" alt="Food" />
          <div class="card-content">
            <h3>Bakso</h3>
            <p>
              Bakso adalah makanan yang terdiri dari bola daging yang biasanya terbuat dari daging sapi yang dicampur dengan tepung tapioka. Bakso biasanya
              disajikan dengan kuah kaldu sapi dan mie.
            </p>
            <a href="assets/imgs/bakso.webp" class="btn">Lihat Detail</a>
          </div>
        </div>
        <div class="card">
          <img src="assets/imgs/soto-ayam.webp" alt="Food" />
          <div class="card-content">
            <h3>Soto Ayam</h3>
            <p>
              Soto ayam adalah makanan khas Indonesia yang terdiri dari kuah kaldu ayam yang disajikan dengan potongan daging ayam, mie, telur rebus, dan
              bumbu-bumbu lainnya.
            </p>
            <a href="assets/imgs/soto-ayam.webp" class="btn">Lihat Detail</a>
          </div>
        </div>
      </div>
    </div>
  </main>
  `,
  drinks: `
  <main>
    <div class="container">
      <div class="card-container card-menu">
        <div class="card">
          <img src="assets/imgs/cendol.webp" alt="Food" />
          <div class="card-content">
            <h3>Cendol</h3>
            <p>
              Cendol adalah minuman tradisional yang terbuat dari campuran tepung beras, tepung kanji, dan air. Minuman ini biasanya disajikan dengan santan
              dan gula merah cair.
            </p>
            <a href="assets/imgs/cendol.webp" class="btn">Lihat Detail</a>
          </div>
        </div>
        <div class="card">
          <img src="assets/imgs/es-buah.webp" alt="Food" />
          <div class="card-content">
            <h3>Es Buah</h3>
            <p>
              Es buah adalah minuman yang terbuat dari campuran berbagai macam buah-buahan yang dicampur dengan sirup, susu, dan es serut. Minuman ini sangat
              cocok untuk menemani di siang hari.
            </p>
            <a href="assets/imgs/es-buah.webp" class="btn">Lihat Detail</a>
          </div>
        </div>
        <div class="card">
          <img src="assets/imgs/es-kelapa-muda.webp" alt="Food" />
          <div class="card-content">
            <h3>Es Kelapa Muda</h3>
            <p>
              Es kelapa muda adalah minuman yang terbuat dari daging kelapa muda yang dicampur dengan air kelapa dan gula merah. Minuman ini sangat cocok
              untuk menemani di siang hari.
            </p>
            <a href="assets/imgs/es-kelapa-muda.webp" class="btn">Lihat Detail</a>
          </div>
        </div>
        <div class="card">
          <img src="assets/imgs/es-teh.webp" alt="Food" />
          <div class="card-content">
            <h3>Es Teh Manis</h3>
            <p>Es teh manis adalah minuman yang terbuat dari campuran teh, gula, dan es serut. Minuman ini sangat cocok untuk menemani di siang hari.</p>
            <a href="assets/imgs/es-teh.webp" class="btn">Lihat Detail</a>
          </div>
        </div>
        <div class="card">
          <img src="assets/imgs/jus-buah.webp" alt="Food" />
          <div class="card-content">
            <h3>Jus Buah</h3>
            <p>
              Jus buah adalah minuman yang terbuat dari campuran berbagai macam buah-buahan yang dicampur dengan air dan gula. Minuman ini sangat cocok untuk
              menemani di siang hari.
            </p>
            <a href="assets/imgs/jus-buah.webp" class="btn">Lihat Detail</a>
          </div>
        </div>
        <div class="card">
          <img src="assets/imgs/es-pisang-ijo.webp" alt="Food" />
          <div class="card-content">
            <h3>Es Pisang Ijo</h3>
            <p>
              Es pisang ijo adalah makanan khas Makassar yang terbuat dari pisang yang dibalut dengan adonan tepung beras yang dicampur dengan santan dan gula
              merah.
            </p>
            <a href="assets/imgs/es-pisang-ijo.webp" class="btn">Lihat Detail</a>
          </div>
        </div>
      </div>
    </div>
  </main>
  `,
};

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  switch (page) {
    case "home":
      handlePage("Beranda", 0, pages.home);
      break;
    case "about":
      handlePage("Tentang Kami", 1, pages.about);
      break;
    case "contact":
      handlePage("Kontak", 2, pages.contact);
      break;
    case "list":
      handlePage("Daftar Menu", 3, pages.list);
      break;
    case "foods":
      handlePage("Makanan", 4, pages.foods);
      break;
    case "drinks":
      handlePage("Minuman", 5, pages.drinks);
      break;
    default:
      handlePage("Beranda", 0, pages.home);
      break;
  }
});

// FUNCTIONS
function handlePage(pageTitle, pageNumber, content) {
  document.title = `Food Blog | ${pageTitle}`;
  document.querySelector(".page-title").innerText = pageTitle;
  document.querySelectorAll(".navbar ul li a")[pageNumber].classList.add("active");
  document.querySelector(".content").innerHTML = content;
  const contactForm = document.querySelector(".contact-form");
  if (contactForm)
    contactForm.addEventListener("submit", () => {
      alert("Terima kasih telah menghubungi kami!");
    });
}

// TOGGLE NAVBAR
const toggleNavbar = document.querySelector(".toggle-navbar");
const navbar = document.querySelector(".navbar");

toggleNavbar.addEventListener("click", () => {
  navbar.classList.toggle("active");
  toggleNavbar.src = navbar.classList.contains("active") ? "assets/icons/close.svg" : "assets/icons/menu.svg";
});

// TOGGLE DARK MODE
const body = document.body;
const toggleDarkMode = document.querySelector(".toggle-dark-mode");
const darkMode = localStorage.getItem("darkMode");

if (darkMode === "true") {
  body.classList.add("dark");
  toggleDarkMode.src = "assets/icons/light-mode.svg";
} else {
  toggleDarkMode.src = "assets/icons/dark-mode.svg";
}

toggleDarkMode.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDarkMode = body.classList.contains("dark");
  toggleDarkMode.src = isDarkMode ? "assets/icons/light-mode.svg" : "assets/icons/dark-mode.svg";
  localStorage.setItem("darkMode", isDarkMode);
});
