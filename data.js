function cariWisata() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const cards = document.querySelectorAll(".list .card");

  let adaHasil = false;

  cards.forEach(card => {
    const nama = card.querySelector("h3").innerText.toLowerCase();

    if (nama.includes(filter)) {
      card.style.display = "block";
      adaHasil = true;
    } else {
      card.style.display = "none";
    }
  });

  // Optional: kalau mau tampil pesan "tidak ditemukan"
  let pesan = document.getElementById("pesan-tidak-ditemukan");

  if (!pesan) {
    pesan = document.createElement("p");
    pesan.id = "pesan-tidak-ditemukan";
    pesan.style.textAlign = "center";
    pesan.style.marginTop = "20px";
    pesan.style.fontWeight = "bold";
    document.querySelector(".list").after(pesan);
  }

  if (!adaHasil) {
    pesan.innerText = "Tempat wisata tidak ditemukan.";
  } else {
    pesan.innerText = "";
  }
}
