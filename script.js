document.querySelector(".logout-button").onclick = () => confirm("Apakah anda yakin ingin keluar?");

// PAGING
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  switch (page) {
    case "home":
      handlePage("Beranda", 0, "Welcome to Food Blog!");
      break;
    case "about":
      handlePage("Tentang Kami", 1, "About Food Blog!");
      break;
    case "contact":
      handlePage("Kontak", 2, "Contact Food Blog!");
      break;
    case "list":
      handlePage("Daftar Menu", 3, "Contact Food Blog!");
      break;
    case "foods":
      handlePage("Makanan", 4, "Contact Food Blog!");
      break;
    case "drinks":
      handlePage("Minuman", 5, "Contact Food Blog!");
      break;
    default:
      handlePage("", undefined, "Page not found!");
      break;
  }
});

// FUNCTIONS
function handlePage(pageTitle, pageNumber, content) {
  document.querySelector("title").innerText = `Food Blog | ${pageTitle}`;
  document.querySelector(".page-title").innerText = pageTitle;
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