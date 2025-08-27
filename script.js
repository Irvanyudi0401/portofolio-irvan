// script.js
fetch("data.json")
  .then(res => {
    if (!res.ok) throw new Error("Gagal mengambil data.json");
    return res.json();
  })
  .then(data => {
    // Profil
    const namaEl = document.getElementById("nama");
    const deskEl = document.getElementById("deskripsi");
    if (namaEl) namaEl.innerText = data.profil?.nama || "-";
    if (deskEl) deskEl.innerText = data.profil?.deskripsi || "";

    // Pendidikan
    const eduEl = document.getElementById("pendidikan");
    if (eduEl && Array.isArray(data.pendidikan)) {
      eduEl.innerHTML = data.pendidikan.map(e =>
        `<li>${e.sekolah} - ${e.jurusan} (${e.tahun})</li>`
      ).join("");
    }

    // Pengalaman
    const expEl = document.getElementById("pengalaman");
    if (expEl && Array.isArray(data.pengalaman)) {
      expEl.innerHTML = data.pengalaman.map(p =>
        `<li>
          <b>${p.posisi}</b> di ${p.instansi} (${p.tahun})<br>
          <span>${p.deskripsi}</span>
        </li>`
      ).join("");
    }

    // Sertifikat
    const certEl = document.getElementById("sertifikat");
    if (certEl && Array.isArray(data.sertifikat)) {
      certEl.innerHTML = data.sertifikat.map(s =>
        `<li>${s.judul} (${s.tahun})</li>`
      ).join("");
    }

    // Proyek
    const projEl = document.getElementById("proyek");
    if (projEl && Array.isArray(data.proyek)) {
      projEl.innerHTML = data.proyek.map(pr =>
        `<div class="proyek-item">
          <img src="${pr.gambar}" alt="${pr.judul}" loading="lazy">
          <p><b>${pr.judul}</b><br><small>${pr.klien}</small></p>
        </div>`
      ).join("");
    }

    // Kontak
    const emailEl = document.getElementById("email");
    const linkedinEl = document.getElementById("linkedin");
    const githubEl = document.getElementById("github");

    if (emailEl) emailEl.innerText = data.kontak?.email || "";
    if (linkedinEl) linkedinEl.href = data.kontak?.linkedin || "#";
    if (githubEl) githubEl.href = data.kontak?.github || "#";
  })
  .catch(err => {
    console.error("Error:", err);
    alert("Gagal memuat data profil. Periksa file data.json");
  });
