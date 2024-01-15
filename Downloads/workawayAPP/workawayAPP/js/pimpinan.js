document.addEventListener("DOMContentLoaded", function() {
    const tombolSetuju = document.getElementById("setuju");
    const tombolTolak = document.getElementById("tolak");
    const setujuForm = document.getElementById("setuju-form");
    const tolakForm = document.getElementById("tolak-form");
  
    tombolSetuju.addEventListener("click", function() {
      setujuForm.classList.remove("hidden");
      tolakForm.classList.add("hidden");
    });
  
    tombolTolak.addEventListener("click", function() {
      tolakForm.classList.remove("hidden");
      setujuForm.classList.add("hidden");
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const tombolSetujuLaporan = document.getElementById("setuju-laporan");
    const tombolTolakLaporan = document.getElementById("tolak-laporan");
    const setujuFormLaporan = document.getElementById("setuju-laporan-form");
    const tolakFormLaporan = document.getElementById("tolak-laporan-form");
  
    tombolSetujuLaporan.addEventListener("click", function() {
      setujuFormLaporan.classList.remove("hidden");
      tolakFormLaporan.classList.add("hidden");
    });
  
    tombolTolakLaporan.addEventListener("click", function() {
      tolakFormLaporan.classList.remove("hidden");
      setujuFormLaporan.classList.add("hidden");
    });
  });

  /* ttd */
  // Menangkap elemen tombol "TTD"
const ttdButton = document.getElementById("ttd");

// Menangkap elemen form konfirmasi "setuju-ttd-form"
const setujuTtdForm = document.getElementById("setuju-ttd-form");

// Menangkap tombol "simpan" dalam form konfirmasi
const setujuTtdButton = document.getElementById("setuju-ttd-button");

// Menangkap tombol "batal" dalam form konfirmasi
const batalTtdButton = document.getElementById("batal-ttd-button");

// Menambahkan event listener untuk menampilkan form konfirmasi saat tombol "TTD" diklik
ttdButton.addEventListener("click", function() {
  setujuTtdForm.classList.remove("hidden"); // Menghapus class "hidden" untuk menampilkan form
});

// Menambahkan event listener untuk menyembunyikan form konfirmasi saat tombol "batal" diklik
batalTtdButton.addEventListener("click", function() {
  setujuTtdForm.classList.add("hidden"); // Menambahkan class "hidden" untuk menyembunyikan form
});

// Menambahkan event listener untuk menangani saat tombol "simpan" diklik dalam form konfirmasi
setujuTtdButton.addEventListener("click", function() {
  // Di sini Anda dapat menambahkan logika untuk mengirim tanda tangan atau melakukan tindakan lain yang sesuai
  // Setelah tindakan selesai, Anda dapat menyembunyikan form konfirmasi
  setujuTtdForm.classList.add("hidden");
});
