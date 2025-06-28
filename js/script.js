fetch('data/species.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('card-container');
    data.forEach(entry => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${entry.image}" alt="${entry.name}" class="character-img">
        <div class="info">
          <h2>${entry.name}</h2>
          <p><strong>Owner:</strong> ${entry.owner}</p>
          <p><strong>Region:</strong> ${entry.region}</p>
          <p><strong>Height:</strong> ${entry.height}</p>
          <p><strong>Other Info:</strong> ${entry.otherInfo}</p>
        </div>
      `;

      container.appendChild(card);
    });
  });
