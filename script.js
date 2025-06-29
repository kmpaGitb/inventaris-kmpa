const URL = "https://script.google.com/macros/s/AKfycbyelcy47veqaLdCtTSQwdI3bBSyVvAmkUGviVrJ5pMJwkNN8_Mp2l33k-w1zmtphPOe/exec"; 

function formatTanggal(tanggal) {
  if (!tanggal) return '';
  const d = new Date(tanggal);
  if (isNaN(d.getTime())) return tanggal; // bukan tanggal valid, tampilkan apa adanya
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0'); // bulan dimulai dari 0
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

fetch(URL)
  .then(response => response.json())
  .then(data => {
    const tbody = document.getElementById("tabel-alat");
    data.forEach((item, index) => {
      const row = `
        <tr>
          <td>${item[0]}</td>
          <td>${item[1]}</td>
          <td>${item[2]}</td>
          <td>${item[3]}</td>
          <td>${item[4]}</td>
          <td>${formatTanggal(item[5])}</td>
          <td>${formatTanggal(item[6])}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  })
  .catch(error => {
    console.error("Gagal mengambil data:", error);
  });
