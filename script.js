document.querySelector(".logout-button").onclick = () => confirm("Apakah anda yakin ingin keluar?");

// PAGING
const pages = {
  home: `
  <section class="hero">
    <div class="container">
      <h1>Selamat datang di Food Blog!</h1>
      <p>Temukan berbagai makanan dan minuman favoritmu di sini.</p>
      <div class="hero-btn-wrapper">
        <a href="app.html?page=foods" class="btn">Jelajai Makanan</a>
        <a href="app.html?page=drinks" class="btn btn-outline">Jelajai Minuman</a>
      </div>
    </div>
  </section>
  <main>
    <div class="container">
      <article>
        <h1>Kerja Kami</h1>
        <p>
          Kami adalah sebuah tim yang berdedikasi tinggi dalam memberikan informasi seputar makanan dan minuman. Kami berusaha untuk memberikan informasi yang
          akurat dan terpercaya kepada para pengunjung kami. Kami senantiasa menghadirkan rekomendasi terbaru, tips menarik, dan ulasan terkini seputar
          kuliner. Dengan berbagai macam menu yang kami sajikan, kami ingin memastikan bahwa setiap pengunjung dapat menemukan makanan dan minuman favorit
          mereka di sini. Jadi, jangan ragu untuk menjelajahi berbagai menu yang kami sajikan!
        </p>
        <img src="assets/imgs/2.webp" alt="Foog Blog" class="figure" />
      </article>
      <article>
        <h1>Kenapa Pilih Kami</h1>
        <p>
          Kami memiliki berbagai macam makanan dan minuman yang bisa kamu pilih. Kami juga memberikan informasi yang akurat dan terpercaya kepada para
          pengunjung kami. Selain itu, kami senantiasa menghadirkan rekomendasi terbaru dan tips menarik seputar kuliner. Jadi, jangan ragu untuk menjelajahi
          berbagai menu yang kami sajikan!
        </p>
        <img src="assets/imgs/3.webp" alt="Foog Blog" class="figure" />
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
    // case "contact":
    //   handlePage("Kontak", 2, "Contact Food Blog!");
    //   break;
    case "list":
      handlePage("Daftar Menu", 3, pages.list);
      break;
    case "foods":
      handlePage("Makanan", 4, pages.foods);
      break;
    case "drinks":
      handlePage("Minuman", 5, pages.drinks);
      break;
    // default:
    //   handlePage("", undefined, "Page not found!");
    //   break;
  }
});

// FUNCTIONS
function handlePage(pageTitle, pageNumber, content) {
  document.querySelector("title").innerText = `Food Blog | ${pageTitle}`;
  document.querySelector(".page-title").innerText = pageTitle;
  document.querySelectorAll(".navbar ul li a")[pageNumber].classList.add("active");
  document.querySelector(".content").innerHTML = content;
}

// Contact
const form = document.getElementById("contactForm");
const fullName = document.getElementById("input-name");
const email = document.getElementById("input-email");
const subject = document.getElementById("input-subject");
const mess = document.getElementById("input-message");

function sendEmail(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  const bodyMessage = `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden;">
    <div style="background-color: #007bff; color: #ffffff; padding: 20px; text-align: center;">
      <h2 style="margin: 0; font-size: 24px;">Contact Form Submission</h2>
    </div>
    <div style="padding: 20px; color: #333333;">
      <p style="margin-bottom: 10px; font-size: 18px;"><strong>Nama:</strong> ${fullName.value}</p>
      <p style="margin-bottom: 10px; font-size: 18px;"><strong>Email:</strong> ${email.value}</p>
      <p style="margin-bottom: 10px; font-size: 18px;"><strong>Pesan:</strong> ${mess.value}</p>
    </div>
    <div style="background-color: #007bff; color: #ffffff; text-align: center; padding: 10px;">
      <span style="font-size: 14px;">&copy; KELOMPOK 3</span>
    </div>
  </div>
</div>
  `;

  Email.send({
    SecureToken: "f30bd810-90ca-4533-abfd-eefc6afbacaf",
    Host: "smtp.elasticemail.com",
    Username: "ahmadrezaauliasiregar@gmail.com",
    Password: "D4008A897D300253CD55C0CC6571E1EAF883",
    To: 'ahmadrezaauliasiregar@gmail.com',
    From: "ahmadrezaauliasiregar@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    message => {
      if (message === 'OK') {
        alert("oke, terimakasih akan kami perbaiki🙏");
        window.location.href = 'app.html?page=contact'; // Ganti dengan URL halaman kontak Anda
      } else {
        alert("maaf coba lagi");
        window.location.href = 'app.html?page=contact'; // Ganti dengan URL halaman kontak Anda
      }
    }
  ).catch(
    error => {
      alert("maaf ada coba lagi");
      console.error("Error:", error);
      window.location.href = 'app.html?page=contact'; // Ganti dengan URL halaman kontak Anda
    }
  );
}

form.addEventListener("submit", sendEmail);


document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Food Blog || :v";
  } else {
    document.title = "Please Come Back! 😔";
  }
});