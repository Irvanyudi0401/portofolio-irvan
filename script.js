fetch("data.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("nama").innerText = data.profil.nama;
    document.getElementById("deskripsi").innerText = data.profil.deskripsi;

    // Pendidikan
    let edu = "";
    data.pendidikan.forEach(e => {
      edu += `<li>${e.sekolah} - ${e.jurusan} (${e.tahun})</li>`;
    });
    document.getElementById("pendidikan").innerHTML = edu;

    // Pengalaman
    let exp = "";
    data.pengalaman.forEach(p => {
      exp += `<li><b>${p.posisi}</b> di ${p.instansi} (${p.tahun})<br>${p.deskripsi}</li>`;
    });
    document.getElementById("pengalaman").innerHTML = exp;

    // Sertifikat
    let cert = "";
    data.sertifikat.forEach(s => {
      cert += `<li>${s.judul} (${s.tahun})</li>`;
    });
    document.getElementById("sertifikat").innerHTML = cert;

    // Proyek
    let proj = "";
    data.proyek.forEach(pr => {
      proj += `
        <div>
          <img src="${pr.gambar}" alt="${pr.judul}">
          <p><b>${pr.judul}</b><br>${pr.klien}</p>
        </div>`;
    });
    document.getElementById("proyek").innerHTML = proj;

    // Kontak
    document.getElementById("email").innerText = data.kontak.email;
    document.getElementById("linkedin").href = data.kontak.linkedin;
    document.getElementById("github").href = data.kontak.github;
  });