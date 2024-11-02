document.addEventListener('DOMContentLoaded', function() {
    fetch('elements/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('content').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading HTML:', error);
        document.getElementById('content').innerHTML = '<p>Failed to load content.</p>';
      });
  });