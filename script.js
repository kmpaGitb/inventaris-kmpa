const URL = "URL_WEB_APP_KAMU"; // Ganti dengan link web app kamu

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
          <td>${item[5]}</td>
          <td>${item[6]}</td>
          <td>${item[7]}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  })
  .catch(error => {
    console.error("Gagal mengambil data:", error);
  });
