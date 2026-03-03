function beraknaPrisX() {
    // Hämta värden
    const höjd = parseFloat(document.getElementById('höjd').value) || 0;
    const bredd = parseFloat(document.getElementById('bredd').value) || 0;
    const xVärde = parseFloat(document.getElementById('xVärde').value) || 0;

    // Validera
    if (höjd <= 0 || bredd <= 0) {
        document.getElementById('resultatX').innerHTML = 
            '<p style="color: #c0392b;">❌ Ange giltiga mått (större än 0 cm)</p>';
        return;
    }

    if (xVärde <= 0) {
        document.getElementById('resultatX').innerHTML = 
            '<p style="color: #c0392b;">❌ Välj ett X-värde</p>';
        return;
    }

    // Beräkna
    const summaMått = höjd + bredd;
    const pris = summaMått * xVärde;

    // Hämta text för X-värdet
    let xText = '';
    switch(xVärde) {
        case 20: xText = 'Nybörjare'; break;
        case 30: xText = 'Målat ett par år'; break;
        case 40: xText = 'Målat några år'; break;
        case 50: xText = 'Etablerad'; break;
        case 100: xText = 'Professionell'; break;
        default: xText = 'Anpassat X';
    }

    // Visa resultat
    const resultatDiv = document.getElementById('resultatX');
    resultatDiv.innerHTML = `
        <p>📐 <strong>Mått:</strong> ${höjd} cm × ${bredd} cm</p>
        <p>➕ <strong>Höjd + Bredd:</strong> ${summaMått} cm</p>
        <p>⚖️ <strong>X-värde (${xText}):</strong> ${xVärde}</p>
        <hr style="margin: 1rem 0; border: 1px dashed #d4b68a;">
        <p style="font-size: 1.8rem; color: #b38b5d;">💰 <strong>${pris.toFixed(0)} kr</strong></p>
        <p style="font-size: 1rem; color: #7d5e3a;">Priset är inklusive ram</p>
    `;
}

function nollstallX() {
    document.getElementById('höjd').value = 15;
    document.getElementById('bredd').value = 20;
    document.getElementById('xVärde').value = 40;
    
    document.getElementById('resultatX').innerHTML = 
        '<p>Fyll i mått och välj X för att se priset</p>';
}

// Enter-tangent
document.querySelectorAll('input, select').forEach(element => {
    element.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            beraknaPrisX();
        }
    });
});
