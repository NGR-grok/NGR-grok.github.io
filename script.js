fetch('https://api.github.com/repos/ngr-grok/NGR-grok.github.io/contents/sites')
  .then(response => response.json())
  .then(data => {
    const fileCount = data.length;
    document.getElementById('sites-hosting').textContent = `Currently hosting ${fileCount} sites.`;
  })
  .catch(error => console.error('Error fetching directory contents:', error));
