const amdFpsData = {
    "7900": { "Cyberpunk 2077": 120, "Fortnite": 240, "GTA V": 170, "Valorant": 380, "Hogwarts Legacy": 115 },
    "6700": { "Cyberpunk 2077": 85, "Fortnite": 180, "GTA V": 130, "Valorant": 290, "Hogwarts Legacy": 85 },
    "5700": { "Cyberpunk 2077": 65, "Fortnite": 140, "GTA V": 105, "Valorant": 220, "Hogwarts Legacy": 70 },
    "580": { "Cyberpunk 2077": 40, "Fortnite": 90, "GTA V": 75, "Valorant": 150, "Hogwarts Legacy": 50 },
    "480": { "Cyberpunk 2077": 35, "Fortnite": 80, "GTA V": 70, "Valorant": 135, "Hogwarts Legacy": 45 }
};

const amdGpuSelect = document.getElementById("amdGpuSelect");
const amdCtx = document.getElementById("amdFpsChart").getContext("2d");


//Graficas de AMD
let amdChart = new Chart(amdCtx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'FPS promedio (1080p)',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
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

function updateAmdChart(gpu) {
    const games = Object.keys(amdFpsData[gpu]);
    const fps = Object.values(amdFpsData[gpu]);
    amdChart.data.labels = games;
    amdChart.data.datasets[0].data = fps;
    amdChart.update();
}

amdGpuSelect.addEventListener("change", () => updateAmdChart(amdGpuSelect.value));
updateAmdChart(amdGpuSelect.value);