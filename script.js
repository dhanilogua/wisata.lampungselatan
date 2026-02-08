const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (wisata[id]) {
  document.getElementById("nama").innerText = wisata[id].nama;
  document.getElementById("tiket").innerText = wisata[id].tiket;
  document.getElementById("lokasi").innerText = wisata[id].lokasi;
  document.getElementById("gambar").src = wisata[id].gambar;
  document.getElementById("deskripsi").innerText = wisata[id].deskripsi
} else {
  document.body.innerHTML = "<h2>Data wisata tidak ditemukan</h2>";
}

// biar animasi langsung jalan pas halaman kebuka
window.addEventListener("load", () => {
  document.querySelectorAll(".animate").forEach(el => {
    el.style.opacity = "1";
  });
});
