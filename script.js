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
