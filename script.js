async function loadVictims() {
  const response = await fetch('victims.json');
  const victims = await response.json();
  const tbody = document.querySelector('#victimTable tbody');
  const searchInput = document.getElementById('searchInput');
  const formBase = "https://tally.so/r/wo8L5e?Victim-ID=";

  const riskLabel = {
    urgent: '🔴 Urgent',
    critical: '🟡 Critical',
    stable: '🟢 Stable'
  };

  function renderTable(data) {
    tbody.innerHTML = '';
    data.forEach(v => {
      const row = document.createElement('tr');
      const photoPath = `photos/${v.id}.jpg`;
      row.innerHTML = `
        <td><img src="${photoPath}" alt="${v.name}" class="clickable-photo" data-src="${photoPath}" width="50" height="60" /></td>
        <td>${v.occupation || '-'}</td>
        <td>${v.studentId}</td>
        <td>${v.name}</td>
        <td>${v.class}</td>
        <td>${v.section}</td>
        <td>${v.shift}</td>
        <td>${v.parents}</td>
        <td>${v.status}</td>
        <td>${v.bloodGroup}</td>
        <td>${v.hospital || '-'}</td>
        <td>
          ${v.contact || '-'}<br>
          <span class="risk-tag risk-${v.riskLevel}">${riskLabel[v.riskLevel]}</span><br>
          <a class="btn" href="${formBase}" target="_blank">📤 Report Found</a>
          <a class="btn" href="${formBase}" target="_blank">📞 Request Info</a>
        </td>
      `;
      tbody.appendChild(row);
    });
  }

  function applyFilters() {
    const status = document.getElementById('filterStatus').value.toLowerCase();
    const cls = document.getElementById('filterClass').value.toLowerCase();
    const blood = document.getElementById('filterBlood').value.toLowerCase();
    const query = searchInput.value.toLowerCase();

    const filtered = victims.filter(v =>
      (!status || v.status.toLowerCase() === status) &&
      (!cls || v.class.toLowerCase() === cls) &&
      (!blood || v.bloodGroup.toLowerCase() === blood) &&
      (v.name.toLowerCase().includes(query) ||
       v.parents.toLowerCase().includes(query) ||
       v.studentId.toLowerCase().includes(query))
    );
    renderTable(filtered);
  }

  searchInput.addEventListener('input', applyFilters);
  document.querySelectorAll('#filterStatus, #filterClass, #filterBlood').forEach(s => s.addEventListener('change', applyFilters));
  renderTable(victims);

  document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('clickable-photo')) {
      const src = e.target.dataset.src;
      document.getElementById('lightbox-img').src = src;
      document.getElementById('lightbox').style.display = 'block';
    }
  });

  document.querySelector('.close').onclick = function () {
    document.getElementById('lightbox').style.display = 'none';
  };
}

loadVictims();
