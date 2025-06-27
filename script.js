const URL = "https://script.google.com/macros/s/AKfycbzHYbEdcNDe2wL1EuI3elEQtjrMruKXZBwkDphG6Qyl3HOnOfh8jSUPxFOUhmgfsMMB/exec"; 

fetch(URL)
  .then(res => res.json())
  .then(data => {
    const tbody = document.getElementById("tabel-alat");
    data.forEach(barang => {
      const row = `
        <tr>
          <td>${barang.nama}</td>
          <td>${barang.keterangan}</td>
          <td>${barang.lokasi}</td>
          <td>${barang.kuantitas}</td>
          <td>${barang.jumlah_gudang}</td>
        </tr>`;
      tbody.innerHTML += row;
    });
  });
