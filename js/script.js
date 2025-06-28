fetch('data/species.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('card-container');

    data.forEach(entry => {
      const card = document.createElement('div');
      card.className = 'card';

      // Inhalt der Karte
      card.innerHTML = `
        <div class="info">
          <h2>${entry.name}</h2>
          <p><strong>Owner:</strong> ${entry.owner || '–'}</p>
          <p><strong>Region:</strong> ${entry.region || '–'}</p>
          <p><strong>Height:</strong> ${entry.height || '–'}</p>
          <p><strong>Other Info:</strong> ${entry.otherInfo || '–'}</p>
        </div>
        <img src="${entry.image || 'assets/placeholder.jpg'}" alt="${entry.name}" class="full-image">
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Fehler beim Laden der JSON:', error);
    document.getElementById('card-container').innerHTML = '<p>Fehler beim Laden der Masterlist.</p>';
  });
