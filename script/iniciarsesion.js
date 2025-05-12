document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("iniciarsesion");

    formulario.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita que el formulario se envíe automáticamente

      const usuario = document.getElementById("Usuario").value.trim();
      const contrasena = document.getElementById("Contrasena").value.trim();

      if (usuario === "" || contrasena === "") {
        alert("Por favor completa todos los campos.");
        return;
      }

      // Aquí podrías enviar los datos a un archivo PHP con fetch, por ejemplo:
      fetch("login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `usuario=${encodeURIComponent(usuario)}&password=${encodeURIComponent(contrasena)}`
      })
        .then(res => res.text())
        .then(data => {
          alert(data); // Muestra la respuesta del servidor (PHP)
        })
        .catch(error => {
          console.error("Error al iniciar sesión:", error);
          alert("Hubo un error al intentar iniciar sesión.");
        });
    });
  });

