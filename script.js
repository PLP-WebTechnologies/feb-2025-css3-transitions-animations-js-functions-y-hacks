// Load stored preferences on page load
document.addEventListener('DOMContentLoaded', () => {
  const storedName = localStorage.getItem('username');
  const theme = localStorage.getItem('theme');

  if (storedName) {
    alert(`Welcome back, ${storedName}!`);
  }

  if (theme === 'dark') {
    document.body.classList.add('dark');
  }
});

document.getElementById('saveBtn').addEventListener('click', () => {
  const username = document.getElementById('username').value.trim();
  if (username) {
    localStorage.setItem('username', username);
    alert('Name saved successfully!');
  } else {
    alert('Please enter a name!');
  }
});

document.getElementById('animateBtn').addEventListener('click', () => {
  const box = document.getElementById('box');
  box.classList.add('animate');
  setTimeout(() => box.classList.remove('animate'), 500);
});

document.getElementById('toggleThemeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});