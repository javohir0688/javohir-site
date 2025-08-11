const toggleBtn = document.getElementById('toggleBtn');
const message = document.getElementById('message');

toggleBtn.addEventListener('click', () => {
  if (message.style.display === 'none') {
    message.style.display = 'block';
    toggleBtn.textContent = 'Xatni yopish';
  } else {
    message.style.display = 'none';
    toggleBtn.textContent = 'Xatni ochish';
  }
});
