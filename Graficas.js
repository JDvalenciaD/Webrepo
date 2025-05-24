const fpsData = {
      "3060": { "Cyberpunk 2077": 55, "Fortnite": 120, "GTA V": 90, "Valorant": 160, "Hogwarts Legacy": 50 },
      "3070": { "Cyberpunk 2077": 70, "Fortnite": 140, "GTA V": 110, "Valorant": 200, "Hogwarts Legacy": 65 },
      "3080": { "Cyberpunk 2077": 85, "Fortnite": 160, "GTA V": 130, "Valorant": 240, "Hogwarts Legacy": 78 },
      "4060": { "Cyberpunk 2077": 60, "Fortnite": 130, "GTA V": 100, "Valorant": 180, "Hogwarts Legacy": 55 }
    };

    const gpuSelect = document.getElementById("gpuSelect");
    const ctx = document.getElementById("fpsChart").getContext("2d");

    //Graficas de Nvidia
    let chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'FPS',
          data: [],
          backgroundColor: 'rgba(81, 255, 0, 0.6)',
          borderColor: 'rgb(0, 0, 0)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "FPS" }
          },
          x: {
            title: { display: true, text: "Juegos" }
          }
        }
      }
    });

    function updateChart(gpu) {
      const games = Object.keys(fpsData[gpu]);
      const fps = Object.values(fpsData[gpu]);
      chart.data.labels = games;
      chart.data.datasets[0].data = fps;
      chart.update();
    }

    gpuSelect.addEventListener("change", () => updateChart(gpuSelect.value));
    updateChart(gpuSelect.value);