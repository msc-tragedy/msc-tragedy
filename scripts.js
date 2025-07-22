async function loadVictims() {
    const response = await fetch('victims.json');
    const victims = await response.json();
    const tbody = document.querySelector('#victimTable tbody');
    const searchInput = document.getElementById('searchInput');
  
    function renderTable(data) {
        tbody.innerHTML = '';
        data.forEach(v => {
            const photoPath = `photos/${v.id}.jpg`;
            const row = document.createElement('tr');
            row.innerHTML = `
              <td><img src="${photoPath}" alt="Photo of ${v.name}" onerror="this.src='photos/placeholder.jpg'" width="50" height="60" /></td>
              <td>${v.studentId}</td>
              <td>${v.name}</td>
              <td>${v.class}</td>
              <td>${v.section}</td>
              <td>${v.shift}</td>
              <td>${v.parents}</td>
              <td class="status-${v.status}">${v.status}</td>
              <td>${v.bloodGroup}</td>
              <td>${v.hospital || '-'}</td>
              <td>${v.contact}</td>
            `;
            tbody.appendChild(row);
        });
    }
  
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const filtered = victims.filter(v =>
        v.name.toLowerCase().includes(query) ||
        v.status.toLowerCase().includes(query) ||
        v.bloodGroup.toLowerCase().includes(query) ||
        v.parents.toLowerCase().includes(query) ||
        v.studentId.toLowerCase().includes(query) ||
        v.class.toLowerCase().includes(query) ||
        v.section.toLowerCase().includes(query) ||
        v.shift.toLowerCase().includes(query) ||
        (v.hospital && v.hospital.toLowerCase().includes(query))
      );
      
      renderTable(filtered);
    });
  
    renderTable(victims);
  }
  
  loadVictims();
  