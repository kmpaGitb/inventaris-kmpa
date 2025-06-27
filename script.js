const URL = "https://script.google.com/macros/s/AKfycbw-7ZW5gi-lKKvvqBPYpvX2d6H_2NMRjM5T1mWwDQ37XIP2hgPDIHUHcVOPEeGaDoRO/exec"; 

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
