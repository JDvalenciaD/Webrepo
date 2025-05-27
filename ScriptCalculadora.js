document.getElementById('fpsForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const cpu = document.getElementById('cpu').value;
    const gpu = document.getElementById('gpu').value;
    const ram = parseInt(document.getElementById('ram').value);
    const resultDiv = document.getElementById('result');

    const adjustmentFactor = ram === 8 ? 0.75 : ram === 32 ? 1.05 : 1;

    // Estructura de FPS por combinación CPU+GPU (datos de ejemplo)
    const fpsData = {
        //Informacion de procesaddor con relacion a la tarjeta grafica
        '5600X': {
            '4090': { 'Fortnite': [344, 516], 'Warzone': [170, 220] },
            '3080': { 'Fortnite': [200, 300], 'Warzone': [120, 160] },
            '960': { 'Fortnite': [60, 75], 'Warzone': [30, 45] }
        },
           '7700X': {
            '3080': { 'Fortnite': [250, 350], 'Warzone': [140, 180] },
            '2080': { 'Fortnite': [200, 250], 'Warzone': [110, 140] }
        },
        '12900K': {
                '3080': { 'Fortnite': [250, 350], 'Warzone': [140, 180] },
            '1080': { 'Fortnite': [120, 150], 'Warzone': [70, 90] }
        },
        '13400F': {
            '3060': { 'Fortnite': [150, 200], 'Warzone': [100, 140] },
            '1080': { 'Fortnite': [110, 140], 'Warzone': [80, 100] }
        },
        '9950X': {
            '5090': { 'Fortnite': [360, 520], 'Warzone': [190, 240] },
            '4090': { 'Fortnite': [350, 500], 'Warzone': [180, 230] }
        },
        '3990X': {
            '4090': { 'Fortnite': [300, 450], 'Warzone': [160, 210] }
        },
        '14100F': {
            '960': { 'Fortnite': [50, 65], 'Warzone': [25, 40] }
        },
        '3000G': {
            '960': { 'Fortnite': [40, 50], 'Warzone': [20, 30] }
        },
        'A46400': {
            '960': { 'Fortnite': [30, 35], 'Warzone': [10, 20] }
        }
    };

    const config = fpsData[cpu] && fpsData[cpu][gpu];
    if (config) {
        const fortnite = config['Fortnite'].map(f => Math.round(f * adjustmentFactor));
        const warzone = config['Warzone'].map(f => Math.round(f * adjustmentFactor));

        resultDiv.innerHTML = `
        <h4>Estimación de FPS</h4>
        <p><strong>Fortnite (1080p):</strong> ${fortnite[0]} - ${fortnite[1]} FPS</p>
        <p><strong>Warzone (1080p):</strong> ${warzone[0]} - ${warzone[1]} FPS</p>
        <p><strong>RAM:</strong> ${ram} GB ${ram === 8 ? '(limitante)' : ram === 32 ? '(óptimo)' : ''}</p>
      `;
        resultDiv.style.display = 'block';
    } else {
        resultDiv.innerHTML = `<p class="text-danger">⚠️ No se encontraron datos para esta combinación (${cpu} + ${gpu}).</p>`;
        resultDiv.style.display = 'block';
    }
});         