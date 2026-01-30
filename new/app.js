// year set
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Close other details when one opens (accordion behavior)
const accs = document.querySelectorAll('.acc');
accs.forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open) {
      accs.forEach(o => { if (o !== d) o.open = false; });
    }
  });
});
