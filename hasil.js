const params = new URLSearchParams(window.location.search);
const keyword = params.get("q")?.toLowerCase();

const hasil = wisata.filter(item =>
  item.nama.toLowerCase().includes(keyword)
);

const container = document.getElementById("hasil");

if (hasil.length === 0) {
  container.innerHTML = "<p>Data tidak ditemukan</p>";
} else {
  hasil.forEach(item => {
    container.innerHTML += `
      <a href="detail.html?id=${item.id}" class="card-link">
        <div class="card">
          <img src="${item.gambar}">
          <h3>${item.nama}</h3>
          <p>${item.lokasi}</p>
        </div>
      </a>
    `;
  });
}
