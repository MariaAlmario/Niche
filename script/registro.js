document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("Registro");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("NombreUsuario").value.trim();
    const correo = document.getElementById("Correo").value.trim();
    const contrasena = document.getElementById("Contrasena").value;
    const confirmar = document.getElementById("ConfirmarContrasena").value;

    if (contrasena !== confirmar) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const response = await fetch("registro.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `nombre=${encodeURIComponent(nombre)}&correo=${encodeURIComponent(correo)}&password=${encodeURIComponent(contrasena)}`
    });

    const data = await response.text();
    alert(data);
  });
});
