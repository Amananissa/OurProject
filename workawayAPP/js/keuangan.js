document.getElementById("tambah-rincian-button").addEventListener("click", function() {
    document.getElementById("tambah-rincian-form").style.display = "block";
    });
    
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