document.addEventListener('DOMContentLoaded', function() {
    fetch('elements/nav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('jsnav').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading HTML:', error);
        document.getElementById('jasnav').innerHTML = '<p>Failed to load content.</p>';
      });
  });