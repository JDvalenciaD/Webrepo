document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-busqueda-gpu");
  const input = document.getElementById("input-busqueda-gpu");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    const busqueda = input.value.trim().toLowerCase();

    // Mapa de términos de búsqueda a secciones ID
    const gpuMap = {
      "rtx 5090": "seccion-rtx5090",
      "rtx 4090": "seccion-rtx4090",
      "rtx 3090": "seccion-rtx3090",
      "rtx 2080": "seccion-rtx2080",
      "gtx 1080": "seccion-gtx1080",
      "gtx 960": "seccion-gtx960",
      "rx 7900": "seccion-rx7900",
      "rx 6700": "seccion-rx6700",
      "rx 5700": "seccion-rx5700",
      "rx 580": "seccion-rx580",
      "rx 480": "seccion-rx480"
    };

    if (gpuMap[busqueda]) {
      const targetId = gpuMap[busqueda];
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      alert("Tarjeta gráfica no encontrada.");
    }

    form.reset(); // Limpia el input
  });
});